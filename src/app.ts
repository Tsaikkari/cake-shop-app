import express from 'express'
import compression from 'compression'
import session from 'express-session'
import bodyParser from 'body-parser'
import lusca from 'lusca'
import mongo from 'connect-mongo'
import flash from 'express-flash'
import path from 'path'
import mongoose from 'mongoose'
import passport from 'passport'
import bluebird from 'bluebird'
import cors from 'cors'

import { MONGODB_URI, SESSION_SECRET } from './util/secrets'

import cakeRouter from './routers/cake'
import userRouter from './routers/user'
import orderRouter from './routers/order'
import reviewRouter from './routers/review'

import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'

import { google } from './config/passport'

const app = express()
const mongoUrl = MONGODB_URI

mongoose.Promise = bluebird
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
  })
  .catch((err: Error) => {
    console.log(
      'MongoDB connection error. Please make sure MongoDB is running. ' + err
    )
    process.exit(1)
  })

// Express configuration
app.set('port', process.env.PORT || 5000)

// Use common 3rd-party middlewares
app.use(cors())
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(lusca.xframe('SAMEORIGIN'))
app.use(lusca.xssProtection(true))
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*')
//   next()
// })
app.use(passport.initialize());
passport.use(google)


// Use routers
app.use('/api/v1/cakes', cakeRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/orders', orderRouter)
app.use('/api/v1/reviews', reviewRouter)

// Custom API error handler
app.use(apiErrorHandler)

export default app

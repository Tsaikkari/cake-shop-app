import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

import User from '../models/User'
import {
  BadRequestError,
  InternalServerError,
} from '../helpers/apiError'

// Validate token
const protect = async (
  req: Request, 
  res: Response, 
  next: NextFunction
  ) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]

      const decoded = jwt.verify(token, process.env.JWT_SECRET as string)
      const { id }: any = decoded
      req.user = { ... id }
      
      await User.findById(id).select('-password')

      next()
    } catch (error) {
      if (error.name === 'ValidationError') {
        next(new BadRequestError('Invalid Request', error))
      } else {
        next(new InternalServerError('Internal Server Error', error))
      }
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
}

export default protect
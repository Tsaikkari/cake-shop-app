import express from 'express'
import passport from 'passport'

import protect from '../middlewares/authMiddleware'

import {
  createUser,
  findById,
  deleteUser,
  findAll,
  updateUser,
  getUserProfile,
} from '../controllers/user'
import generateToken from '../util/generateToken'

const router = express.Router()

// Every path we define here will get /api/v1/users prefix
router.route('/profile').get(protect, getUserProfile)
router.get('/', findAll)
router.get('/:userId', findById)
router.put('/:userId', updateUser)
router.delete('/:userId', deleteUser)
router.post('/', createUser)
router.get('/auth/google/', 
  passport.authenticate('google', { scope: ['profile', 'email'], session: false })
)
router.get('/auth/google/cakes', 
  passport.authenticate('google', { scope: ['profile','email'] , session: false}
), 
async(req: any, res: any) => {
  const user = await req.user
  const id = user._id

  const token = generateToken(id)

  res.cookie('token', token)
  res.redirect('http://localhost:3000/shipping')
})

export default router

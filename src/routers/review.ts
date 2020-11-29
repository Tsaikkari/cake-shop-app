import express from 'express'

import {
  createReview,
  findById,
  deleteReview,
  findAll,
  updateReview,
} from '../controllers/review'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.get('/', findAll)
router.get('/:reviewId', findById)
router.put('/:reviewId', updateReview)
router.delete('/:reviewId', deleteReview)
router.post('/', createReview)

export default router

import { Request, Response, NextFunction } from 'express'

import Review from '../models/Review'
import ReviewService from '../services/review'
import {
  NotFoundError,
  BadRequestError,
  InternalServerError,
} from '../helpers/apiError'

// POST /reviews
export const createReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorName, rating, reviewText, } = req.body

    const review = new Review({
      authorName,
      rating, 
      reviewText,
    })

    await ReviewService.create(review)
    res.json(review)
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(new InternalServerError('Internal Server Error', error))
    }
  }
}

// PUT /reviews/:reviewId
export const updateReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const reviewId = req.params.reviewId
    const updatedReview = await ReviewService.update(reviewId, update)
    res.json(updatedReview)
  } catch (error) {
    next(new NotFoundError('Review not found', error))
  }
}

// DELETE /reviews/:reviewId
export const deleteReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await ReviewService.deleteReview(req.params.reviewId)
    res.status(204).end()
  } catch (error) {
    next(new NotFoundError('Review not found', error))
  }
}

// GET /reviews/:reviewId
export const findById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await ReviewService.findById(req.params.reviewId))
  } catch (error) {
    next(new NotFoundError('Review not found', error))
  }
}

// GET /reviews
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await ReviewService.findAll())
  } catch (error) {
    next(new NotFoundError('Reviews not found', error))
  }
}

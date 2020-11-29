import { Request, Response, NextFunction } from 'express'

import Cake from '../models/Cake'
import CakeService from '../services/cake'
import {
  NotFoundError,
  BadRequestError,
  InternalServerError,
} from '../helpers/apiError'

// POST /cakes
export const createCake = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user, name, incredients, size, layers, price, texture, isLactoseFree, isGluteinFree, image, description, stock, reviews, rating, numReviews, category } = req.body

    const cake = new Cake({
      user,
      name,
      incredients,
      size,
      layers,
      price,
      texture,
      isLactoseFree,
      isGluteinFree,
      image,
      description,
      stock,
      reviews,
      numReviews,
      category,
    })

    await CakeService.create(cake)
    res.json(cake)
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(new InternalServerError('Internal Server Error', error))
    }
  }
}

// PUT /cakes/:cakeId
export const updateCake = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const cakeId = req.params.cakeId
    const updatedCake = await CakeService.update(cakeId, update)
    res.json(updatedCake)
  } catch (error) {
    next(new NotFoundError('Cake not found', error))
  }
}

// DELETE /cakes/:cakeId
export const deleteCake = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await CakeService.deleteCake(req.params.cakeId)
    res.status(204).end()
  } catch (error) {
    next(new NotFoundError('Cake not found', error))
  }
}

// GET /cakes/:cakeId
export const findById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await CakeService.findById(req.params.cakeId))
  } catch (error) {
    next(new NotFoundError('Cake not found', error))
  }
}

// GET /cakes
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await CakeService.findAll())
  } catch (error) {
    next(new NotFoundError('Cakes not found', error))
  }
}

// GET /cakes/category?category=whatever
export const findCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categoryName = req.query.category
    res.json(await CakeService.findCategory(categoryName))
  } catch (error) {
    next(new NotFoundError(`Cake category not found`))
  }
}

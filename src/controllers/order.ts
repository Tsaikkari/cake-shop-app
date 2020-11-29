import { Request, Response, NextFunction } from 'express'

import Order from '../models/Order'
import OrderService from '../services/order'
import {
  NotFoundError,
  BadRequestError,
  InternalServerError,
} from '../helpers/apiError'

// POST /orders
export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user, items, shippingAddress, paymentMethod, paymentResult, taxprice, shippingPrice, totalPrice, isPaid, paidAt, isDelivered, deliveredAt } = req.body

    const order = new Order({
      user, 
      items, 
      shippingAddress,
      paymentMethod,
      paymentResult,
      taxprice,
      shippingPrice,
      totalPrice,
      isPaid,
      paidAt,
      isDelivered,
      deliveredAt,
    })

    await OrderService.create(order)
    res.json(order)
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(new InternalServerError('Internal Server Error', error))
    }
  }
}

// PUT /orders/:orderId
export const updateOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const orderId = req.params.orderId
    const updatedOrder = await OrderService.update(orderId, update)
    res.json(updatedOrder)
  } catch (error) {
    next(new NotFoundError('User not found', error))
  }
}

// DELETE /orders/:orderId
export const deleteOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await OrderService.deleteOrder(req.params.orderId)
    res.status(204).end()
  } catch (error) {
    next(new NotFoundError('Order not found', error))
  }
}

// GET /orders/:orderId
export const findById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await OrderService.findById(req.params.orderId))
  } catch (error) {
    next(new NotFoundError('Order not found', error))
  }
}

// GET /orders
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await OrderService.findAll())
  } catch (error) {
    next(new NotFoundError('Orders not found', error))
  }
}

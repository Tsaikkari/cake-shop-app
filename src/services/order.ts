import Order, { OrderDocument } from '../models/Order'

function create(order: OrderDocument): Promise<OrderDocument> {
  return order.save()
}

function findById(orderId: string): Promise<OrderDocument> {
  return Order.findById(orderId)
    .exec() // .exec() will return a true Promise
    .then(order => {
      if (!order) {
        throw new Error(`Order ${orderId} not found`)
      }
      return order
    })
}

function findAll(): Promise<OrderDocument[]> {
  return Order.find()
    .sort({ isPaid: 1, isDelivered: -1 })
    .exec() // Return a Promise
}

function update(
  orderId: string,
  update: Partial<OrderDocument>
): Promise<OrderDocument> {
  return Order.findById(orderId)
    .exec()
    .then(order => {
      if (!order) {
        throw new Error(`Order ${orderId} not found`)
      }

      if (update.items) {
        order.items = update.items
      }
      if (update.shippingAddress) {
        order.shippingAddress = update.shippingAddress
      }
      if (update.paymentMethod) {
        order.paymentMethod = update.paymentMethod
      }
      if (update.paymentResult) {
        order.paymentResult = update.paymentResult
      }
      if (update.taxprice) {
        order.taxprice = update.taxprice
      }
      if (update.shippingPrice) {
        order.shippingPrice = update.shippingPrice
      }
      if (update.totalPrice) {
        order.totalPrice = update.totalPrice
      }
      if (update.isPaid) {
        order.isPaid = update.isPaid
      }
      if (update.paidAt) {
        order.paidAt = update.paidAt
      }
      if (update.isDelivered) {
        order.isDelivered = update.isDelivered
      }
      if (update.deliveredAt) {
        order.deliveredAt = update.deliveredAt
      }

      return order.save()
    })
}

function deleteOrder(orderId: string): Promise<OrderDocument | null> {
  return Order.findByIdAndDelete(orderId).exec()
}

export default {
  create,
  findById,
  findAll,
  update,
  deleteOrder,
}

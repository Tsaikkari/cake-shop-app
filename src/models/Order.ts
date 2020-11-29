import mongoose, { Document } from 'mongoose'

export type OrderDocument = Document & {
  user: mongoose.Schema.Types.ObjectId
  items: any[]
  shippingAddress: string
  paymentMethod: string
  paymentResult: string
  taxprice: number
  shippingPrice: number
  totalPrice: number
  isPaid: boolean
  paidAt: Date
  isDelivered: boolean
  deliveredAt: Date
}

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  items: [
    {
      name: { type: String, required: true, },
      qty: { type: Number, required: true, },
      price: { type: Number, required: true, },
      cake: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: 'Cake'
      },
    }
  ],
  shippingAddress: {
    address: { type: String, required: true},
    city: { type: String, required: true},
    postalCode: { type: String, required: true},
    country: { type: String, required: true},
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  paymentResult: {
    id: { type: String, },
    status: { type: String, },
    update_time: { type: String, },
    email_address: { type: String, },
  },
  taxPrice: {
    type: Number,
    required: true, 
    default: 0,
  },
  shippingPrice: {
    type: Number,
    required: true, 
    default: 0,
  },
  totalPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  isPaid: {
    type: Boolean, 
    required: true, 
    default: false,
  },
  paidAt: {
    type: Date,
  },
  isDelivered: {
    type: Boolean, 
    required: true, 
    default: false,
  },
  deliveredAt: {
    type: Date,
  },
}, {
  timestamps: true,
})


export default mongoose.model<OrderDocument>('Order', orderSchema)

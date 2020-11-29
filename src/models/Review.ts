import mongoose, { Document } from 'mongoose'

export type ReviewDocument = Document & {
  authorName: string
  rating: number
  reviewText: string
}

const reviewSchema = new mongoose.Schema({
  authorName: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  reviewText: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
})


export default mongoose.model<ReviewDocument>('Review', reviewSchema)

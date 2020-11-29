import mongoose, { Document } from 'mongoose'

export type CakeDocument = Document & {
  user: mongoose.Schema.Types.ObjectId;
  name: string;
  incredients: string[];
  size: string;
  layers: number;
  price: number;
  texture: string;
  isLactoseFree: boolean;
  isGluteinFree: boolean;
  image: string;
  description: string;
  stock: number;
  reviews: mongoose.Schema.Types.ObjectId;
  rating: number;
  numReviews: number;
  category: string[];
}

const cakeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  name: {
    type: String,
    index: true,
    required: true,
  },
  incredients: {
    type: [String],
    required: true,
    index: true,
  },
  size: {
    type: String,
    required: true,
  },
  layers: {
    type: Number,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  texture: {
    type: String,
    required: true,
  },
  isLactoseFree: {
    type: Boolean,
  },
  isGluteinFree: {
    type: Boolean,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    default: 0,
  },
  reviews: [
    {
      review: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Review',
      },
    },
  ],
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  numReviews: {
    type: Number,
    required: true,
    default: 0,
  },
})

export default mongoose.model<CakeDocument>('Cake', cakeSchema)

import mongoose, { Document } from 'mongoose'

export type UserDocument = Document & {
  name: string
  email: string
  isAdmin: boolean
  googleId: string
}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  googleId: {
    type: String,
    required: true,
    default: true,
  }
}, {
  timestamps: true,
})


export default mongoose.model<UserDocument>('User', userSchema)

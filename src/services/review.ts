import Review, { ReviewDocument } from '../models/Review'

function create(review: ReviewDocument): Promise<ReviewDocument> {
  return review.save()
}

function findById(reviewId: string): Promise<ReviewDocument> {
  return Review.findById(reviewId)
    .exec() // .exec() will return a true Promise
    .then(review => {
      if (!review) {
        throw new Error(`Review ${reviewId} not found`)
      }
      return review
    })
}

function findAll(): Promise<ReviewDocument[]> {
  return Review.find()
    .sort({ authorName: 1, rating: -1 })
    .exec() // Return a Promise
}

function update(
  reviewId: string,
  update: Partial<ReviewDocument>
): Promise<ReviewDocument> {
  return Review.findById(reviewId)
    .exec()
    .then(review => {
      if (!review) {
        throw new Error(`Review ${reviewId} not found`)
      }

      if (update.authorName) {
        review.authorName = update.authorName
      }
      if (update.rating) {
        review.rating = update.rating
      }
      if (update.reviewText) {
        review.reviewText = update.reviewText
      }

      // Add more fields here if needed
      return review.save()
    })
}

function deleteReview(reviewId: string): Promise<ReviewDocument | null> {
  return Review.findByIdAndDelete(reviewId).exec()
}

export default {
  create,
  findById,
  findAll,
  update,
  deleteReview,
}

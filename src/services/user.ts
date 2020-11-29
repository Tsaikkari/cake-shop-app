import User, { UserDocument } from '../models/User'

function create(user: UserDocument): Promise<UserDocument> {
    return user.save()
}

function findById(userId: string): Promise<UserDocument> {
  return User.findById(userId)
    .exec() // .exec() will return a true Promise
    .then(user => {
      if (!user) {
        throw new Error(`User ${userId} not found`)
      }
      return user
    })
}

function findAll(): Promise<UserDocument[]> {
  return User.find()
    .sort({ name: 1, isAdmin: -1 })
    .exec() // Return a Promise
}

function update(
  userId: string,
  update: Partial<UserDocument>
): Promise<UserDocument> {
  return User.findById(userId)
    .exec()
    .then(user => {
      if (!user) {
        throw new Error(`User ${userId} not found`)
      }

      if (update.name) {
        user.name = update.name
      }
      if (update.email) {
        user.email = update.email
      }
      if (update.isAdmin) {
        user.isAdmin = update.isAdmin
      }

      return user.save()
    })
}

function deleteUser(userId: string): Promise<UserDocument | null> {
  return User.findByIdAndDelete(userId).exec()
}

export default {
  create,
  findById,
  findAll,
  update,
  deleteUser,
}

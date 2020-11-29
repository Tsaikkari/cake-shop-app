import Cake, { CakeDocument } from '../models/Cake'

function create(cake: CakeDocument): Promise<CakeDocument> {
  return cake.save()
}

function findById(cakeId: string): Promise<CakeDocument> {
  return Cake.findById(cakeId)
    .exec() // .exec() will return a true Promise
    .then(cake => {
      if (!cake) {
        throw new Error(`Movie ${cakeId} not found`)
      }
      return cake
    })
}

function findAll(): Promise<CakeDocument[]> {
  return Cake.find()
    .sort({ name: 1, rating: -1 })
    .exec() // Return a Promise
}

// find cakes in a particular category
function findCategory(categoryName: string) {
  return Cake.find()
    .where('category')
    .in([categoryName])
    .exec()
    .then((cake) => {
      if (!cake) {
        throw new Error(`Cakes in category ${categoryName} not found`)
      }
      return cake
    })
}

function update(
  cakeId: string,
  update: Partial<CakeDocument>
): Promise<CakeDocument> {
  return Cake.findById(cakeId)
    .exec()
    .then(cake => {
      if (!cake) {
        throw new Error(`Cake ${cakeId} not found`)
      }

      if (update.name) {
        cake.name = update.name
      }
      if (update.size) {
        cake.size = update.size
      }
      if (update.layers) {
        cake.layers = update.layers
      }
      if (update.price) {
        cake.price = update.price
      }
      if (update.texture) {
        cake.texture = update.texture
      }
      if (update.isLactoseFree) {
        cake.isLactoseFree = update.isLactoseFree
      }
      if (update.isGluteinFree) {
        cake.isGluteinFree = update.isGluteinFree
      }
      if (update.image) {
        cake.image = update.image
      }
      if (update.category) {
        cake.category = update.category
      }
      if (update.description) {
        cake.description = update.description
      }
      if (update.stock) {
        cake.stock = update.stock
      }
      if (update.rating) {
        cake.rating = update.rating
      }
      if (update.numReviews) {
        cake.numReviews = update.numReviews
      }

      // Add more fields here if needed
      return cake.save()
    })
}

function deleteCake(cakeId: string): Promise<CakeDocument | null> {
  return Cake.findByIdAndDelete(cakeId).exec()
}

export default {
  create,
  findById,
  findAll,
  findCategory,
  update,
  deleteCake,
}

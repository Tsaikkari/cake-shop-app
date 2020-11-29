import express from 'express'

import {
  createCake,
  findById,
  deleteCake,
  findAll,
  findCategory,
  updateCake,
} from '../controllers/cake'

const router = express.Router()

// Every path we define here will get /api/v1/ prefix
router.get('/category?', findCategory)
router.get('/', findAll)
router.get('/:cakeId', findById)
router.put('/:cakeId', updateCake)
router.delete('/:cakeId', deleteCake)
router.post('/', createCake)

export default router

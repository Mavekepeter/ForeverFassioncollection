import express from 'express'
import { addToCart,getCart,updateCart } from '../controllers/cartController.js'
import AuthUser from '../middleware/Auth.js'


const cartRouter = express.Router()

cartRouter.post('/get',AuthUser,getCart)
cartRouter.post('/add',AuthUser,addToCart)
cartRouter.post('/update',AuthUser,updateCart)

export default cartRouter 
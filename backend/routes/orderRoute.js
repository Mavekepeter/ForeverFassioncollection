import express from 'express'
import {placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus, verifyStripe, VerifyRazorpay} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import AuthUser from '../middleware/Auth.js'
const orderRouter = express.Router()
//Admin features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

//payment feature
orderRouter.post('/place',AuthUser,placeOrder)
orderRouter.post('/stripe',AuthUser,placeOrderStripe)
orderRouter.post('/razorpay',AuthUser,placeOrderRazorpay)

//user feature
orderRouter.post('/userorder',AuthUser,userOrders)
// verify order
orderRouter.post('/verifyStripe',AuthUser,verifyStripe)
orderRouter.post('/verifyRazorpay',AuthUser,VerifyRazorpay)


export default orderRouter
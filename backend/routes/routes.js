import { Router } from "express";
import banksRouter from './banks.routes.js'
import cashbacksRouter from './cashbacks.routes.js'

const router = Router()

router.use('/banks', banksRouter)
router.use('/cashbacks', cashbacksRouter)

export default router
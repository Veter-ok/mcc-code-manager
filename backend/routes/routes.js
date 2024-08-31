import { Router } from "express";
import banksRouter from './banks.routes.js'
import cashbacksRouter from './cashbacks.routes.js'
import authRouter from './auth.routes.js'

const router = Router()

router.use('/auth', authRouter)
// router.use('/user', )
router.use('/banks', banksRouter)
router.use('/cashbacks', cashbacksRouter)

export default router
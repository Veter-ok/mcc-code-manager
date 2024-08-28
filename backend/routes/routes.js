import { Router } from "express";
import banksRouter from './banks.routes.js'

const router = Router()

router.use('/banks', banksRouter)

export default router
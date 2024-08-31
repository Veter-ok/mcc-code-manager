import { Router } from "express";

const router = Router()

router.get('/isAuth', (req, res) => {
    res.status(200).json({})
})

router.post("/registration", (req, res) => {
    res.status(200).json({})
})

router.get('/login', (req, res) => {
    res.status(200).json({})
})

export default router
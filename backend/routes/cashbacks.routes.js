import { Router } from "express";
import { CASHBACK } from "../data.js";

const router = Router()

router.get("/", (req, res) => {
    res.status(200).json(CASHBACK)
})

router.get("/:id", (req, res) => {
    const {id} = req.params
    let cashback = CASHBACK[0]
    for(let i = 0; i < CASHBACK.length; i++) {
        if (CASHBACK[i].id === Number(id)){
            cashback = CASHBACK[i]
            break
        }
    }
    res.status(200).json(cashback)
})

export default router
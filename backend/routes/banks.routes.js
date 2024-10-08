import { BANKS } from "../data.js";
import { Router } from "express";

const router = Router()

router.get('/', (req, res) => {
    res.status(200).json(BANKS)
})

router.post("/", (req, res) => {
    res.status(200).json({})
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    let bank = BANKS[0]
    for(let i = 0; i < BANKS.length; i++) {
        if (BANKS[i].id === Number(id)){
            bank = BANKS[i]
            break
        }
    }
    res.status(200).json(bank)
})

router.delete("/:id", (req, res) => {
    const {id} = req.params
})

export default router
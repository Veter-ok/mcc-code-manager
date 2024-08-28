import { BANKS } from "../data.js";
import { Router } from "express";

const router = Router()

router.get('/getAll', (req, res) => {
    res.status(200).json(BANKS)
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

export default router
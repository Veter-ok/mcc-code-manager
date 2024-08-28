import express from 'express'
import router from './routes/routes.js'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*') 
    next()
})

app.use(express.json())
app.use('/api/v1/', router)

app.listen(process.env.PORT, () => {
	console.log(`[server]: Server is running at https://localhost:${process.env.PORT}`)
})
import express from 'express'
import cors from 'cors'
import { errorHandler } from './middlewares/error/error'

const app = express()

// parse json request body
app.use(express.json())

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }))
app.use(cors())


app.use((req, res, next) => {
  next({ message: 'Not found' })
})

app.use(errorHandler)

export default app;





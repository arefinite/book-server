import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { errorHandler, notFound } from './middleware/error.middleware.js'
import { bookRouter } from './router/book.router.js'

export const app = express()

// cors policy
if (process.env.NODE_ENV === 'DEVELOPMENT') {
  app.use(morgan('dev'))
}

// middlewares & routers
app.use(express.json())
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://192.168.0.102:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  })
)

app.use('/api/v1/books', bookRouter)

app.use(notFound)
app.use(errorHandler)

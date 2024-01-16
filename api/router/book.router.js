import { Router } from 'express'
import {
  addBook,
  deleteBook,
  getAllBooks,
  getBook,
  updateBook,
} from '../controller/book.controller.js'

export const bookRouter = Router()

bookRouter
  .get('/', getAllBooks)
  .get('/:id', getBook)
  .post('/', addBook)
  .put('/:id', updateBook)
  .delete('/:id', deleteBook)

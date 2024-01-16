import { Book } from '../model/book.model.js'
import { findBookById } from '../service/book.service.js'
import { HTTPError } from '../service/error.service.js'

// get all books
export const getAllBooks = async (req, res) => {
  const books = await Book.find({})
  res.status(200).json({ success: true, books })
}

// get single book
export const getBook = async (req, res,next) => {
  const { id } = req.params
  const book = await findBookById(id)
  if (!book) return next(new HTTPError(400, 'Book not found'))
  res.status(200).json({ success: true, book })
}

// add book
export const addBook = async (req, res,next) => {
  const { title, author, publishYear, description } = req.body
  const book = await Book.create({ title, author, publishYear, description })
  if (!book) return next(new HTTPError('400', 'Book can not be added'))
  res.status(200).json({ success: true, message: 'Book added successfully' })
}

// update book
export const updateBook = async (req, res,next) => {
  const { title, author, publishYear, description } = req.body
  const { id } = req.params
  const book = await findBookById(id)
  if (!book) return next(new HTTPError('400', 'Book not found'))
  const updateBook = await Book.findByIdAndUpdate(
    id,
    { title, author, publishYear, description },
    { new: true }
  )
  if (!updateBook) return next(new HTTPError('400', 'Book update failed'))
  res.status(200).json({ success: true, message: 'Book updated successfully' })
}

// delete book
export const deleteBook = async (req, res,next) => {
  const { id } = req.params
  const book = await findBookById(id)
  if (!book) return next(new HTTPError('400', 'Book not found'))
  const deleteBook = await Book.findByIdAndDelete(id)
  if (deleteBook) return next(new HTTPError('400', 'Book delete failed'))
  res.status(200).json({ success: true, message: 'Book deleted successfully' })
}

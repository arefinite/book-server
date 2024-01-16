import { Book } from "../model/book.model.js"

export const findBookById = async(id) => {
    return await Book.findById(id)
}
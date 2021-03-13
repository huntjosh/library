
import { BookRepository } from '../repositories/BookRepository'

// Overengineered for this simplicity, currently is just passing on the query, but becomes useful when we need more business logic
export const bookService = (bookRepository: BookRepository) => {
    const findAll = () => bookRepository.findAll();
    const findById = (id: string) => bookRepository.findById(id);

    return {
      findAll,
      findById
    };
  }
  

import { BorrowedBookRepository } from '../repositories/BorrowedBookRepository'

// Overengineered for this simplicity, currently is just passing on the query, but becomes useful when we need more business logic
export const borrowedBookService = (borrowedBookRepository: BorrowedBookRepository) => {
    const findAll = () => borrowedBookRepository.findAll();

    return {
      findAll,
    };
  }
  
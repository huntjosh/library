import { IBorrowedBook, BorrowedBook } from "../models/BorrowedBook";

export interface BorrowedBookRepository {
    findAll: () => Promise<IBorrowedBook[]>
}

export const borrowedBookRepository = (): BorrowedBookRepository => {
    const findAll = async (): Promise<IBorrowedBook[]> => await BorrowedBook.find().exec();

    return {
        findAll,
    };
}
  
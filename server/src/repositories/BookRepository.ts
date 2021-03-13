import { Book, IBook } from "../models/Book";

export interface BookRepository {
    findAll: () => Promise<IBook[]>
    findById: (id: string) => Promise<IBook | null>
}

export const bookRepository = (): BookRepository => {
    const findAll = async (): Promise<IBook[]> => await Book.find().exec();
    const findById = async (id: string): Promise<IBook | null> => await Book.findById(id).exec();

    return {
        findAll,
        findById
    };
}
  
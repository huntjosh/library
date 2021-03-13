import mongoose, { Document, Model } from 'mongoose';

export interface IBorrowedBook extends Document {
    dueDate: string,
    book: {
        title: string,
        author: string
    },
    bookWorm: {
        firstName: string,
        lastName: string
    }
}

const borrowedBookSchema = new mongoose.Schema({
    dueDate: String,
    book: {
        title: String,
        author: String
    },
    bookWorm: {
        firstName: String,
        lastName: String
    },
});

export const BorrowedBook: Model<IBorrowedBook> = mongoose.model("BorrowedBook", borrowedBookSchema);

import { apiUrl } from "./Api";

export interface Book {
  _id: string;
  id: number;
  title: string;
  author: string;
  author_id: number;
  author_bio: string;
  authors: string;
  title_slug: string;
  author_slug: string;
  isbn13: number;
  isbn10: number;
  price: string;
  format: string;
  publisher: string;
  pubdate: string;
  edition: string;
  subjects: string;
  lexile: string;
  pages: string;
  dimensions: string;
  overview: string;
  excerpt: string;
  synopsis: string;
  toc: string;
  editorial_reviews: string;
}

export interface BorrowedBook {
  _id: string;
  id: number;
  userId: number;
  bookId: number;
  dueDate: string;
  book: {
    title: string;
    author: string;
  };
  bookWorm: {
    firstName: string;
    lastName: string;
  };
}

export const booksEndpoint = `${apiUrl}/books`;

export const borrowedBooksEndpoint = `${apiUrl}/borrowedBooks`;

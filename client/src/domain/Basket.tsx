import { createContext, useState, useContext } from "react";
import { Book } from "./Books";

export interface Basket {
  books: Book[];
  addToBasket: (book: Book) => void;
  removeFromBasket: (book: Book) => void;
  clearBasket: VoidFunction;
}

export const BasketContext = createContext<Basket | undefined>(undefined);

export const BasketProvider = ({ children }: { children: React.ReactNode }) => {
  const [books, setBookState] = useState<Book[]>([]);
  const addToBasket = (book: Book) => {
    setBookState([...books, book]);
  };
  const removeFromBasket = (book: Book) => {
    setBookState(books.filter((currentBook) => book.id !== currentBook.id));
  };
  const clearBasket = () => {
    setBookState([]);
  };
  return (
    <BasketContext.Provider
      value={{ books, addToBasket, removeFromBasket, clearBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context)
    throw new Error("You need a parent BasketProvider for this context.");
  return context;
};

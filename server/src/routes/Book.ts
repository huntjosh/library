import { Router, Request, Response, NextFunction } from 'express';
import { bookService } from '../services/BookService';
import { celebrate, Joi } from 'celebrate';
import { bookRepository } from '../repositories/BookRepository';

export default (app: Router) => {
    app.get(
        '/books',
        celebrate({
            params: Joi.object({
                search: Joi.string(),
            }),
        }),
        async (req: Request, res: Response, next: NextFunction) => {
            try {
                const books = await bookService(bookRepository()).findAll();
                return res.status(200).json({ books });
            } catch (e) {
                return next(e);
            }
        },
    );

    app.get(
        '/books/:id',
        async (req: Request, res: Response, next: NextFunction) => {
            try {
                const book = await bookService(bookRepository()).findById(req.params.id);
                if (!book) return res.status(404);
                return res.status(200).json({ book });
            } catch (e) {
                return next(e);
            }
        },
    );
}
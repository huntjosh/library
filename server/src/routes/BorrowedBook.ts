import { Router, Request, Response, NextFunction } from 'express';
import { celebrate, Joi } from 'celebrate';
import { borrowedBookService } from '../services/BorrowedBookService';
import { borrowedBookRepository } from '../repositories/BorrowedBookRepository';

export default (app: Router) => {
    app.get(
        '/borrowedBooks',
        celebrate({
            params: Joi.object({
                search: Joi.string(),
            }),
        }),
        async (req: Request, res: Response, next: NextFunction) => {
            try {
                const books = await borrowedBookService(borrowedBookRepository()).findAll();
                return res.status(200).json({ books });
            } catch (e) {
                return next(e);
            }
        },
    );
}
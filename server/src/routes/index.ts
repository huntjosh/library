import { Router } from 'express';
import book from './Book';
import borrowedBook from './BorrowedBook';

export default (app: Router) => {
	book(app);
	borrowedBook(app);
	return app
}
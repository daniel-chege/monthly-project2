import { Router } from 'express';
import { postBook, getBooks, getBook, deleteBook,updateBook } from '../Controllers/bookingControl';

const BookRouter = Router();

// Define routes
BookRouter.get('', getBooks);
BookRouter.post('', postBook);
BookRouter.get('/:id', getBook);
BookRouter.delete('/:idDelete', deleteBook);
BookRouter.put('/:id', updateBook);
export default BookRouter;
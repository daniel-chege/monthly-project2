import { Router } from 'express';
import { postTour, getTours, getTour, deleteTour,updateTour } from '../Controllers/tourControl';

const TourRouter = Router();

// Define routes
TourRouter.get('', getTours);
TourRouter.post('', postTour);
TourRouter.get('/:id', getTour);
TourRouter.delete('/:idDelete', deleteTour);
TourRouter.put('/:id', updateTour);
export default TourRouter;
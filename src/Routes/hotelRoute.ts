import { Router } from 'express';
import { postHotel, getHotels, getHotel, deleteHotel,updateHotel } from '../Controllers/hotelContrl';

const HotelRouter = Router();

// Define routes
HotelRouter.get('', getHotels);
HotelRouter.post('', postHotel);
HotelRouter.get('/:id', getHotel);
HotelRouter.delete('/:idDelete', deleteHotel);
HotelRouter.put('/:id', updateHotel);
export default HotelRouter;
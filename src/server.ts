import express, { json } from 'express';
import TourRouter from './Routes/tourRoute';
import HotelRouter from './Routes/hotelRoute'; 
import BookRouter from './Routes/bookingRoutes';
import authRouter from './Routes/authRoute';


const app = express();
app.use(json());
app.use("/bookings", BookRouter);
app.use("/tours", TourRouter);
app.use("hotels", HotelRouter);
app.use("/auth", authRouter);
app.listen(5500, () => { console.log("server is running...") });
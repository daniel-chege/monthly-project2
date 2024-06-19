import { Request } from 'express';

export interface BookingRequest extends Request {
    body: {
        bookingName: string;
    };
}

export interface Ibooking{
    ID:string;
    Name:string;
}
export interface deleteBook{
    ID:string;
    Name:string;
}
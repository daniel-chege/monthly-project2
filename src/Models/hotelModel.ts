import {Request} from 'express'

export interface Hotel{
    HotelId: number,
    HotelName: string,
    HotelPrice:number,
}

export interface HotelRequest extends Request{
    body:{
        HotelName: string,
        HotelPrice: number,
        HotelId : string
    }
}

export interface IHotel{
    Id:string;
    Name:string;
}
export interface deleteHotel{
    Id:string;
    Name:string;
}
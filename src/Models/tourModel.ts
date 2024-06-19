import {Request} from 'express'

export interface Tour{
    TourId: string,
    TourName: string,
    TourPrice:number
}

export interface ToursRequest extends Request{
    body:{
        TourName: string,
        TourPrice: number,
        TourId : string
    }
}

export interface ITours{
    Id:string;
    Name:string;
}
export interface deleteTour{
    Id:string;
    Name:string;
}
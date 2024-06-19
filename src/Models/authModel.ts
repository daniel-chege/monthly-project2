import { Request } from 'express';

export interface User{
    UserID:string,
    UserName:string,
    Email:string,
    UserPassword:string,
    isDeleted:number,
    isEmailSent:number
}

export interface Payload{
    UserID:string,
    UserName:string
}
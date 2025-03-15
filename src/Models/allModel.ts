// import { getAllPolls, getPollByID, addPollResponse, getAllPollResponses } from './../Controllers/pollControl';
import { Request } from 'express';

export interface User{
    password: string;
    userName: string;
    UserID:string,
    phoneNumber: string,
    age: number,
    gender: 'male' | 'female' | 'intersex'
    roleName: 'civilian'| 'official'| 'admin',
    // Userdescription:string,
    email:string,
    // UserPassword:string,
    isDeleted:number,
    isEmailSent:number
}

export interface Payload{
    UserID:string,
    password:string
    UserName: string
}

//Views
export interface view{
    viewId: string,
    userId: string,
    description:string
}

export interface viewsRequest extends Request{
    body:{
        userId: string,
        description: string,
        viewId : string
    }
}

export interface Iviews{
    Id:string;
    description:string;
}
export interface deleteview{
    Id:string;
    description:string;
}

//incidences
export interface incidence{
    inId: string,
    userId: string,
    image: string,
    description:string
}

export interface incidencesRequest extends Request{
    body:{
        userId: string,
        image: string,
        description: number,
        inId : string
    }
}

export interface incidences{
    Id:string;
    description:string;
}
export interface deleteincidence{
    Id:string;
    Name:string;
}

//polls
//PollCreateModel
export interface PollCreateModel {
    userId: string;
    question: string;
    options: string; // Assuming options are stored as a JSON string
}

export interface deletePoll{
    pollId: string
}
export interface getPollByID{
    pollId: string
}
export interface getAllPolls{

}
export interface UserRole {
    userId: string;
    roleName: string;
}

//PollResponseCreateModel
export interface PollResponseCreateModel {
    pollId: string;
    userId: string;
    responses: string; // Assuming responses are stored as a JSON string
}

export interface PollResponse {
    responseId: string;
    pollId: string;
    userId: string;
    responses: string;
}

export interface Poll {
    pollId: string;
    userId: string;
    question: string;
    options: string;
    responses?: string; // Optional if not always present
    results?: string;   // Optional if not always present
}


//booking model
export  interface BookingRequest {
    body:{
        bookingName: string;
        bookingId: string; 
        date : string;
    }
}

export interface Ibooking {
    bookingName: string;
    bookingId: string;
}

export interface deleteBook{
    bookingName: string;
}

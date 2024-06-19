import { Request, Response } from 'express';
import { v4 as uid } from 'uuid';
import mssql from 'mssql';
import { BookingRequest, Ibooking,deleteBook } from '../Models/bookingModel';
import { sqlConfig } from '../config';
// import { log } from 'console';

// Get Booking Controller
export const getBooks = async (req: Request, res: Response) => {
    const pool = await mssql.connect(sqlConfig);
    try {
        const result = await pool.request().execute('getBooks');
        res.status(200).json(result.recordset);
    } catch (error) {
        console.error('Error getting Booking:', error);
        res.status(500).json({ message: 'couldnt get Booking' });
    } finally {
        pool.close();
    }
};


export const postBook=async(req:BookingRequest, res:Response)=>{
    try {
       
        //id
        const id =uid()
        const {bookingName}= req.body
        console.log(req.body);
        
        //make request to DB
        //connection
        const pool= await mssql.connect(sqlConfig)
        //make a request
        await pool.request()
        .input("bookingId",id)
        .input("bookingName",bookingName)
        .execute('postBook')
 
        res.status(201).json({message:"booking Created"})
 
    } catch (error) {
       
        res.status(500).json(error)
    }
}
 

export async function getBook  (request:Request<{id:string}>,response:Response){
    try{
        const pool = await mssql.connect(sqlConfig)
        const id = request.params.id
        //console.log(id)
        const result = (await pool.request()
        .input('bookingID', id)
        .execute('getBook')). recordset[0] as Ibooking;

        if (result){
          return response.status(200).json(result)

    } else {
          return  response.status(200).send({message:"booking not found"})
        }


    } catch(error) {
        response.status(500).send(error)
    }
}
export async function deleteBook  (request:Request<{id:string}>,response:Response){
    try{
        const pool = await mssql.connect(sqlConfig)
        const idDelete = request.params.id
        //console.log(id)
        const result = (await pool.request()
        .input('bookingID', idDelete)
        .execute('deleteBook')). recordset[0] as deleteBook;
        console.log(idDelete)
        if (result){
          return response.status(200).send({message:"booking deleted succesfully"})
    } else {
          return  response.status(200).send({message:"booking not found"})
        }


    } catch(error) {
        response.status(500).send(error)
    }
}
//updateBook
export async function updateBook  (request:Request<{id:string}>,response:Response){
    try{
        const pool = await mssql.connect(sqlConfig)
        const id = request.params.id
        const {bookingName}= request.body
        console.log(id)
        console.log({bookingName})
        const result = (await pool.request()
        .input('bookingID', id)
        .input('bookingName',bookingName)
        .execute('updateBook')). recordset[0] as Ibooking;
        console.log(id)
        if (result){
            return response.status(200).json(result)
    } else {
          return  response.status(200).send({message:"booking not found"})
        }


    } catch(error) {
        response.status(500).send(error)
    }
}
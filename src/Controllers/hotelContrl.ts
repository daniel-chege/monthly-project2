import { Request, Response } from 'express';
import { v4 as uid } from 'uuid';
import mssql from 'mssql';
import { HotelRequest, IHotel,deleteHotel } from '../Models/hotelModel';
import { sqlConfig } from '../config';
// import { log } from 'console';

// Get Hotel Controller
export const getHotels = async (req: Request, res: Response) => {
    const pool = await mssql.connect(sqlConfig);
    try {
        const result = await pool.request().execute('getHotels');
        res.status(200).json(result.recordset);
    } catch (error) {
        console.error('Error getting Hotel:', error);
        res.status(500).json({ message: 'couldnt get Hotel' });
    } finally {
        pool.close();
    }
};


export const postHotel=async(req:HotelRequest, res:Response)=>{
    try {
       
        //id
        const id =uid()
        const {HotelName}= req.body
        console.log(req.body);
        
        //make request to DB
        //connection
        const pool= await mssql.connect(sqlConfig)
        //make a request
        await pool.request()
        .input("HotelId",id)
        .input("HotelName",HotelName)
        .execute('postHotel')
 
        res.status(201).json({message:"Hotel Created"})
 
    } catch (error) {
       
        res.status(500).json(error)
    }
}
 

export async function getHotel  (request:Request<{id:string}>,response:Response){
    try{
        const pool = await mssql.connect(sqlConfig)
        const id = request.params.id
        //console.log(id)
        const result = (await pool.request()
        .input('HotelID', id)
        .execute('getHotel')). recordset[0] as IHotel;

        if (result){
          return response.status(200).json(result)

    } else {
          return  response.status(200).send({message:"Hotel not found"})
        }


    } catch(error) {
        response.status(500).send(error)
    }
}
export async function deleteHotel  (request:Request<{id:string}>,response:Response){
    try{
        const pool = await mssql.connect(sqlConfig)
        const idDelete = request.params.id
        //console.log(id)
        const result = (await pool.request()
        .input('HotelID', idDelete)
        .execute('deleteHotel')). recordset[0] as deleteHotel;
        console.log(idDelete)
        if (result){
          return response.status(200).send({message:"Hotel deleted succesfully"})
    } else {
          return  response.status(200).send({message:"Hotel not found"})
        }


    } catch(error) {
        response.status(500).send(error)
    }
}
//updateHotel
export async function updateHotel  (request:Request<{id:string}>,response:Response){
    try{
        const pool = await mssql.connect(sqlConfig)
        const id = request.params.id
        const {HotelName}= request.body
        console.log(id)
        console.log({HotelName})
        const result = (await pool.request()
        .input('HotelID', id)
        .input('HotelName',HotelName)
        .execute('updateHotel')). recordset[0] as IHotel;
        console.log(id)
        if (result){
            return response.status(200).json(result)
    } else {
          return  response.status(200).send({message:"Hotel not found"})
        }


    } catch(error) {
        response.status(500).send(error)
    }
}
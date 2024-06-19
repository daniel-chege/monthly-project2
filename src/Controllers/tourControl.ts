import { Request, Response } from 'express';
import { v4 as uid } from 'uuid';
import mssql from 'mssql';
import { ToursRequest, ITours,deleteTour } from '../Models/tourModel';
import { sqlConfig } from '../config';
// import { log } from 'console';

// Get Tours Controller
export const getTours = async (req: Request, res: Response) => {
    const pool = await mssql.connect(sqlConfig);
    try {
        const result = await pool.request().execute('getTours');
        res.status(200).json(result.recordset);
    } catch (error) {
        console.error('Error getting Tours:', error);
        res.status(500).json({ message: 'couldnt get Tours' });
    } finally {
        pool.close();
    }
};


export const postTour=async(req:ToursRequest, res:Response)=>{
    try {
       
        //id
        const id =uid()
        const {TourName}= req.body
        console.log(req.body);
        
        //make request to DB
        //connection
        const pool= await mssql.connect(sqlConfig)
        //make a request
        await pool.request()
        .input("ToursId",id)
        .input("ToursName",TourName)
        .execute('postTour')
 
        res.status(201).json({message:"Tours Created"})
 
    } catch (error) {
       
        res.status(500).json(error)
    }
}
 

export async function getTour  (request:Request<{id:string}>,response:Response){
    try{
        const pool = await mssql.connect(sqlConfig)
        const id = request.params.id
        //console.log(id)
        const result = (await pool.request()
        .input('ToursID', id)
        .execute('getTour')). recordset[0] as ITours;

        if (result){
          return response.status(200).json(result)

    } else {
          return  response.status(200).send({message:"Tours not found"})
        }


    } catch(error) {
        response.status(500).send(error)
    }
}
export async function deleteTour  (request:Request<{id:string}>,response:Response){
    try{
        const pool = await mssql.connect(sqlConfig)
        const idDelete = request.params.id
        //console.log(id)
        const result = (await pool.request()
        .input('ToursID', idDelete)
        .execute('deleteTour')). recordset[0] as deleteTour;
        console.log(idDelete)
        if (result){
          return response.status(200).send({message:"Tours deleted succesfully"})
    } else {
          return  response.status(200).send({message:"Tours not found"})
        }


    } catch(error) {
        response.status(500).send(error)
    }
}
//updateTour
export async function updateTour  (request:Request<{id:string}>,response:Response){
    try{
        const pool = await mssql.connect(sqlConfig)
        const id = request.params.id
        const {ToursName}= request.body
        console.log(id)
        console.log({ToursName})
        const result = (await pool.request()
        .input('ToursID', id)
        .input('ToursName',ToursName)
        .execute('updateTour')). recordset[0] as ITours;
        console.log(id)
        if (result){
            return response.status(200).json(result)
    } else {
          return  response.status(200).send({message:"Tours not found"})
        }


    } catch(error) {
        response.status(500).send(error)
    }
}
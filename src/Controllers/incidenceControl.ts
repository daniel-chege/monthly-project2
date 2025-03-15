import { Request, Response } from 'express';
import { v4 as uid } from 'uuid';
import mssql from 'mssql';
import { incidencesRequest, incidences, deleteincidence } from '../Models/allModel';
import { sqlConfig } from '../config';
// import { log } from 'console';

// Get incidences Controller
export const getincidences = async (req: Request, res: Response) => {
    const pool = await mssql.connect(sqlConfig);
    try {
        const result = await pool.request().execute('getincidences');
        res.status(200).json(result.recordset);
    } catch (error) {
        console.error('Error getting incidences:', error);
        res.status(500).json({ message: 'couldnt get incidences' });
    } finally {
        pool.close();
    }
};


export const postincidence=async(req:incidencesRequest, res:Response)=>{
    try {
       
        //id
        const id =uid()
        const {description}= req.body
        console.log(req.body);
        
        //make request to DB
        //connection
        const pool= await mssql.connect(sqlConfig)
        //make a request
        await pool.request()
        .input("inId",id)
        .input("description",description)
        .execute('postincidence')
 
        res.status(201).json({message:"incidences Created"})
 
    } catch (error) {
       
        res.status(500).json(error)
    }
}
 

export async function getincidence  (request:Request<{id:string}>,response:Response){
    try{
        const {description}= request.body
        const pool = await mssql.connect(sqlConfig)
        const id = request.params.id
        //console.log(id)
        const result = (await pool.request()
        .input('inId', id)
        .input('description', description)
        .execute('getincidence')). recordset[0] as incidences;

        if (result){
          return response.status(200).json(result)

    } else {
          return  response.status(200).send({message:"incidences not found"})
        }


    } catch(error) {
        response.status(500).send(error)
    }
}
export async function deleteincidence  (request:Request<{id:string}>,response:Response){
    try{
        const pool = await mssql.connect(sqlConfig)
        const idDelete = request.params.id
        //console.log(id)
        const result = (await pool.request()
        .input('inId', idDelete)
        .execute('deleteincidence')). recordset[0] as deleteincidence;
        console.log(idDelete)
        if (result){
          return response.status(200).send({message:"incidence deleted succesfully"})
    } else {
          return  response.status(200).send({message:"incidence not found"})
        }


    } catch(error) {
        response.status(500).send(error)
    }
}

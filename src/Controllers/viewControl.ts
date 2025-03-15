import { Request, Response } from 'express';
import { v4 as uid } from 'uuid';
import mssql from 'mssql';
import { viewsRequest, Iviews,deleteview } from '../Models/allModel';
import { sqlConfig } from '../config';
// import { log } from 'console';

// Get views Controller
export const getviews = async (req: Request, res: Response) => {
    const pool = await mssql.connect(sqlConfig);
    try {
        const result = await pool.request().execute('getviews');
        res.status(200).json(result.recordset);
    } catch (error) {
        console.error('Error getting views:', error);
        res.status(500).json({ message: 'couldnt get views' });
    } finally {
        pool.close();
    }
};


export const postview=async(req:viewsRequest, res:Response)=>{
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
        .input("viewsId",id)
        .input("description",description)
        .execute('postview')
 
        res.status(201).json({message:"views Created"})
 
    } catch (error) {
       
        res.status(500).json(error)
    }
}
 

export async function getview  (request:Request<{id:string}>,response:Response){
    try{
        const {description}= request.body
        const pool = await mssql.connect(sqlConfig)
        const id = request.params.id
        //console.log(id)
        const result = (await pool.request()
        .input('viewsId', id)
        .input('description', description)
        .execute('getview')). recordset[0] as Iviews; 

        if (result){
          return response.status(200).json(result)

    } else {
          return  response.status(200).send({message:"views not found"})
        }


    } catch(error) {
        response.status(500).send(error)
    }
}
export async function deleteview  (request:Request<{id:string}>,response:Response){
    try{
        const pool = await mssql.connect(sqlConfig)
        const idDelete = request.params.id
        //console.log(id)
        const result = (await pool.request()
        .input('viewID', idDelete)
        .execute('deleteview')). recordset[0] as deleteview;
        console.log(idDelete)
        if (result){
          return response.status(200).send({message:"view deleted succesfully"})
    } else {
          return  response.status(200).send({message:"view not found"})
        }


    } catch(error) {
        response.status(500).send(error)
    }
}

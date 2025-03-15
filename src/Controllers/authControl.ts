import { Request, Response } from 'express';
import { v4 as uid } from 'uuid';
import mssql from 'mssql';
import { sqlConfig } from '../config';
// import { log } from 'console';
import { RegisterSchema } from '../Helpers/indexHelp'
import Bcrypt from 'bcrypt'
import { User,Payload } from '../Models/allModel';
import jwt from 'jsonwebtoken'
import path from 'path';
import dotenv from 'dotenv';
import { DbHelper } from '../db'
// import { sendRegistrationEmail } from '../util/index';
dotenv.config({ path: path.resolve(__dirname, '../../.env') });


const dbInstance = new DbHelper()

export const registerUser = async (req: Request, res: Response) => {
    try {
        const id = uid();
        const { UserName, Email, password } = req.body;
        console.log(req.body)

        const { error } = RegisterSchema.validate(req.body);
        if (error) {
            return res.status(400).json(error.details[0].message);
        }

        // Validate password against pattern
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
        if (!passwordRegex.test(password)) {
            return res.status(400).json({ message: "Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long." });
        }

        const HashPassword = await Bcrypt.hash(password, 9);
        console.log(HashPassword)

        // Insert user into database
        await dbInstance.exec('postuser', { UserId: id, UserName, email:Email, password: HashPassword });

        // Send registration email to the user
        // await sendRegistrationEmail(Email, UserName);

        res.status(201).json({ message: "User Created" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const login=async(req:Request, res:Response)=>{
    try{
        const {email, password}=req.body
        let pool= await mssql.connect(sqlConfig)

       let user= (await pool.request()

        .input("email",email)
    
        .execute('getuser')).recordset[0] as User
       
        console.log(user)
        if (user){
            const isValid=await Bcrypt.compare(password, user.password)

        if (isValid){
            const payload:Payload={
                UserID: user.UserID,
                UserName: user.userName,
                password: user.password
            }
              const token= jwt.sign(payload, process.env.SECRET as string,{expiresIn:'2h'})
            return res.status(200).json({message:"Login Successful!", token})
        }

        }
        
        return res.status(400).json({message:"invalid credentials"})
       // return res.status(200).json(user)
    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }

}
export const userone=async(req:Request, res:Response)=>{
    try{
        const { roleName, password}=req.body
        let pool= await mssql.connect(sqlConfig)

       let user= (await pool.request()

        .input("roleName", roleName)
    
        .execute('getUsers')).recordset[0] as User
       
        console.log(user)
        if (user){
            const isValid=await Bcrypt.compare(password, user.password)

        if (isValid){
            const payload:Payload={
                UserID: user.UserID,
                UserName: user.userName,
                password: user.password
            }
              const token= jwt.sign(payload, process.env.SECRET as string,{expiresIn:'2h'})
            return res.status(200).json({message:"Login Successful!", token})
        }

        }
        

        return res.status(400).json({message:"invalid credentials"})
       // return res.status(200).json(user)
    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }

}

//admin does not need to signUp
export const adminLogin = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
 
      if (email === 'admin@admin.com' && password === 'admin') {
        const token = jwt.sign({ userId: 'admin', role: 'admin' }, process.env.SECRET_KEY!, { expiresIn: '2h' });
        res.status(200).json({ token, message: 'Admin logged in successfully' });
      } else {
        res.status(401).json({ error: 'Invalid email or password' });
      }
    } catch (err) {
      console.error('Error during admin login:', err);
      res.status(500).json({ error: err instanceof Error ? err.message : 'Unknown error' });
    }
}
// export const login=async(req:Request, res:Response)=>{
//     try{
//         const {Email, password}=req.body
//         let pool= await mssql.connect(sqlConfig)

//        let user= (await pool.request()

//         .input("Email",Email)
    
//         .execute('getOneUser')).recordset as User[]
       
        
//         if (user.length !==0){
//             const isValid=await Bcrypt.compare(password, user[0].password)

//         if (isValid){
//             const payload:Payload={
//                 UserID:user[0].UserID,
//                 UserName:user[0].UserName
//             }
//               const token= jwt.sign(payload, process.env.SECRET as string,{expiresIn:'2h'})
//             return res.status(200).json({message:"Login Successful!", token})
//         }

//         }
        

//         return res.status(400).json({message:"invalid credentials"})
//        // return res.status(200).json(user)
//     } catch(error){
//         res.status(400).json(error)
//     }

// }
//import mssql from 'mssql'
import path from 'path'
import dotenv from 'dotenv'
//import { log } from 'console'
dotenv.config({path:path.resolve(__dirname,"../../.env")})

export const sqlConfig = {
    user:process.env.DB_USER,
    password:process.env.DB_PWD,
    database: process.env.DB_NAME,
    server:'localhost',
    pool:{
        max:10,
        min:0,
        idleTimeoutMillis: 30000
    },
    options:{
        encrypt: false,
        trustServerCertificate: true
    }
}
export const smtpConfig = {
    host:"smtp.gmail.com",
    service:"gmail",
    port:587,
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASS
    }
};
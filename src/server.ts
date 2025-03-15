import cors from 'cors'
import express, { json } from 'express';
import authRouter from './Routes/authRoute';
import viewRouter from './Routes/viewsRoutes';
import incidenceRouter from './Routes/incidencesRoutes';


const app = express();
app.use(cors());
app.use(json());
app.use("/auth", authRouter);
app.use("/view", viewRouter);
app.use("/incidence", incidenceRouter)
app.listen(5501, () => { console.log("server is running...") });
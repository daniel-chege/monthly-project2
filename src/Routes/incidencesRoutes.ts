import {Router} from "express"
import { getincidence, postincidence, getincidences, deleteincidence } from "../Controllers/incidenceControl"


const incidenceRouter=Router()
incidenceRouter.post("/:id",getincidence)
incidenceRouter.post("/",postincidence)
incidenceRouter.post("/",getincidences)
incidenceRouter.post("/:id",deleteincidence)

export default incidenceRouter
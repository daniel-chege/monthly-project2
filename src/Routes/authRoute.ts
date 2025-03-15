import {Router} from "express"
import { registerUser, login } from "../Controllers/authControl"
import { getincidences} from "../Controllers/incidenceControl"

const authRouter=Router()
authRouter.post("/register",registerUser)
authRouter.post("/login",login)
authRouter.post("/incidences", getincidences)
// authRouter.post("/forgotpassward",forgot-password)

export default authRouter
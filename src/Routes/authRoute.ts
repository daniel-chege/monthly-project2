import {Router} from "express"
import { registerUser, login } from "../Controllers/authControl"

const authRouter=Router()
authRouter.post("/register",registerUser)
authRouter.post("/login",login)

export default authRouter
import {Router} from "express"
import { getview, postview, getviews, deleteview } from "../Controllers/viewControl"
import { getincidences} from "../Controllers/incidenceControl"

const viewRouter=Router()
viewRouter.post("/id",getview)
viewRouter.post("/",postview)
viewRouter.post("/",getviews)
viewRouter.post("/id",deleteview)
viewRouter.post("/incidences", getincidences)
// viewRouter.post("/forgotpassward",forgot-password)

export default viewRouter
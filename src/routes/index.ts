import { Router } from "express"
import { spacexController } from "../controllers/spacexController.js"

const routes = Router()

routes.get("/spacex/next", spacexController.getNextLaunch)
routes.get("/spacex/latest", spacexController.getLatestLaunch)
routes.get("/spacex/upcoming", spacexController.getAllNextLaunches)
routes.get("/spacex/past", spacexController.getAllPastLaunches)

export default routes

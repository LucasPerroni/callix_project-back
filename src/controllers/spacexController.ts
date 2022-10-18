import { Request, Response } from "express"
import { spacexServices } from "../services/spacexServices.js"

async function getNextLaunch(req: Request, res: Response) {
  const data = await spacexServices.getNextLaunch()
  res.status(200).send({ launch: data })
}

async function getLatestLaunch(req: Request, res: Response) {
  const data = await spacexServices.getLatestLaunch()
  res.status(200).send({ launch: data })
}

async function getAllNextLaunches(req: Request, res: Response) {
  const data = await spacexServices.getAllNextLaunches()
  res.status(200).send({ launches: data })
}

async function getAllPastLaunches(req: Request, res: Response) {
  const data = await spacexServices.getAllPastLaunches()
  res.status(200).send({ launches: data })
}

export const spacexController = {
  getNextLaunch,
  getLatestLaunch,
  getAllNextLaunches,
  getAllPastLaunches,
}

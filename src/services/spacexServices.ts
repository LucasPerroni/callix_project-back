import axios from "axios"

async function getNextLaunch() {
  const { data }: { data: [] } = await axios.get("https://api.spacexdata.com/v5/launches/next")
  return data
}

async function getLatestLaunch() {
  const { data }: { data: [] } = await axios.get("https://api.spacexdata.com/v5/launches/latest")
  return data
}

async function getAllNextLaunches() {
  const { data }: { data: [] } = await axios.get("https://api.spacexdata.com/v5/launches/upcoming")
  return data
}

async function getAllPastLaunches() {
  const { data }: { data: [] } = await axios.get("https://api.spacexdata.com/v5/launches/past")
  return data
}

export const spacexServices = {
  getNextLaunch,
  getLatestLaunch,
  getAllNextLaunches,
  getAllPastLaunches,
}

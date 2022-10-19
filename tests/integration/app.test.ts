import supertest from "supertest"

import app from "../../src/app.js"

describe("GET /spacex/next", () => {
  it("return object of the next launch", async () => {
    const response = await supertest(app).get("/spacex/next")

    const date = new Date(response.body.launch.date_local)
    const now = new Date()
    const futureLaunch = date > now

    expect(response.status).toBe(200)
    expect(futureLaunch).toStrictEqual(true)
  })
})

describe("GET /spacex/latest", () => {
  it("return object of the latest launch", async () => {
    const response = await supertest(app).get("/spacex/latest")

    const date = new Date(response.body.launch.date_local)
    const now = new Date()
    const pastLaunch = date < now

    expect(response.status).toBe(200)
    expect(pastLaunch).toStrictEqual(true)
  })
})

describe("GET /spacex/upcoming", () => {
  it("return object with array of the upcoming launches", async () => {
    const response = await supertest(app).get("/spacex/upcoming")

    const date = new Date(response.body.launches[0].date_local)
    const now = new Date()
    const futureLaunch = date > now

    expect(response.status).toBe(200)
    expect(futureLaunch).toStrictEqual(true)
  })
})

describe("GET /spacex/past", () => {
  it("return object with array of the past launches", async () => {
    const response = await supertest(app).get("/spacex/past")

    const date = new Date(response.body.launches[0].date_local)
    const now = new Date()
    const pastLaunch = date < now

    expect(response.status).toBe(200)
    expect(pastLaunch).toStrictEqual(true)
  })
})

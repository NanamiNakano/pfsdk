import { PfClient } from "../src/client"
import { afterAll, beforeAll, describe, expect, test } from "@jest/globals"
import { QueryParams } from "../src/types"

const endpoint = "dev.zeroteam.top"

const client = new PfClient(endpoint)
const username = (Math.random() + 2).toString(36).substring(7)
const password = (Math.random() + 2).toString(36).substring(7)
beforeAll(async () => {
  await client.auth.register(username, password)
  await client.auth.login(username, password)
  await client.affiliate.active()
})

describe("User module", () => {
  test("Get balance logs", async () => {
    const result = await client.user.getBalanceLogs()
    expect(result.Ok).toBeTruthy()
  })

  test("Get affiliated user", async () => {
    const result = await client.user.getAffiliations()
    expect(result.Ok).toBeTruthy()
  })

  test("Get user data", async () => {
    const result = await client.user.getData()
    expect(result.Ok).toBeTruthy()
  })

  test("Change user's name", async () => {
    const result = await client.user.changeName((Math.random() + 2).toString(36).substring(7))
    expect(result.Ok).toBeTruthy()
  })

  test("Reset user's token", async () => {
    const result = await client.user.resetToken()
    expect(result.Ok).toBeTruthy()
  })

  test("Change user's password", async () => {
    const result = await client.user.changePassword(password,
        (Math.random() + 2).toString(36).substring(7))
    expect(result.Ok).toBeTruthy()
  })

  //TODO: Redeem CDKey Test
})

afterAll(async () => {
  await client.auth.login("admin", "admin")
  const query = {
    filter: "username",
    search: username
  } as QueryParams
  const result = await client.admin.user.getAll(query)
  if (result.Data) {
    await client.admin.user.delete(result.Data[0].id)
  }
})

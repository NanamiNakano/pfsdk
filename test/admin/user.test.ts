import { PfClient } from "../../src/client"
import { beforeAll, describe, expect, test } from "@jest/globals"
import { QueryParams } from "../../src/types"

const endpoint = "dev.zeroteam.top"

const client = new PfClient(endpoint)
const query = {
  limit: 1
} as QueryParams

beforeAll(async () => {
  await client.auth.login("admin", "admin")
})

describe("Admin user module", () => {
  test("Get system-wide balance logs", async () => {
    const result = await client.admin.user.getBalanceLogs(undefined, query)
    expect(result.Ok).toBeTruthy()
  })

  test("Reset a specified user's balance logs", async () => {
    const result = await client.admin.user.resetBalanceLogs(7)
    expect(result.Ok).toBeTruthy()
  })

  test("Get a system-wide list of affiliations", async () => {
    const result = await client.admin.user.getAffiliations(undefined, query)
    expect(result.Ok).toBeTruthy()
  })

  test("Get all user", async () => {
    const result = await client.admin.user.getAll(query)
    expect(result.Ok).toBeTruthy()
  })

  test("Get a specified user", async () => {
    const result = await client.admin.user.getUser(1)
    expect(result.Ok).toBeTruthy()
  })

  //TODO: User modification
})

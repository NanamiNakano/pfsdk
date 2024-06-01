import { beforeAll, describe, expect, test } from "@jest/globals"
import { PfClient } from "../src/client"
import type { QueryParams } from "../src/types"

const endpoint = "dev.zeroteam.top"

const client = new PfClient(endpoint)
const query = {
  limit: 1,
} as QueryParams

beforeAll(async () => {
  await client.auth.login("admin", "admin")
})

describe("Node module", () => {
  test("Get available nodes", async () => {
    const result = await client.node.getForwardNodes(query)
    expect(result.Ok).toBeTruthy()
  })

  test("Get a specified node", async () => {
    const result = await client.node.getForwardNode(1)
    expect(result.Ok).toBeTruthy()
  })

  test("Get node sessions", async () => {
    const result = await client.node.getNodeSessions()
    expect(result.Ok).toBeTruthy()
  })

  test("Get available nat nodes", async () => {
    const result = await client.node.getNatNodes(query)
    expect(result.Ok).toBeTruthy()
  })

  test("Get a specified nat node", async () => {
    const result = await client.node.getNatNode(1)
    expect(result.Ok).toBeTruthy()
  })
})

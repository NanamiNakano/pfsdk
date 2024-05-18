import { PfClient } from "../src/client"
import { beforeAll, describe, expect, test } from "@jest/globals"

const endpoint = "https://pf-demo.zeroteam.top/ajax"

const client = new PfClient(endpoint)
beforeAll(async () => {
  await client.auth.login("admin", "admin")
})

describe("Node module", () => {
  test("Get available nodes", async () => {
    const result = await client.node.getNodes()
    expect(result.Ok).toBeTruthy()
  })

  test("Get a specified node", async () => {
    const result = await client.node.getNode(1)
    expect(result.Ok).toBeTruthy()
  })

  test("Get node sessions", async () => {
    const result = await client.node.getNodeSessions()
    expect(result.Ok).toBeTruthy()
  })

  test("Get available nat nodes", async () => {
    const result = await client.node.getNatNodes()
    expect(result.Ok).toBeTruthy()
  })

  test("Get a specified nat node", async () => {
    const result = await client.node.getNatNode(1)
    expect(result.Ok).toBeTruthy()
  })
})

import { PfClient } from "../src/client"
import { beforeAll, describe, expect, test } from "@jest/globals"

const endpoint = "https://dev.zeroteam.top/ajax"

const client = new PfClient(endpoint)
beforeAll(async () => {
  await client.auth.login("admin", "admin")
})

describe("System module", () => {
  test("Get system settings", async () => {
    const result = await client.system.getSettings()
    expect(result.Ok).toBeTruthy()
  })

  test("Get system plugins", async () => {
    const result = await client.system.getPlugins()
    expect(result.Ok).toBeTruthy()
  })

  test("Get system plugin scripts", async () => {
    const result = await client.system.getPluginScripts()
    expect(result.Ok).toBeTruthy()
  })
})

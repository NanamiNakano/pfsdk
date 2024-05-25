import { beforeAll, describe, expect, test } from "@jest/globals"
import { PfClient } from "../src/client"

const endpoint = "dev.zeroteam.top"

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

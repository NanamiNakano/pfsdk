import { PfClient } from "../src/client"
import { beforeAll, describe, expect, test } from "@jest/globals"

const endpoint = "https://dev.zeroteam.top/ajax"

const client = new PfClient(endpoint)
beforeAll(async () => {
  await client.auth.login("admin", "admin")
})

describe("Affiliate module", () => {
  test("Get balance log", async () => {
    const result = await client.affiliate.getBalanceLogs()
    expect(result.Ok).toBeTruthy()
  })

  test("Active affiliate system", async () => {
    const result = await client.affiliate.active()
    expect(result.Ok || !result.Ok && result.Msg === "您已激活邀请系统").toBeTruthy()
  })

  test("Get data of affiliate system", async () => {
    const result = await client.affiliate.getData()
    expect(result.Ok || !result.Ok && result.Msg === "邀请系统未激活").toBeTruthy()
  })
})

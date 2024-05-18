import { PfClient } from "../src/client"
import { beforeAll, describe, expect, test } from "@jest/globals"

const endpoint = "https://pf-demo.zeroteam.top/ajax"
const webSocket = "wss://pf-demo.zeroteam.top/ws"

const client = new PfClient(endpoint, webSocket)
beforeAll(async () => {
  await client.auth.login("admin", "admin")
})

describe("Plan module", () => {
  test("Get available plans", async () => {
    const result = await client.plan.getCart()
    expect(result.Ok).toBeTruthy()
  })

  test("Buy a plan", async () => {
    const result = await client.plan.buy(1)
    expect(result.Ok || (!result.Ok && result.Msg === "请勿购买相同套餐")).toBeTruthy()
  })

  test("Get current plan", async () => {
    const result = await client.plan.getCurrentPlan()
    expect(result.Ok).toBeTruthy()
  })

  test("Renew current plan", async () => {
    const result = await client.plan.renew()
    expect(result.Ok || !result.Ok && result.Msg === "无需续订").toBeTruthy()
  })

  test("Reset traffic of current plan", async () => {
    const result = await client.plan.resetTraffic()
    expect(result.Ok).toBeTruthy()
  })

  test("Toggle auto renew", async () => {
    const result = await client.plan.toggleAutoRenew()
    expect(result.Ok).toBeTruthy()
  })
})

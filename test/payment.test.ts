import { PfClient } from "../src/client"
import { beforeAll, describe, expect, test } from "@jest/globals"

const endpoint = "https://dev.zeroteam.top/ajax"

const client = new PfClient(endpoint)
beforeAll(async () => {
  await client.auth.login("admin", "admin")
})

describe("Payment module", () => {
  test("Top up", async () => {
    const result = await client.payment.topUp(5)
    expect(result.Ok).toBeTruthy()
  })

  test("Proceed a payment", async () => {
    const result = await client.payment.pay(1, 1)
    expect(result.Ok).toBeTruthy()
  })

  test("Get available gateways", async () => {
    const result = await client.payment.getGateways()
    expect(result.Ok).toBeTruthy()
  })
})

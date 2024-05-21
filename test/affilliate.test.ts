import { PfClient } from "../src/client"
import { beforeAll, describe, expect, test } from "@jest/globals"
import { QueryParams } from "../src/types"

const endpoint = "dev.zeroteam.top"

const client = new PfClient(endpoint)
const query = {
  limit: 1
} as QueryParams

beforeAll(async () => {
  await client.auth.login("admin", "admin")
})

describe("Affiliate module", () => {
  test("Get balance log", async () => {
    const result = await client.affiliate.getBalanceLogs(query)
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

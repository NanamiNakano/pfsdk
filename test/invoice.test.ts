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

describe("Invoice module", () => {
  test("Get all Invoices", async () => {
    const result = await client.invoice.getInvoices(query)
    expect(result.Ok).toBeTruthy()
  })

  test("Get a specified invoice", async () => {
    const result = await client.invoice.getInvoice(1)
    expect(result.Ok).toBeTruthy()
  })
})

import { beforeAll, describe, expect, test } from "@jest/globals"
import { PfClient } from "../../src/client"
import type { PendingUserData, QueryParams } from "../../src/types"

const endpoint = "dev.zeroteam.top"

const client = new PfClient(endpoint)
const query = {
  limit: 1,
} as QueryParams

const pendingUser = {
  username: (Math.random() + 2).toString(36).substring(7),
  name: "Test User",
  plan_id: 1,
  permission_id: 1,
  reset_date: "0001-01-01",
  expire_date: "0001-01-01",
  auto_renew: true,
  rule: 1,
  nat_rule: 1,
  traffic: 1073741824,
  traffic_used: 0,
  speed: 1,
  burst_speed: 1,
  qps: 1,
  burst_qps: 1,
  max_ips: 1,
  max_conn: 1,
  ip_speed: 0,
  ip_burst_speed: 0,
  ip_qps: 0,
  ip_burst_qps: 0,
  conf: {},
  balance: 0,
  price: 0,
  period: 0,
  permission: 1,
  token: "zatCRUBcles6XqR4pzJb",
  last_active: "0001-01-01 00:00:00",
  registration_date: "2024-05-21 20:09:01",
} as PendingUserData

let toBeDeleted = -1

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
    const result = await client.admin.user.getUser(7)
    expect(result.Ok).toBeTruthy()
  })

  test("Modify a user", async () => {
    const result = await client.admin.user.modify(7, pendingUser)
    expect(result.Ok).toBeTruthy()
  })

  test("Add a user", async () => {
    const result = await client.admin.user.add(pendingUser)
    toBeDeleted = result.ID!
    expect(result.Ok).toBeTruthy()
  })

  test("Delete a user", async () => {
    const result = await client.admin.user.delete(toBeDeleted)
    expect(result.Ok).toBeTruthy()
  })

  test("Reset a specified user's traffic", async () => {
    const result = await client.admin.user.resetTraffic(7)
    expect(result.Ok).toBeTruthy()
  })
})

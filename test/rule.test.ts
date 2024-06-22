import { beforeAll, describe, expect, test } from "@jest/globals"
import { PfClient } from "../src/client"
import type { PendingRuleData, QueryParams } from "../src/types"

const endpoint = "dev.zeroteam.top"

const client = new PfClient(endpoint)
const query = {
  limit: 1,
} as QueryParams
const pendingRule = {
  node_id: 1,
  name: "JestCreated",
  mode: 0,
  protocol: "tcpudp",
  bind: "5002",
  targets: [
    {
      Host: "127.0.0.1",
      Port: 1,
    },
  ],
  proxy_protocol: 0,
  outbound: "",
  conf: {},
  dest_node: 0,
  dest_device: 0,
} as PendingRuleData
beforeAll(async () => {
  await client.auth.login("admin", "admin")
})

describe("Rule module", () => {
  test("Get rule list", async () => {
    const forwardResult = await client.forwardRule.getRuleList(query)
    const natResult = await client.natRule.getRuleList(query)
    expect(forwardResult.Ok && natResult.Ok).toBeTruthy()
  })

  test("Get rule", async () => {
    const result = await client.forwardRule.getRule(4)
    expect(result.Ok).toBeTruthy()
  })

  test("Add a rule", async () => {
    const result = await client.forwardRule.add(pendingRule)
    console.log(result)
    expect(result.Ok).toBeTruthy()
  })

  test("Modify a rule", async () => {
    const targetRule = await client.forwardRule.getRuleList({ search: "JestCreated", filter: "name" } as QueryParams)
    expect(targetRule.Ok).toBeTruthy()
    if (targetRule.Data) {
      const result = await client.forwardRule.modify(targetRule.Data[0].id, pendingRule)
      expect(result.Ok).toBeTruthy()
    }
  })

  test("Delete a rule", async () => {
    const targetRule = await client.forwardRule.getRuleList({ search: "JestCreated", filter: "name" } as QueryParams)
    expect(targetRule.Ok).toBeTruthy()
    if (targetRule.Data) {
      const result = await client.forwardRule.delete(targetRule.Data[0].id)
      expect(result.Ok).toBeTruthy()
    }
  })

  // TODO: More test
})

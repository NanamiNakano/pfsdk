import { PfClient } from "../src/client"
import { beforeAll, describe, expect, test } from "@jest/globals"

const endpoint = "https://pf-demo.zeroteam.top/ajax"

const client = new PfClient(endpoint)
beforeAll(async () => {
  await client.auth.login("admin", "admin")
})

describe("Announcement module", () => {
  test("Get all announcements", async () => {
    const result = await client.announcement.getAnnouncements()
    expect(result.Ok).toBeTruthy()
  })

  test("Get a specified announcement", async () => {
    const result = await client.announcement.getAnnouncement(0)
    expect(result.Ok).toBeTruthy()
  })
})

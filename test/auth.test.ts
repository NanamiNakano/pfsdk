import { PfClient } from "../src/client"
import { describe, expect, test } from "@jest/globals"

const endpoint = "https://pf-demo.zeroteam.top/ajax"

const client = new PfClient(endpoint)

describe("Auth module", () => {
  test("Login", async () => {
    const result = await client.auth.login("admin", "admin")
    expect(result.Ok).toBeTruthy()
  })

  // test("Get 3rd-party auth list", async () => {
  //   const result = await client.auth.getAuthList()
  //   expect(result.Ok).toBe(true)
  // })
  //
  // test("Get specific 3rd-party auth", async () => {
  //   const result = await client.auth.getAuth(1)
  //   expect(result.Ok).toBe(true)
  // })

  test("Register", async () => {
    const result = await client.auth.register(
        (Math.random() + 2).toString(36).substring(7),
        (Math.random() + 2).toString(36).substring(7))
    expect(result.Ok).toBeTruthy()
  })

  test("Logout", async () => {
    const result = await client.auth.logout()
    expect(result.Ok).toBeTruthy()
  })
})

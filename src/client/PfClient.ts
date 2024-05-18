import { Affiliate, Auth, Plan } from "../resources"
import axios, { AxiosInstance } from "axios"
import { wrapper } from "axios-cookiejar-support"
import { CookieJar } from "tough-cookie"
import { BasicResponse } from "../types"

export class PfClient {
  public axiosInstance: AxiosInstance
  public auth: Auth
  public affiliate: Affiliate
  public plan: Plan
  private readonly endpoint: string
  private readonly webSocket: string

  constructor(endpoint: string, webSocket: string) {
    this.endpoint = endpoint
    this.webSocket = webSocket
    if (typeof window === "undefined") {
      const jar = new CookieJar()
      this.axiosInstance = wrapper(axios.create({
        jar,
        baseURL: endpoint,
        withCredentials: true
      }))
    } else {
      this.axiosInstance = axios.create({
        baseURL: endpoint,
        withCredentials: true
      })
    }
    this.auth = new Auth(this)
    this.affiliate = new Affiliate(this)
    this.plan = new Plan(this)
  }
}

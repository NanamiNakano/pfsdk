import { Affiliate, Auth, Node, Plan } from "../resources"
import axios, { AxiosInstance } from "axios"
import { wrapper } from "axios-cookiejar-support"
import { CookieJar } from "tough-cookie"

export class PfClient {
  private readonly axiosInstance: AxiosInstance
  public auth: Auth
  public affiliate: Affiliate
  public plan: Plan
  public node: Node

  constructor(endpoint: string) {
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
    this.auth = new Auth(this.axiosInstance)
    this.affiliate = new Affiliate(this.axiosInstance)
    this.plan = new Plan(this.axiosInstance)
    this.node = new Node(this.axiosInstance)
  }
}

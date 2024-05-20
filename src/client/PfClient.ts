import { Affiliate, Announcement, Auth, Invoice, Node, Payment, Plan, System } from "../resources"
import axios, { AxiosInstance } from "axios"
import { wrapper } from "axios-cookiejar-support"
import { CookieJar } from "tough-cookie"

export class PfClient {
  public auth: Auth
  public affiliate: Affiliate
  public announcement: Announcement
  public plan: Plan
  public node: Node
  public invoice: Invoice
  public payment: Payment
  public system: System
  private readonly axiosInstance: AxiosInstance
  private readonly webSocket: string

  constructor(endpoint: string) {
    this.webSocket = `wss://${ endpoint }/ws`
    if (typeof window === "undefined") {
      const jar = new CookieJar()
      this.axiosInstance = wrapper(axios.create({
        jar,
        baseURL: `https://${ endpoint }/ajax`,
        withCredentials: true
      }))
    } else {
      this.axiosInstance = axios.create({
        baseURL: `https://${ endpoint }/ajax`,
        withCredentials: true
      })
    }
    this.auth = new Auth(this.axiosInstance)
    this.affiliate = new Affiliate(this.axiosInstance)
    this.announcement = new Announcement(this.axiosInstance)
    this.plan = new Plan(this.axiosInstance)
    this.node = new Node(this.axiosInstance)
    this.invoice = new Invoice(this.axiosInstance)
    this.payment = new Payment(this.axiosInstance)
    this.system = new System(this.axiosInstance)
  }
}

import type { AxiosInstance } from "axios"
import axios from "axios"
import { wrapper } from "axios-cookiejar-support"
import { CookieJar } from "tough-cookie"
import {
  Admin,
  Affiliate,
  Announcement,
  Auth,
  Device,
  Invoice,
  Node,
  Payment,
  Plan,
  Rule,
  System,
  User,
} from "../resources"

export class PfClient {
  public admin: Admin
  public auth: Auth
  public affiliate: Affiliate
  public announcement: Announcement
  public plan: Plan
  public node: Node
  public user: User
  public forwardRule: Rule
  public natRule: Rule
  public device: Device
  public invoice: Invoice
  public payment: Payment
  public system: System
  private readonly axiosInstance: AxiosInstance

  constructor(endpoint: string) {
    if (typeof window === "undefined") {
      const jar = new CookieJar()
      this.axiosInstance = wrapper(axios.create({
        jar,
        baseURL: `https://${endpoint}/ajax`,
        withCredentials: true,
      }))
    }
    else {
      this.axiosInstance = axios.create({
        baseURL: `https://${endpoint}/ajax`,
        withCredentials: true,
      })
    }
    this.admin = new Admin(this.axiosInstance)
    this.auth = new Auth(this.axiosInstance)
    this.affiliate = new Affiliate(this.axiosInstance)
    this.announcement = new Announcement(this.axiosInstance)
    this.plan = new Plan(this.axiosInstance)
    this.node = new Node(this.axiosInstance)
    this.user = new User(this.axiosInstance)
    this.forwardRule = new Rule(this.axiosInstance, false)
    this.natRule = new Rule(this.axiosInstance, true)
    this.device = new Device(this.axiosInstance)
    this.invoice = new Invoice(this.axiosInstance)
    this.payment = new Payment(this.axiosInstance)
    this.system = new System(this.axiosInstance)
  }
}

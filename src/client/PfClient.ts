import type { AxiosInstance } from "axios"
import axios from "axios"
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
  private session?: string

  constructor(endpoint: string) {
    this.axiosInstance = axios.create({
      baseURL: `https://${endpoint}/ajax`,
      withCredentials: true,
    })
    this.axiosInstance.interceptors.response.use((rps) => {
      const authorizationHeader = rps.headers["set-authorization"]
      if (authorizationHeader)
        this.session = authorizationHeader

      return rps
    })

    this.axiosInstance.interceptors.request.use((config) => {
      if (this.session)
        config.headers.Authorization = this.session

      return config
    })
    this.admin = new Admin(this.axiosInstance)
    this.auth = new Auth(this.axiosInstance)
    this.affiliate = new Affiliate(this.axiosInstance)
    this.announcement = new Announcement(this.axiosInstance, false)
    this.plan = new Plan(this.axiosInstance)
    this.node = new Node(this.axiosInstance)
    this.user = new User(this.axiosInstance)
    this.forwardRule = new Rule(this.axiosInstance, false, false)
    this.natRule = new Rule(this.axiosInstance, true, false)
    this.device = new Device(this.axiosInstance, false)
    this.invoice = new Invoice(this.axiosInstance, false)
    this.payment = new Payment(this.axiosInstance)
    this.system = new System(this.axiosInstance)
  }
}

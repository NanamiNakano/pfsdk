import type { AxiosInstance } from "axios"
import { AdminUser } from "./User"
import { AdminAffiliate } from "./Affiliate"
import { AdminRule } from "./Rule"

export class Admin {
  public affiliate: AdminAffiliate
  public user: AdminUser
  public forwardRule: AdminRule
  public natRule: AdminRule

  constructor(axiosInstance: AxiosInstance) {
    this.affiliate = new AdminAffiliate(axiosInstance)
    this.user = new AdminUser(axiosInstance)
    this.forwardRule = new AdminRule(axiosInstance, false)
    this.natRule = new AdminRule(axiosInstance, true)
  }
}

import type { AxiosInstance } from "axios"
import { AdminUser } from "./User"
import { AdminAffiliate } from "./Affiliate"

export class Admin {
  public affiliate: AdminAffiliate
  public user: AdminUser

  constructor(axiosInstance: AxiosInstance) {
    this.affiliate = new AdminAffiliate(axiosInstance)
    this.user = new AdminUser(axiosInstance)
  }
}

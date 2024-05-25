import type { AxiosInstance } from "axios"
import { AdminUser } from "./User"

export class Admin {
  public user: AdminUser

  constructor(axiosInstance: AxiosInstance) {
    this.user = new AdminUser(axiosInstance)
  }
}

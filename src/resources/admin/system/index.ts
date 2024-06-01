import type { AxiosInstance } from "axios"
import { CDKey } from "./CDKey"
import { AdminAuth } from "./Auth"

export class AdminSystem {
  public cdkey: CDKey
  public auth: AdminAuth

  constructor(axiosInstance: AxiosInstance) {
    this.cdkey = new CDKey(axiosInstance)
    this.auth = new AdminAuth(axiosInstance)
  }
}

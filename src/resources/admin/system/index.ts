import type { AxiosInstance } from "axios"
import { CDKey } from "./CDKey"
import { AdminAuth } from "./Auth"
import { AdminPayment } from "./Payment"

export class AdminSystem {
  public cdkey: CDKey
  public auth: AdminAuth
  public payment: AdminPayment

  constructor(axiosInstance: AxiosInstance) {
    this.cdkey = new CDKey(axiosInstance)
    this.auth = new AdminAuth(axiosInstance)
    this.payment = new AdminPayment(axiosInstance)
  }
}

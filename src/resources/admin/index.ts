import type { AxiosInstance } from "axios"
import { AdminUser } from "./User"
import { AdminAffiliate } from "./Affiliate"
import { AdminRule } from "./Rule"
import { AdminPlan } from "./Plan"
import { AdminPermission } from "./Permission"
import { AdminNode } from "./Node"

export class Admin {
  public affiliate: AdminAffiliate
  public user: AdminUser
  public forwardRule: AdminRule
  public natRule: AdminRule
  public plan: AdminPlan
  public permission: AdminPermission
  public node: AdminNode

  constructor(axiosInstance: AxiosInstance) {
    this.affiliate = new AdminAffiliate(axiosInstance)
    this.user = new AdminUser(axiosInstance)
    this.forwardRule = new AdminRule(axiosInstance, false)
    this.natRule = new AdminRule(axiosInstance, true)
    this.plan = new AdminPlan(axiosInstance)
    this.permission = new AdminPermission(axiosInstance)
    this.node = new AdminNode(axiosInstance)
  }
}

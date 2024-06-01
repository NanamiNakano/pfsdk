import type { BasicResponse, Config } from "./common"
import type { GroupData } from "./permission"
import type { UserData } from "./user"

export interface PlanData {
  id: number
  order: number
  name: string
  permission_id: number
  hidden: boolean
  rule: number
  nat_rule: number
  speed: number
  burst_speed: number
  qps: 0
  burst_qps: number
  max_ips: number
  max_conn: number
  ip_speed: number
  ip_burst_speed: number
  ip_qps: number
  ip_burst_qps: number
  conf: Config
  traffic: number
  qty: number
  price: number
  period: number
  note: string
}

export type PendingPlanData = Omit<PlanData, "id">

export type ClientPlanDataListResponse = BasicResponse & {
  Permission?: GroupData[]
  Plan?: PlanData[]
}

export type PlanDataListResponse = BasicResponse & {
  Data?: PlanData[]
  Count?: number
}

export type PlanDataResponse = BasicResponse & {
  Data?: PlanData
}

export type CurrentPlanResponse = BasicResponse & {
  Permission?: GroupData
  Plan?: PlanData
  User?: UserData
}

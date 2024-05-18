import { Config } from "./common"

export type UserData = {
  id: number
  username: string
  name: string
  plan_id: number
  permission_id: number
  reset_date: string
  expire_date: string
  auto_renew: boolean
  rule: number
  nat_rule: number
  traffic: number
  traffic_used: number
  speed: number
  burst_speed: number
  qps: number
  burst_qps: number
  max_ips: number
  max_conn: number
  conf: Config
  balance: number
  price: number
  period: number
  permission: number
  token: string
  registration_date: string
}

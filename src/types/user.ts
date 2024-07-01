import type { BasicResponse, Config } from "./common"

export interface UserData {
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

export type PendingUserData = Omit<UserData, "id" | "username"> & Partial<Pick<UserData, "username">>

export type UserDataResponse = BasicResponse & {
  Data?: UserData
}

export type UserDataListResponse = BasicResponse & {
  Data?: UserData[]
  Count?: number
}

export interface BalanceLog {
  id: number
  user_id: number
  type: string
  value: number
  origin_value: number
  new_value: number
  note: string
  created_at: string
}

export type BalanceLogResponse = BasicResponse & {
  Data?: BalanceLog[]
  Count?: number
}

export interface AffiliationData {
  id: number
  user_id: number
  invite_user_id: number
  first_charged: boolean
  created_at: string
}

export type AffiliationResponse = BasicResponse & {
  Data?: AffiliationData[]
  Count?: number
}

export type ResetTokenResponse = BasicResponse & {
  Token?: string
}

export type AddUserResponse = BasicResponse & {
  ID?: number
}

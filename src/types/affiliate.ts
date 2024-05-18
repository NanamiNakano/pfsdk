import { BasicResponse } from "./common"

export type BalanceLog = {
  id: number,
  user_id: number,
  type: "charge" | "payout",
  value: number,
  origin_value: number,
  new_value: number,
  note: string,
  created_at: string
}

export type BalanceLogResponse = BasicResponse & {
  Data?: [BalanceLog]
  Count?: number
}

export type AffiliateData = {
  user_id: number,
  code: string,
  balance: string,
  created_at: string,
}

export type AffiliateDateResponse = BasicResponse & {
  Data?: AffiliateData
}

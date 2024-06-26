import type { BasicResponse } from "./common"

export interface InvoiceData {
  id: number
  user_id: number
  amount: number
  status: "Paid" | "Unpaid"
  paid_at: string
  created_at: string
}

export type InvoiceListResponse = BasicResponse & {
  Data?: InvoiceData[]
  Count?: number
}

export type InvoiceDataResponse = BasicResponse & {
  Data?: InvoiceData
}

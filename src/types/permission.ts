import type { BasicResponse } from "./common"

export interface GroupData {
  id: number
  name: string
  nodes: string // Split using "|"
  protocol: string
  nat_protocol: string
}

export type PendingGroupData = GroupData

export type GroupDataListResponse = BasicResponse & {
  Data?: GroupData[]
  Count?: number
}

export type GroupDataResponse = BasicResponse & {
  Data?: GroupData
}

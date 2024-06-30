import type { BasicResponse, Config } from "./common"

export interface RuleData {
  id: number
  user_id: number
  node_id: number
  name: string
  mode?: number
  protocol: string
  bind: string
  targets: RuleTarget[]
  proxy_protocol: number
  outbound: string
  conf: Config
  status: string
  sync: boolean
  dest_node?: number
  dest_device?: number
  dest_sync: boolean
}

export type PendingRuleData = Omit<RuleData, "id" | "user_id" | "sync" | "status" | "dest_sync">

export interface RuleTarget {
  Host: string
  Port: number
}

export type RuleListResponse = BasicResponse & {
  Data?: RuleData[]
  Count?: number
}

export type RuleDataResponse = BasicResponse & {
  Data?: RuleData
}

export interface RuleTrafficStatistic {
  rule_id: number
  traffic: number
  date: string
}

export type RuleTrafficStatisticsResponse = BasicResponse & {
  Count?: number
  Data?: RuleTrafficStatistic[]
}

export interface RuleDebugData {
  Timestarp: string // FIXME: Typo
  Error: number
  Status: string
  MaxConn: number
  Connected: number
  Targets: {
    RClient: {
      Ok: boolean
      Error: string
      Data: {
        TCP: string
        UDP: string
      }
    }
  }
}

export interface TrafficData {
  Data: RuleDebugData | string
  Ok: boolean
}

export type RuleDebugResponse = BasicResponse & {
  InBound?: TrafficData
  OutBound?: TrafficData
}

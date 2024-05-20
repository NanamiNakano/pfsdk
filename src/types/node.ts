import { BasicResponse } from "./common"

export type NodeData = {
  id: number
  name: string
  addr: string
  protocol: string
  nat_protocol: string
  outbounds: any[]
  http_port: number
  https_port: number
  secure_port: number
  securex_port: number
  tls_port: number
  tls_sni: string
  traffic: number
  speed: number
  status_permission: number
  icp: boolean
  advanced_security: boolean
  allow_dests: string
  firewall: boolean
  tls_verify: boolean
  tls_verify_host: boolean
  blocked_path: string
  blocked_hostname: string
  blocked_protocol: string
  port_range: string
  reserved_ports: string
  reserved_target_ports: string
  note: string
  updated: string
  permission: number
}

export type NodeListResponse = BasicResponse & {
  Data?: NodeData[]
  Count?: number
}

export type NodeDataResponse = BasicResponse & {
  Data?: NodeData
}

export type NodeSessionData = {
  [key: string | number]: string[]
}

export type NodeSessionResponse = BasicResponse & {
  Data?: NodeSessionData
}

export type NatNodeData = NodeData

export type NatNodeListResponse = BasicResponse & {
  Data?: NatNodeData[]
  Count?: number
}

export type NatNodeDataResponse = BasicResponse & {
  Data?: NatNodeData
}

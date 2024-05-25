export interface PermissionGroup {
  id: number
  name: string
  nodes: string // Split using "|"
  protocol: string
  nat_protocol: string
}

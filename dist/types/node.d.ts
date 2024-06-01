import type { BasicResponse, Config } from "./common";
export interface ForwardNodeData {
    id: number;
    name: string;
    addr: string;
    protocol: string;
    nat_protocol: string;
    outbounds: any[];
    http_port: number;
    https_port: number;
    secure_port: number;
    securex_port: number;
    tls_port: number;
    tls_sni: string;
    traffic: number;
    speed: number;
    status_permission: number;
    icp: boolean;
    advanced_security: boolean;
    allow_dests: string;
    firewall: boolean;
    tls_verify: boolean;
    tls_verify_host: boolean;
    blocked_path: string;
    blocked_hostname: string;
    blocked_protocol: string;
    port_range: string;
    reserved_ports: string;
    reserved_target_ports: string;
    note: string;
    updated: string;
    permission: number;
}
export type ForwardNodeListResponse = BasicResponse & {
    Data?: ForwardNodeData[];
    Count?: number;
};
export type ForwardNodeDataResponse = BasicResponse & {
    Data?: ForwardNodeData;
};
export interface NodeSessionData {
    [key: string | number]: string[];
}
export type NodeSessionResponse = BasicResponse & {
    Data?: NodeSessionData;
};
export type NatNodeData = ForwardNodeData;
export type NatNodeListResponse = BasicResponse & {
    Data?: NatNodeData[];
    Count?: number;
};
export type NatNodeDataResponse = BasicResponse & {
    Data?: NatNodeData;
};
export interface NodeData {
    id: number;
    order: number;
    name: string;
    addr: string;
    assign_ips: string;
    protocol: string;
    nat_protocol: string;
    outbounds: {
        [key: string]: string;
    };
    conf: Config;
    nat_port: number;
    http_port: number;
    https_port: number;
    secure_port: number;
    securex_port: number;
    tls_port: number;
    tls_sni: string;
    traffic: number;
    speed: number;
    status_permission: number;
    icp: boolean;
    advanced_security: boolean;
    allow_dests: string;
    firewall: boolean;
    tls_verify: boolean;
    tls_verify_host: boolean;
    detect_all_traffic: boolean;
    blocked_path: string;
    blocked_hostname: string;
    blocked_protocol: string;
    secret: string;
    port_range: string;
    reserved_ports: string;
    reserved_target_ports: string;
    note: string;
    updated: string;
}
export type PendingNodeData = Omit<NodeData, "id" | "secret" | "updated">;
export type NodeDataListResponse = BasicResponse & {
    Data?: NodeData[];
    Count?: number;
};
export type NodeDataResponse = BasicResponse & {
    Data?: NodeData;
};

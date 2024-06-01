import type { BasicResponse, Config } from "./common";
export interface TunnelDeviceData {
    id: number;
    name: string;
    ips: string;
    mode: number;
    secure_port: number;
    securex_port: number;
    tls_port: number;
    tls_sni: string;
    conf: Config;
    secret: string;
    version: string;
    updated: string;
}
export type TunnelDeviceListResponse = BasicResponse & {
    Data?: TunnelDeviceData[];
    Count?: number;
};
export interface NatDeviceData {
    id: number;
    name: string;
    secret: string;
    version: string;
    updated: string;
}
export type NatDeviceListResponse = BasicResponse & {
    Data?: NatDeviceData[];
    Count?: number;
};
export type TunnelDeviceDataResponse = BasicResponse & {
    Data?: TunnelDeviceData;
};
export type NatDeviceDataResponse = BasicResponse & {
    Data?: NatDeviceData;
};
export interface PendingTunnelDeviceData {
    name: string;
    ips: string;
    mode: number;
    secure_port: number;
    securex_port: number;
    tls_port: number;
    tls_sni: string;
    conf: Config;
}
export interface PendingNatDeviceData {
    name: string;
}

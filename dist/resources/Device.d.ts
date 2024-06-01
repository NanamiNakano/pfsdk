import type { AxiosInstance } from "axios";
import type { BasicResponse, NatDeviceDataResponse, NatDeviceListResponse, PendingNatDeviceData, PendingTunnelDeviceData, QueryParams, TunnelDeviceDataResponse, TunnelDeviceListResponse } from "../types";
export declare class Device {
    private axiosInstance;
    constructor(axiosInstance: AxiosInstance);
    getTunnelDevices(query?: QueryParams): Promise<TunnelDeviceListResponse>;
    getNatDevices(query?: QueryParams): Promise<NatDeviceListResponse>;
    getTunnelDevice(id: number): Promise<TunnelDeviceDataResponse>;
    getNatDevice(id: number): Promise<NatDeviceDataResponse>;
    addTunnelDevice(device: PendingTunnelDeviceData): Promise<BasicResponse>;
    addNatDevice(device: PendingNatDeviceData): Promise<BasicResponse>;
    modifyTunnelDevice(id: number, device: PendingTunnelDeviceData): Promise<BasicResponse>;
    modifyNatDevice(id: number, device: PendingNatDeviceData): Promise<BasicResponse>;
    deleteTunnelDevice(id: number): Promise<BasicResponse>;
    deleteNatDevice(id: number): Promise<BasicResponse>;
}

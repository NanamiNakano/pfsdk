import type { AxiosInstance } from "axios";
import { Device } from "../Device";
import type { BasicResponse } from "../../types";
export declare class AdminDevice extends Device {
    constructor(axiosInstance: AxiosInstance);
    addTunnelDevice(_: any): Promise<BasicResponse>;
    addNatDevice(_: any): Promise<BasicResponse>;
    modifyTunnelDevice(_: any): Promise<BasicResponse>;
    modifyNatDevice(_: any): Promise<BasicResponse>;
    deleteTunnelDevice(_: any): Promise<BasicResponse>;
    deleteNatDevice(_: any): Promise<BasicResponse>;
}

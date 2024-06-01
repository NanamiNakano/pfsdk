import type { AxiosInstance } from "axios";
import type { BasicResponse } from "../../../types";
export declare class AdminCron {
    private axiosInstance;
    constructor(axiosInstance: AxiosInstance);
    userCleanUp(): Promise<BasicResponse>;
    invalidUserCleanUp(): Promise<BasicResponse>;
    trafficUsage(): Promise<BasicResponse>;
    mergeTrafficUsage(): Promise<BasicResponse>;
    expiredInvoiceCleanUp(): Promise<BasicResponse>;
    trafficStatisticCleanUp(): Promise<BasicResponse>;
    backupDatabaseDaily(): Promise<BasicResponse>;
}

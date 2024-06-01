import type { AxiosInstance } from "axios";
import type { BasicResponse, CDKeyDataListResponse, CDKeyDataResponse, CDKeyLogResponse, PendingCDKeyData, QueryParams } from "../../../types";
export declare class CDKey {
    private axiosInstance;
    constructor(axiosInstance: AxiosInstance);
    getKeys(query?: QueryParams): Promise<CDKeyDataListResponse>;
    getKey(id: number): Promise<CDKeyDataResponse>;
    add(key: PendingCDKeyData): Promise<BasicResponse>;
    modify(id: number, key: QueryParams): Promise<BasicResponse>;
    delete(id: number): Promise<BasicResponse>;
    getLogs(query?: QueryParams): Promise<CDKeyLogResponse>;
    resetLog(id: number): Promise<BasicResponse>;
}

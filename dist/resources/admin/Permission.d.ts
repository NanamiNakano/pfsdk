import type { AxiosInstance } from "axios";
import type { BasicResponse, GroupDataListResponse, GroupDataResponse, PendingGroupData, QueryParams } from "../../types";
export declare class AdminPermission {
    private axiosInstance;
    constructor(axiosInstance: AxiosInstance);
    getGroups(query?: QueryParams): Promise<GroupDataListResponse>;
    getGroup(id: number): Promise<GroupDataResponse>;
    add(group: PendingGroupData): Promise<BasicResponse>;
    modify(id: number, group: PendingGroupData): Promise<BasicResponse>;
    delete(id: number): Promise<BasicResponse>;
}

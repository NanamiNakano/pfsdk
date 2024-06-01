import type { AxiosInstance } from "axios";
import type { BasicResponse, PendingPlanData, PlanDataListResponse, PlanDataResponse, QueryParams } from "../../types";
export declare class AdminPlan {
    private axiosInstance;
    constructor(axiosInstance: AxiosInstance);
    getPlans(query?: QueryParams): Promise<PlanDataListResponse>;
    getPlan(id: number): Promise<PlanDataResponse>;
    add(plan: PendingPlanData): Promise<BasicResponse>;
    modify(id: number, plan: PendingPlanData): Promise<BasicResponse>;
    delete(id: number): Promise<BasicResponse>;
    sync(id: number): Promise<BasicResponse>;
}

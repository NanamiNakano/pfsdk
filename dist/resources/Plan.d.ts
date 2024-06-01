import type { AxiosInstance } from "axios";
import type { BasicResponse, CurrentPlanResponse, PlanListResponse } from "../types";
export declare class Plan {
    private axiosInstance;
    constructor(axiosInstance: AxiosInstance);
    /**
     * Get a list of available plans
     */
    getCart(): Promise<PlanListResponse>;
    /**
     * Get current plan for logged-in user
     */
    getCurrentPlan(): Promise<CurrentPlanResponse>;
    /**
     * Buy a specified plan
     * @param id
     */
    buy(id: number): Promise<BasicResponse>;
    /**
     * Renew current plan
     */
    renew(): Promise<BasicResponse>;
    /**
     * Reset traffic of current plan
     */
    resetTraffic(): Promise<BasicResponse>;
    /**
     * Toggle auto renew
     */
    toggleAutoRenew(): Promise<BasicResponse>;
}

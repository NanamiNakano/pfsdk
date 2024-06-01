import type { AxiosInstance } from "axios";
import type { BasicResponse, PendingRuleData, QueryParams, RuleDataResponse, RuleDebugResponse, RuleListResponse, RuleTrafficStatisticsResponse } from "../types";
export declare class Rule {
    axiosInstance: AxiosInstance;
    private readonly endpoint;
    constructor(axiosInstance: AxiosInstance, nat: boolean, admin: boolean);
    /**
     * Get rule list
     * @param query
     */
    getRuleList(query?: QueryParams): Promise<RuleListResponse>;
    /**
     * Get a specified rule
     * @param id
     */
    getRule(id: number): Promise<RuleDataResponse>;
    /**
     * Add a rule
     * @param rule
     */
    add(rule: PendingRuleData): Promise<BasicResponse>;
    /**
     * Modify a rule
     * @param id
     * @param rule
     */
    modify(id: number, rule: PendingRuleData): Promise<BasicResponse>;
    /**
     * Delete a rule
     * @param id
     */
    delete(id: number): Promise<BasicResponse>;
    /**
     * Restart a rule
     * @param id
     */
    restart(id: number): Promise<BasicResponse>;
    /**
     * Stop a rule
     * @param id
     */
    stop(id: number): Promise<BasicResponse>;
    /**
     * Start a rule
     * @param id
     */
    start(id: number): Promise<BasicResponse>;
    /**
     * Get rule traffic's statistics
     * @param query
     */
    getStatistics(query?: QueryParams): Promise<RuleTrafficStatisticsResponse>;
    /**
     * Reset a specified rule's traffic
     * @param id
     */
    resetStatistic(id: number): Promise<BasicResponse>;
    /**
     * Debug a rule
     * @param id
     */
    debug(id: number): Promise<RuleDebugResponse>;
}

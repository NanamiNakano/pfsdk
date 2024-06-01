import type { AxiosInstance } from "axios";
import type { AffiliateBalanceLogResponse, AffiliateDataResponse, BasicResponse, QueryParams } from "../types";
export declare class Affiliate {
    private axiosInstance;
    constructor(axiosInstance: AxiosInstance);
    /**
     * Get a list of affiliation balance log
     */
    getBalanceLogs(): Promise<AffiliateBalanceLogResponse>;
    /**
     * Get a list of affiliation balance log with query params
     * @param query
     */
    getBalanceLogs(query: QueryParams): Promise<AffiliateBalanceLogResponse>;
    /**
     * Get data of affiliate system
     */
    getData(): Promise<AffiliateDataResponse>;
    /**
     * Active affiliate system
     */
    active(): Promise<BasicResponse>;
    /**
     * Withdraw a specified amount of rewards to balance
     * @param amount
     */
    payout(amount: number): Promise<BasicResponse>;
}

import { AxiosInstance } from "axios";
import { AffiliationResponse, BalanceLogResponse, BasicResponse, PendingUserData, QueryParams, UserDataListResponse, UserDataResponse } from "../../types";
export declare class AdminUser {
    private axiosInstance;
    constructor(axiosInstance: AxiosInstance);
    /**
     * Get system-wide balance logs
     * @param userId
     * @param query
     */
    getBalanceLogs(userId?: number, query?: QueryParams): Promise<BalanceLogResponse>;
    /**
     * Reset a specified user's balance logs
     * @param userId
     */
    resetBalanceLogs(userId: number): Promise<BasicResponse>;
    /**
     * Get a system-wide list of affiliations
     * @param userId
     * @param query
     */
    getAffiliations(userId?: number, query?: QueryParams): Promise<AffiliationResponse>;
    /**
     * Get all user
     * @param query
     */
    getAll(query?: QueryParams): Promise<UserDataListResponse>;
    /**
     * Get a specified user
     * @param userId
     */
    getUser(userId: number): Promise<UserDataResponse>;
    /**
     * Add a user
     * @param user
     */
    add(user: PendingUserData): Promise<BasicResponse>;
    /**
     * modify a user
     * @param userId
     * @param user
     */
    modify(userId: number, user: PendingUserData): Promise<BasicResponse>;
    /**
     * Delete a user
     * @param userId
     */
    delete(userId: number): Promise<BasicResponse>;
    /**
     * Reset a specified user's traffic
     * @param userId
     */
    resetTraffic(userId: number): Promise<BasicResponse>;
}

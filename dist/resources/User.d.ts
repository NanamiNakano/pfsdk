import type { AxiosInstance } from "axios";
import type { AffiliationResponse, BalanceLogResponse, BasicResponse, QueryParams, ResetTokenResponse, UserDataResponse } from "../types";
export declare class User {
    private axiosInstance;
    constructor(axiosInstance: AxiosInstance);
    /**
     * Get a list of balance log
     */
    getBalanceLogs(): Promise<BalanceLogResponse>;
    /**
     * Get a list of balance log with query params
     * @param query
     */
    getBalanceLogs(query: QueryParams): Promise<BalanceLogResponse>;
    /**
     * Get a list of affiliated users
     */
    getAffiliations(): Promise<AffiliationResponse>;
    /**
     * Get a list of affiliated users with query params
     * @param query
     */
    getAffiliations(query: QueryParams): Promise<AffiliationResponse>;
    /**
     * Get user data
     */
    getData(): Promise<UserDataResponse>;
    /**
     * Change user's name
     * @param newName
     */
    changeName(newName: string): Promise<BasicResponse>;
    /**
     * Change user's password
     * @param oldPassword
     * @param newPassword
     */
    changePassword(oldPassword: string, newPassword: string): Promise<BasicResponse>;
    /**
     * Reset user's token
     */
    resetToken(): Promise<ResetTokenResponse>;
    /**
     * Redeem a CDKey
     * @param code
     */
    redeem(code: string): Promise<BasicResponse>;
}

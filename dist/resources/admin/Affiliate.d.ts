import type { AxiosInstance } from "axios";
import type { AffiliateDataListResponse, AffiliateDataResponse, BalanceLogResponse, BasicResponse, QueryParams } from "../../types";
export declare class AdminAffiliate {
    private axiosInstance;
    constructor(axiosInstance: AxiosInstance);
    getBalanceLogs(query?: QueryParams): Promise<BalanceLogResponse>;
    resetBalanceLog(id: number): Promise<BasicResponse>;
    getAffiliates(query?: QueryParams): Promise<AffiliateDataListResponse>;
    getAffiliate(id: number): Promise<AffiliateDataResponse>;
    payout(id: number, amount: number): Promise<BasicResponse>;
}

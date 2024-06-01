import type { BasicResponse } from "./common";
export interface AffiliateBalanceLog {
    id: number;
    user_id: number;
    type: "charge" | "payout";
    value: number;
    origin_value: number;
    new_value: number;
    note: string;
    created_at: string;
}
export type AffiliateBalanceLogResponse = BasicResponse & {
    Data?: AffiliateBalanceLog[];
    Count?: number;
};
export interface AffiliateData {
    user_id: number;
    code: string;
    balance: string;
    created_at: string;
}
export type AffiliateDataResponse = BasicResponse & {
    Data?: AffiliateData;
};

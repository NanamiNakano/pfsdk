import type { AxiosInstance } from "axios";
import type { PayResponse, PaymentGatewayListResponse, TopUpResponse } from "../types";
export declare class Payment {
    private axiosInstance;
    constructor(axiosInstance: AxiosInstance);
    /**
     * Top up a specified amount by creating a payment
     * Return an invoice id used for payment
     * @param amount
     */
    topUp(amount: number): Promise<TopUpResponse>;
    /**
     * Proceed a payment with specified payment gateway
     * @param gatewayId
     * @param invoiceId
     */
    pay(gatewayId: number, invoiceId: number): Promise<PayResponse>;
    /**
     * Get a list of available payment gateways
     */
    getGateways(): Promise<PaymentGatewayListResponse>;
}

import type { AxiosInstance } from "axios";
import type { BasicResponse, PaymentGatewayMetasResponse, PaymentGatewayOptionResponse, PaymentGatewaySettingResponse, PaymentGatewaySettingsResponse, PendingPaymentGatewaySettings, QueryParams } from "../../../types";
export declare class AdminPayment {
    private axiosInstance;
    constructor(axiosInstance: AxiosInstance);
    getGatewaySettings(query?: QueryParams): Promise<PaymentGatewaySettingsResponse>;
    getGatewaySetting(id: number): Promise<PaymentGatewaySettingResponse>;
    getGatewayMetas(): Promise<PaymentGatewayMetasResponse>;
    getGatewayOption(name: string): Promise<PaymentGatewayOptionResponse>;
    add(gateway: PendingPaymentGatewaySettings): Promise<BasicResponse>;
    modify(id: number, gateway: PendingPaymentGatewaySettings): Promise<BasicResponse>;
    delete(id: number): Promise<BasicResponse>;
    private parseSetting;
    private parseSettings;
}

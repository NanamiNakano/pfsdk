import type { BasicResponse, Option } from "./common";
export type TopUpResponse = BasicResponse & {
    invoice_id?: string;
};
export type PayResponse = BasicResponse & {
    RedirectLink?: string;
    QrCode?: string;
};
export interface PaymentGateway {
    id: number;
    name: string;
    fee: number;
}
export type PaymentGatewayListResponse = BasicResponse & {
    Data?: PaymentGateway[];
};
export interface PaymentGatewaySettings {
    id: number;
    name: string;
    type: string;
    fee: number;
    config: string[];
}
export type PaymentGatewaySettingsResponse = BasicResponse & {
    Data?: PaymentGatewaySettings[];
    Count?: number;
};
export type PaymentGatewaySettingResponse = BasicResponse & {
    Data?: PaymentGatewaySettings;
};
export interface PaymentGatewayMeta {
    Name: string;
    Description: string;
    Maintainer: string;
    Version: string;
    Type: string;
    Language: string;
    TargetAPI: number;
    Permissions: string[];
}
export type PaymentGatewayMetasResponse = BasicResponse & {
    Data?: {
        [name: string]: PaymentGatewayMeta;
    };
};
export type PaymentGatewayOptionResponse = BasicResponse & {
    Data?: Option[];
};
export type PendingPaymentGatewaySettings = Omit<PaymentGatewaySettings, "id">;

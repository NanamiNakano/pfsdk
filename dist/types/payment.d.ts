import { BasicResponse } from "./common";
export type TopUpResponse = BasicResponse & {
    invoice_id?: string;
};
export type PayResponse = BasicResponse & {
    RedirectLink?: string;
    QrCode?: string;
};
export type PaymentGateway = {
    id: number;
    name: string;
    fee: number;
};
export type PaymentGatewayListResponse = BasicResponse & {
    Data?: PaymentGateway[];
};

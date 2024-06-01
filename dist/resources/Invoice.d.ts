import type { AxiosInstance } from "axios";
import type { InvoiceDataResponse, InvoiceListResponse, QueryParams } from "../types";
export declare class Invoice {
    protected axiosInstance: AxiosInstance;
    private readonly endpoint;
    constructor(axiosInstance: AxiosInstance, admin: boolean);
    /**
     * Get a list of invoices
     */
    getInvoices(): Promise<InvoiceListResponse>;
    /**
     * Get a list of invoices with query params
     * @param query
     */
    getInvoices(query: QueryParams): Promise<InvoiceListResponse>;
    /**
     * Get a specified invoice
     * @param id
     */
    getInvoice(id: number): Promise<InvoiceDataResponse>;
}

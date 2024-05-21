import { AxiosInstance } from "axios";
import { InvoiceDataResponse, InvoiceListResponse, QueryParams } from "../types";
export declare class Invoice {
    private axiosInstance;
    constructor(axiosInstance: AxiosInstance);
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

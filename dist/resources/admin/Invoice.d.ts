import type { AxiosInstance } from "axios";
import { Invoice } from "../Invoice";
import type { BasicResponse } from "../../types";
export declare class AdminInvoice extends Invoice {
    constructor(axiosInstance: AxiosInstance);
    makeUp(id: number): Promise<BasicResponse>;
}

import type { AxiosInstance } from "axios";
import { Rule } from "../Rule";
import type { BasicResponse, PendingRuleData } from "../../types";
export declare class AdminRule extends Rule {
    constructor(axiosInstance: AxiosInstance, nat: boolean);
    add(_: PendingRuleData): Promise<BasicResponse>;
}

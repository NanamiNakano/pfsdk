import { BasicResponse, Config } from "./common";
import { PermissionGroup } from "./permission";
import { UserData } from "./user";
export type PlanData = {
    id: number;
    order: number;
    name: string;
    permission_id: number;
    hidden: boolean;
    rule: number;
    nat_rule: number;
    speed: number;
    burst_speed: number;
    qps: 0;
    burst_qps: number;
    max_ips: number;
    max_conn: number;
    ip_speed: number;
    ip_burst_speed: number;
    ip_qps: number;
    ip_burst_qps: number;
    conf: Config;
    traffic: number;
    qty: number;
    price: number;
    period: number;
    note: string;
};
export type PlanListResponse = BasicResponse & {
    Permission?: PermissionGroup[];
    Plan?: PlanData[];
};
export type CurrentPlanResponse = BasicResponse & {
    Permission?: PermissionGroup;
    Plan?: PlanData;
    User?: UserData;
};

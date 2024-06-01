import type { AxiosInstance } from "axios";
import { AdminUser } from "./User";
import { AdminAffiliate } from "./Affiliate";
import { AdminRule } from "./Rule";
import { AdminPlan } from "./Plan";
import { AdminPermission } from "./Permission";
import { AdminNode } from "./Node";
import { AdminDevice } from "./Device";
import { AdminAnnouncement } from "./Announcement";
import { AdminInvoice } from "./Invoice";
import { AdminSystem } from "./system";
export declare class Admin {
    affiliate: AdminAffiliate;
    user: AdminUser;
    forwardRule: AdminRule;
    natRule: AdminRule;
    plan: AdminPlan;
    permission: AdminPermission;
    node: AdminNode;
    device: AdminDevice;
    announcement: AdminAnnouncement;
    invoice: AdminInvoice;
    system: AdminSystem;
    constructor(axiosInstance: AxiosInstance);
}

import { Admin, Affiliate, Announcement, Auth, Device, Invoice, Node, Payment, Plan, Rule, System, User } from "../resources";
export declare class PfClient {
    admin: Admin;
    auth: Auth;
    affiliate: Affiliate;
    announcement: Announcement;
    plan: Plan;
    node: Node;
    user: User;
    forwardRule: Rule;
    natRule: Rule;
    device: Device;
    invoice: Invoice;
    payment: Payment;
    system: System;
    private readonly axiosInstance;
    constructor(endpoint: string, browser?: boolean);
}

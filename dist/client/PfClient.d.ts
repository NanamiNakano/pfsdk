import { Admin, Affiliate, Announcement, Auth, Invoice, Node, Payment, Plan, System, User } from "../resources";
export declare class PfClient {
    admin: Admin;
    auth: Auth;
    affiliate: Affiliate;
    announcement: Announcement;
    plan: Plan;
    node: Node;
    user: User;
    invoice: Invoice;
    payment: Payment;
    system: System;
    private readonly axiosInstance;
    constructor(endpoint: string);
}

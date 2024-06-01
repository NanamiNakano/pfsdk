"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const User_1 = require("./User");
const Affiliate_1 = require("./Affiliate");
const Rule_1 = require("./Rule");
const Plan_1 = require("./Plan");
const Permission_1 = require("./Permission");
const Node_1 = require("./Node");
const Device_1 = require("./Device");
const Announcement_1 = require("./Announcement");
const Invoice_1 = require("./Invoice");
const system_1 = require("./system");
class Admin {
    constructor(axiosInstance) {
        this.affiliate = new Affiliate_1.AdminAffiliate(axiosInstance);
        this.user = new User_1.AdminUser(axiosInstance);
        this.forwardRule = new Rule_1.AdminRule(axiosInstance, false);
        this.natRule = new Rule_1.AdminRule(axiosInstance, true);
        this.plan = new Plan_1.AdminPlan(axiosInstance);
        this.permission = new Permission_1.AdminPermission(axiosInstance);
        this.node = new Node_1.AdminNode(axiosInstance);
        this.device = new Device_1.AdminDevice(axiosInstance);
        this.announcement = new Announcement_1.AdminAnnouncement(axiosInstance);
        this.invoice = new Invoice_1.AdminInvoice(axiosInstance);
        this.system = new system_1.AdminSystem(axiosInstance);
    }
}
exports.Admin = Admin;

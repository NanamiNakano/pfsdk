"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PfClient = void 0;
const axios_1 = __importDefault(require("axios"));
const axios_cookiejar_support_1 = require("axios-cookiejar-support");
const tough_cookie_1 = require("tough-cookie");
const resources_1 = require("../resources");
class PfClient {
    constructor(endpoint) {
        if (typeof window === "undefined") {
            const jar = new tough_cookie_1.CookieJar();
            this.axiosInstance = (0, axios_cookiejar_support_1.wrapper)(axios_1.default.create({
                jar,
                baseURL: `https://${endpoint}/ajax`,
                withCredentials: true,
            }));
        }
        else {
            this.axiosInstance = axios_1.default.create({
                baseURL: `https://${endpoint}/ajax`,
                withCredentials: true,
            });
        }
        this.admin = new resources_1.Admin(this.axiosInstance);
        this.auth = new resources_1.Auth(this.axiosInstance);
        this.affiliate = new resources_1.Affiliate(this.axiosInstance);
        this.announcement = new resources_1.Announcement(this.axiosInstance);
        this.plan = new resources_1.Plan(this.axiosInstance);
        this.node = new resources_1.Node(this.axiosInstance);
        this.user = new resources_1.User(this.axiosInstance);
        this.forwardRule = new resources_1.Rule(this.axiosInstance, false);
        this.natRule = new resources_1.Rule(this.axiosInstance, true);
        this.device = new resources_1.Device(this.axiosInstance);
        this.invoice = new resources_1.Invoice(this.axiosInstance);
        this.payment = new resources_1.Payment(this.axiosInstance);
        this.system = new resources_1.System(this.axiosInstance);
    }
}
exports.PfClient = PfClient;

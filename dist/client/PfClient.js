"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PfClient = void 0;
const axios_1 = __importDefault(require("axios"));
const resources_1 = require("../resources");
class PfClient {
    constructor(endpoint) {
        this.axiosInstance = axios_1.default.create({
            baseURL: `https://${endpoint}/ajax`,
            withCredentials: true,
        });
        this.axiosInstance.interceptors.response.use((rps) => {
            const authorizationHeader = rps.headers["set-authorization"];
            if (authorizationHeader)
                this.session = authorizationHeader;
            return rps;
        });
        this.axiosInstance.interceptors.request.use((config) => {
            if (this.session)
                config.headers.Authorization = this.session;
            return config;
        });
        this.admin = new resources_1.Admin(this.axiosInstance);
        this.auth = new resources_1.Auth(this.axiosInstance);
        this.affiliate = new resources_1.Affiliate(this.axiosInstance);
        this.announcement = new resources_1.Announcement(this.axiosInstance, false);
        this.plan = new resources_1.Plan(this.axiosInstance);
        this.node = new resources_1.Node(this.axiosInstance);
        this.user = new resources_1.User(this.axiosInstance);
        this.forwardRule = new resources_1.Rule(this.axiosInstance, false, false);
        this.natRule = new resources_1.Rule(this.axiosInstance, true, false);
        this.device = new resources_1.Device(this.axiosInstance, false);
        this.invoice = new resources_1.Invoice(this.axiosInstance, false);
        this.payment = new resources_1.Payment(this.axiosInstance);
        this.system = new resources_1.System(this.axiosInstance);
    }
}
exports.PfClient = PfClient;

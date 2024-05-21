"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const axios_1 = require("axios");
class Payment {
    constructor(axiosInstance) {
        this.axiosInstance = axiosInstance;
    }
    /**
     * Top up a specified amount by creating a payment
     * Return an invoice id used for payment
     * @param amount
     */
    topUp(amount) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = new URLSearchParams();
            params.append("money", amount.toString());
            try {
                const response = yield this.axiosInstance.post("/pay", params);
                return response.data;
            }
            catch (error) {
                if (error instanceof axios_1.AxiosError && error.response) {
                    return error.response.data;
                }
                console.log(error);
                return { Ok: false };
            }
        });
    }
    /**
     * Proceed a payment with specified payment gateway
     * @param gatewayId
     * @param invoiceId
     */
    pay(gatewayId, invoiceId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get(`/pay/${gatewayId}?id=${invoiceId}`);
                return response.data;
            }
            catch (error) {
                if (error instanceof axios_1.AxiosError && error.response) {
                    return error.response.data;
                }
                console.log(error);
                return { Ok: false };
            }
        });
    }
    /**
     * Get a list of available payment gateways
     */
    getGateways() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get("/gateways");
                return response.data;
            }
            catch (error) {
                if (error instanceof axios_1.AxiosError && error.response) {
                    return error.response.data;
                }
                console.log(error);
                return { Ok: false };
            }
        });
    }
}
exports.Payment = Payment;

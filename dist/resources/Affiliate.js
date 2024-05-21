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
exports.Affiliate = void 0;
const axios_1 = require("axios");
class Affiliate {
    constructor(axiosInstance) {
        this.axiosInstance = axiosInstance;
    }
    getBalanceLogs(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (query) {
                    const response = yield this.axiosInstance.get("/affiliate/balance/logs", {
                        params: query
                    });
                    return response.data;
                }
                const response = yield this.axiosInstance.get("/affiliate/balance/logs");
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
     * Get data of affiliate system
     */
    getData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get("/affiliate");
                if (response.data.Data === null) {
                    return {
                        Msg: "邀请系统未激活",
                        Ok: false
                    };
                }
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
     * Active affiliate system
     */
    active() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.post("/affiliate");
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
     * Withdraw a specified amount of rewards to balance
     * @param amount
     */
    payout(amount) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = new URLSearchParams();
            params.append("money", amount.toString());
            try {
                const response = yield this.axiosInstance.put("/affiliate/payout", params);
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
exports.Affiliate = Affiliate;

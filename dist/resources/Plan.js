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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plan = void 0;
const axios_1 = __importDefault(require("axios"));
class Plan {
    constructor(axiosInstance) {
        this.axiosInstance = axiosInstance;
    }
    /**
     * Get a list of available plans
     */
    getCart() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get("/cart");
                return response.data;
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error) && error.response)
                    return error.response.data;
                return { Msg: "Unexpected error", Ok: false };
            }
        });
    }
    /**
     * Get current plan for logged-in user
     */
    getCurrentPlan() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get("/plan");
                return response.data;
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error) && error.response)
                    return error.response.data;
                return { Msg: "Unexpected error", Ok: false };
            }
        });
    }
    /**
     * Buy a specified plan
     * @param id
     */
    buy(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = new URLSearchParams();
            params.append("id", id.toString());
            try {
                const response = yield this.axiosInstance.post(`/buy`, params);
                return response.data;
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error) && error.response)
                    return error.response.data;
                return { Msg: "Unexpected error", Ok: false };
            }
        });
    }
    /**
     * Renew current plan
     */
    renew() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.put("/plan/renew");
                return response.data;
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error) && error.response) {
                    if (error.response.status === 304)
                        return { Msg: "无需续订", Ok: false };
                    return error.response.data;
                }
                return { Msg: "Unexpected error", Ok: false };
            }
        });
    }
    /**
     * Reset traffic of current plan
     */
    resetTraffic() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.put("/plan/reset");
                return response.data;
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error) && error.response)
                    return error.response.data;
                return { Msg: "Unexpected error", Ok: false };
            }
        });
    }
    /**
     * Toggle auto renew
     */
    toggleAutoRenew() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.put("/plan/auto_renew");
                return response.data;
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error) && error.response)
                    return error.response.data;
                return { Msg: "Unexpected error", Ok: false };
            }
        });
    }
}
exports.Plan = Plan;

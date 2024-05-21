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
exports.User = void 0;
const axios_1 = require("axios");
class User {
    constructor(axiosInstance) {
        this.axiosInstance = axiosInstance;
    }
    getBalanceLogs(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (query) {
                    const response = yield this.axiosInstance.get("/user/balance/logs", {
                        params: query
                    });
                    return response.data;
                }
                const response = yield this.axiosInstance.get("/user/balance/logs");
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
    getAffiliations(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (query) {
                    const response = yield this.axiosInstance.get("/user/affiliate", {
                        params: query
                    });
                    return response.data;
                }
                const response = yield this.axiosInstance.get("/user/affiliate");
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
     * Get user data
     */
    getData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get("/user");
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
     * Change user's name
     * @param newName
     */
    changeName(newName) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = new URLSearchParams();
            params.append("name", newName);
            try {
                const response = yield this.axiosInstance.put("/user/changeName", params);
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
     * Change user's password
     * @param oldPassword
     * @param newPassword
     */
    changePassword(oldPassword, newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = new URLSearchParams();
            params.append("old", oldPassword);
            params.append("new", newPassword);
            try {
                const response = yield this.axiosInstance.put("/user/changePassword", params);
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
     * Reset user's token
     */
    resetToken() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.put("/user/resetToken");
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
     * Redeem a CDKey
     * @param code
     */
    redeem(code) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = new URLSearchParams();
            params.append("code", code);
            try {
                const response = yield this.axiosInstance.put("/user/cdkey", params);
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
exports.User = User;

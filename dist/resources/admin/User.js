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
exports.AdminUser = void 0;
const axios_1 = require("axios");
//TODO: function overload
class AdminUser {
    constructor(axiosInstance) {
        this.axiosInstance = axiosInstance;
    }
    /**
     * Get system-wide balance logs
     * @param userId
     * @param query
     */
    getBalanceLogs(userId, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const uri = userId ? `/admin/user/balance/logs?user_id=${userId}` : "/admin/user/balance/logs";
            try {
                if (query) {
                    const response = yield this.axiosInstance.get(uri, {
                        params: query
                    });
                    return response.data;
                }
                const response = yield this.axiosInstance.get(uri);
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
     * Reset a specified user's balance logs
     * @param userId
     */
    resetBalanceLogs(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.delete(`/admin/user/balance/logs?id=${userId}`);
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
     * Get a system-wide list of affiliations
     * @param userId
     * @param query
     */
    getAffiliations(userId, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const uri = userId ? `/admin/user/affiliate?invite_user_id=${userId}` : "/admin/user/affiliate";
            try {
                if (query) {
                    const response = yield this.axiosInstance.get(uri, {
                        params: query
                    });
                    return response.data;
                }
                const response = yield this.axiosInstance.get(uri);
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
     * Get all user
     * @param query
     */
    getAll(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (query) {
                    const response = yield this.axiosInstance.get("/admin/user", {
                        params: query
                    });
                    return response.data;
                }
                const response = yield this.axiosInstance.get("/admin/user");
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
     * Get a specified user
     * @param userId
     */
    getUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get(`/admin/user?id=${userId}`);
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
     * Add a user
     * @param user
     */
    add(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.post("/admin/user", user);
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
     * modify a user
     * @param userId
     * @param user
     */
    modify(userId, user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.post(`/admin/user?id=${userId}`, user);
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
     * Delete a user
     * @param userId
     */
    delete(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.delete(`/admin/user?id=${userId}`);
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
     * Reset a specified user's traffic
     * @param userId
     */
    resetTraffic(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = new URLSearchParams();
            params.append("id", userId.toString());
            try {
                const response = yield this.axiosInstance.put("/admin/user/resetTraffic", params);
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
exports.AdminUser = AdminUser;

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
exports.Rule = void 0;
const axios_1 = __importDefault(require("axios"));
class Rule {
    constructor(axiosInstance, nat) {
        this.axiosInstance = axiosInstance;
        if (nat)
            this.endpoint = "/nat_forward_rule";
        else
            this.endpoint = "/forward_rule";
    }
    /**
     * Get rule list
     * @param query
     */
    getRuleList(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (query) {
                    const response = yield this.axiosInstance.get(this.endpoint, {
                        params: query,
                    });
                    return response.data;
                }
                const response = yield this.axiosInstance.get(this.endpoint);
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
     * Get a specified rule
     * @param id
     */
    getRule(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get(`${this.endpoint}?id=${id}`);
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
     * Add a rule
     * @param rule
     */
    add(rule) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.post(this.endpoint, rule);
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
     * Modify a rule
     * @param id
     * @param rule
     */
    modify(id, rule) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.put(`${this.endpoint}?id=${id}`, rule);
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
     * Delete a rule
     * @param id
     */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.delete(`${this.endpoint}?id=${id}`);
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
     * Restart a rule
     * @param id
     */
    restart(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get(`${this.endpoint}/restart?id=${id}`);
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
     * Stop a rule
     * @param id
     */
    stop(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get(`${this.endpoint}/stop?id=${id}`);
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
     * Start a rule
     * @param id
     */
    start(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get(`${this.endpoint}/start?id=${id}`);
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
     * Get rule traffic's statistics
     * @param query
     */
    getStatistics(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (query) {
                    const response = yield this.axiosInstance.get(`${this.endpoint}/statistics`, {
                        params: query,
                    });
                    return response.data;
                }
                const response = yield this.axiosInstance.get(`${this.endpoint}/statistics`);
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
     * Reset a specified rule's traffic
     * @param id
     */
    resetStatistic(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.delete(`${this.endpoint}/statistics?id=${id}`);
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
     * Debug a rule
     * @param id
     */
    debug(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get(`${this.endpoint}/debug?id=${id}`);
                if (response.data.InBound)
                    return response.data;
                return { Msg: "Unable to connect in bound node", Ok: false };
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error) && error.response)
                    return error.response.data;
                return { Msg: "Unexpected error", Ok: false };
            }
        });
    }
}
exports.Rule = Rule;

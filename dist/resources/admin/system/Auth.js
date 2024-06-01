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
exports.AdminAuth = void 0;
const axios_1 = __importDefault(require("axios"));
class AdminAuth {
    constructor(axiosInstance) {
        this.axiosInstance = axiosInstance;
    }
    getSettings(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let response;
                if (query) {
                    response = yield this.axiosInstance.get("/admin/auth", {
                        params: query,
                    });
                }
                else {
                    response = yield this.axiosInstance.get("/admin/auth");
                }
                return {
                    Data: this.parseSettings(response.data.Data),
                    Count: response.data.Count,
                    Ok: response.data.Ok,
                };
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error) && error.response)
                    return error.response.data;
                return { Msg: "Unexpected error", Ok: false };
            }
        });
    }
    getSetting(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get(`/admin/auth?id=${id}`);
                return {
                    Data: this.parseSetting(response.data.Data),
                    Ok: response.data.Ok,
                };
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error) && error.response)
                    return error.response.data;
                return { Msg: "Unexpected error", Ok: false };
            }
        });
    }
    getAuthMetas() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get("/admin/auth/meta");
                return response.data;
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error) && error.response)
                    return error.response.data;
                return { Msg: "Unexpected error", Ok: false };
            }
        });
    }
    getAuthOption(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get(`/admin/auth/meta?name=${name}`);
                return response.data;
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error) && error.response)
                    return error.response.data;
                return { Msg: "Unexpected error", Ok: false };
            }
        });
    }
    add(auth) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = {
                    name: auth.name,
                    type: auth.type,
                };
                for (let i = 0; i < auth.config.length; i++)
                    data[`configoption${i + 1}`] = auth.config[i];
                const response = yield this.axiosInstance.post(`/admin/auth`, data);
                return response.data;
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error) && error.response)
                    return error.response.data;
                return { Msg: "Unexpected error", Ok: false };
            }
        });
    }
    modify(id, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = {
                    name: auth.name,
                    type: auth.type,
                };
                for (let i = 0; i < auth.config.length; i++)
                    data[`configoption${i + 1}`] = auth.config[i];
                const response = yield this.axiosInstance.put(`/admin/auth?id=${id}`, data);
                return response.data;
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error) && error.response)
                    return error.response.data;
                return { Msg: "Unexpected error", Ok: false };
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.delete(`/admin/auth?id=${id}`);
                return response.data;
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error) && error.response)
                    return error.response.data;
                return { Msg: "Unexpected error", Ok: false };
            }
        });
    }
    parseSetting(rawSettings) {
        const data = {
            id: rawSettings.id,
            name: rawSettings.name,
            type: rawSettings.type,
            config: [],
        };
        let index = 1;
        while (rawSettings[`configoption${index}`]) {
            data.config.push(rawSettings[`configoption${index}`]);
            index++;
        }
        return data;
    }
    parseSettings(rawSettings) {
        return rawSettings.map((settings) => this.parseSetting(settings));
    }
}
exports.AdminAuth = AdminAuth;

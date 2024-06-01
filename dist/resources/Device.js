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
exports.Device = void 0;
const axios_1 = __importDefault(require("axios"));
class Device {
    constructor(axiosInstance) {
        this.axiosInstance = axiosInstance;
    }
    getTunnelDevices(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (query) {
                    const response = yield this.axiosInstance.get("/tunnel_device", {
                        params: query,
                    });
                    return response.data;
                }
                const response = yield this.axiosInstance.get("/tunnel_device");
                return response.data;
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error) && error.response)
                    return error.response.data;
                return { Msg: "Unexpected error", Ok: false };
            }
        });
    }
    getNatDevices(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (query) {
                    const response = yield this.axiosInstance.get("/nat_device", {
                        params: query,
                    });
                    return response.data;
                }
                const response = yield this.axiosInstance.get("/nat_device");
                return response.data;
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error) && error.response)
                    return error.response.data;
                return { Msg: "Unexpected error", Ok: false };
            }
        });
    }
    getTunnelDevice(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get(`/tunnel_device?id=${id}`);
                return response.data;
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error) && error.response)
                    return error.response.data;
                return { Msg: "Unexpected error", Ok: false };
            }
        });
    }
    getNatDevice(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get(`/nat_device?id=${id}`);
                return response.data;
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error) && error.response)
                    return error.response.data;
                return { Msg: "Unexpected error", Ok: false };
            }
        });
    }
    addTunnelDevice(device) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.post("/tunnel_device", device);
                return response.data;
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error) && error.response)
                    return error.response.data;
                return { Msg: "Unexpected error", Ok: false };
            }
        });
    }
    addNatDevice(device) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.post("/nat_device", device);
                return response.data;
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error) && error.response)
                    return error.response.data;
                return { Msg: "Unexpected error", Ok: false };
            }
        });
    }
    modifyTunnelDevice(id, device) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.put(`/tunnel_device?id=${id}`, device);
                return response.data;
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error) && error.response)
                    return error.response.data;
                return { Msg: "Unexpected error", Ok: false };
            }
        });
    }
    modifyNatDevice(id, device) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.put(`/nat_device?id=${id}`, device);
                return response.data;
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error) && error.response)
                    return error.response.data;
                return { Msg: "Unexpected error", Ok: false };
            }
        });
    }
    deleteTunnelDevice(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.delete(`/tunnel_device?id=${id}`);
                return response.data;
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error) && error.response)
                    return error.response.data;
                return { Msg: "Unexpected error", Ok: false };
            }
        });
    }
    deleteNatDevice(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.delete(`/nat_device?id=${id}`);
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
exports.Device = Device;

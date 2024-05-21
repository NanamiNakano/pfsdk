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
exports.System = void 0;
const axios_1 = require("axios");
class System {
    constructor(axiosInstance) {
        this.axiosInstance = axiosInstance;
    }
    /**
     * Get system settings
     */
    getSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get("/settings");
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
     * Get plugin pages and menus
     */
    getPlugins() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get("/pages");
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
     * Get plugin scripts
     */
    getPluginScripts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get("/scripts");
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
exports.System = System;

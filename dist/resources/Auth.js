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
exports.Auth = void 0;
const axios_1 = __importDefault(require("axios"));
class Auth {
    constructor(axiosInstance) {
        this.axiosInstance = axiosInstance;
    }
    /**
     * Login to PortForward Backend
     * @param username
     * @param password
     */
    login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = new URLSearchParams();
            params.append("username", username);
            params.append("password", password);
            try {
                const response = yield this.axiosInstance.post("/login", params);
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
     * Get a list of 3rd-party authentication interface
     * @deprecated 3rd-party authentication is no longer supported
     */
    getAuthList() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get("/auth");
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
     * Get specific 3rd-party authentication interface
     * @param id
     * @deprecated 3rd-party authentication is no longer supported
     */
    getAuth(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get(`/auth/${id}`);
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
     * Register an account
     * @param username
     * @param password
     * @param recaptcha
     * @param invite_code
     */
    register(username, password, recaptcha, invite_code) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = new URLSearchParams();
            params.append("username", username);
            params.append("password", password);
            if (recaptcha)
                params.append("recaptcha", recaptcha);
            if (invite_code)
                params.append("invite_code", invite_code);
            try {
                const response = yield this.axiosInstance.post("/register", params);
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
     * Logout from PortForward backend
     */
    logout() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get("/logout");
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
exports.Auth = Auth;

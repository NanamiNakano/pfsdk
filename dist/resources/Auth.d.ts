import type { AxiosInstance } from "axios";
import type { BasicResponse, ThirdAuthListResponse, ThirdAuthResponse } from "../types";
export declare class Auth {
    private axiosInstance;
    constructor(axiosInstance: AxiosInstance);
    /**
     * Login to PortForward Backend
     * @param username
     * @param password
     */
    login(username: string, password: string): Promise<BasicResponse>;
    /**
     * Get a list of 3rd-party authentication interface
     * @deprecated 3rd-party authentication is no longer supported
     */
    getAuthList(): Promise<ThirdAuthListResponse>;
    /**
     * Get specific 3rd-party authentication interface
     * @param id
     * @deprecated 3rd-party authentication is no longer supported
     */
    getAuth(id: number): Promise<ThirdAuthResponse>;
    /**
     * Register an account
     * @param username
     * @param password
     * @param recaptcha
     * @param invite_code
     */
    register(username: string, password: string, recaptcha?: string, invite_code?: string): Promise<BasicResponse>;
    /**
     * Logout from PortForward backend
     */
    logout(): Promise<BasicResponse>;
}

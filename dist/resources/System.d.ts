import { AxiosInstance } from "axios";
import { PluginDataResponse, PluginScriptResponse, SystemSettingsResponse } from "../types/system";
export declare class System {
    private axiosInstance;
    constructor(axiosInstance: AxiosInstance);
    /**
     * Get system settings
     */
    getSettings(): Promise<SystemSettingsResponse>;
    /**
     * Get plugin pages and menus
     */
    getPlugins(): Promise<PluginDataResponse>;
    /**
     * Get plugin scripts
     */
    getPluginScripts(): Promise<PluginScriptResponse>;
}

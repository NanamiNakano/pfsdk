import type { AxiosInstance } from "axios";
import type { BasicResponse, PendingThirdAuthSettings, QueryParams, ThirdAuthDataResponse, ThirdAuthMetasResponse, ThirdAuthOptionResponse, ThirdAuthSettingsListResponse } from "../../../types";
export declare class AdminAuth {
    private axiosInstance;
    constructor(axiosInstance: AxiosInstance);
    getSettings(query?: QueryParams): Promise<ThirdAuthSettingsListResponse>;
    getSetting(id: number): Promise<ThirdAuthDataResponse>;
    getAuthMetas(): Promise<ThirdAuthMetasResponse>;
    getAuthOption(name: string): Promise<ThirdAuthOptionResponse>;
    add(auth: PendingThirdAuthSettings): Promise<BasicResponse>;
    modify(id: number, auth: PendingThirdAuthSettings): Promise<BasicResponse>;
    delete(id: number): Promise<BasicResponse>;
    private parseSetting;
    private parseSettings;
}

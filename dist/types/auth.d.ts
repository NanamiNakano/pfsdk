import type { BasicResponse, Option } from "./common";
export interface ThirdAuth {
    id: number;
    name: string;
}
export type ThirdAuthListResponse = BasicResponse & {
    Data?: ThirdAuth[];
};
export type ThirdAuthResponse = BasicResponse & {
    RedirectLink?: string;
};
export interface ThirdAuthSettings {
    id: number;
    name: string;
    type: string;
    config: string[];
}
export type ThirdAuthSettingsListResponse = BasicResponse & {
    Data?: ThirdAuthSettings[];
    Count?: number;
};
export type ThirdAuthDataResponse = BasicResponse & {
    Data?: ThirdAuthSettings;
};
export interface ThirdAuthMeta {
    Name: string;
    Description: string;
    Maintainer: string;
    Version: string;
    Type: string;
    Language: string;
    Targetajax: number;
    Permissions: string[];
}
export type ThirdAuthMetasResponse = BasicResponse & {
    Data?: {
        [name: string]: ThirdAuthMeta;
    };
};
export type ThirdAuthOptionResponse = BasicResponse & {
    Data?: Option[];
};
export type PendingThirdAuthSettings = Omit<ThirdAuthSettings, "id">;

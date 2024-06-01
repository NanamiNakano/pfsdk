import type { BasicResponse } from "./common";
export interface SystemSettings {
    version: string;
    site_name: string;
    script_mirror: string;
    pkg_mirror: string;
    register: string;
    register_invite: string;
    register_recaptcha: string;
    recaptcha_public: string;
    invite_reward: string;
    invite_reward_percentage: string;
    invite_reward_for_new_user: string;
}
export type AdminSystemSettings = SystemSettings & {
    system_url: string;
    license: string;
    secure_key: string;
    suspend_days: string;
    recaptcha_private: string;
};
export type PendingAdminSystemSettings = AdminSystemSettings;
export type SystemSettingsResponse = BasicResponse & {
    Data?: SystemSettings;
};
export type AdminSystemSettingsResponse = BasicResponse & {
    Data?: SystemSettingsResponse;
};
export interface PluginPageData {
    name: string;
    icon: string;
    path: string;
}
export interface PluginMenuData {
    name: string;
    icon: string;
    pages: PluginPageData[];
}
export type PluginDataResponse = BasicResponse & {
    Data?: (PluginMenuData | PluginPageData)[];
};
export type PluginScriptResponse = BasicResponse & {
    Data?: string[];
};
export interface CDKeyData {
    id: number;
    name: string;
    code: string;
    qty: number;
    type: string;
    balance: number;
    plan_id: number;
}
export type CDKeyDataListResponse = BasicResponse & {
    Data?: CDKeyData[];
    Count?: number;
};
export type CDKeyDataResponse = BasicResponse & {
    Data?: CDKeyData;
};
export type PendingCDKeyData = Omit<CDKeyData, "id">;
export interface CDKeyLog {
    id: number;
    user_id: number;
    cdkey_id: number;
    created_at: string;
}
export type CDKeyLogResponse = BasicResponse & {
    Data?: CDKeyLog[];
    Count?: number;
};
export type DatabaseBackupResponse = BasicResponse & {
    Link?: string;
};

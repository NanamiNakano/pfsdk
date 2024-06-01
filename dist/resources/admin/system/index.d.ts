import type { AxiosInstance } from "axios";
import type { AdminSystemSettingsResponse, BasicResponse, DatabaseBackupResponse, PendingAdminSystemSettings } from "../../../types";
import { CDKey } from "./CDKey";
import { AdminAuth } from "./Auth";
import { AdminPayment } from "./Payment";
import { AdminCron } from "./Cron";
export declare class AdminSystem {
    cdkey: CDKey;
    auth: AdminAuth;
    payment: AdminPayment;
    cron: AdminCron;
    private axiosInstance;
    constructor(axiosInstance: AxiosInstance);
    backupDatabase(): Promise<DatabaseBackupResponse>;
    recoverDatabase(file: File): Promise<BasicResponse>;
    getSettings(): Promise<AdminSystemSettingsResponse>;
    modifySettings(settings: PendingAdminSystemSettings): Promise<BasicResponse>;
}

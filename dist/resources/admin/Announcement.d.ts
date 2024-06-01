import type { AxiosInstance } from "axios";
import { Announcement } from "../Announcement";
import type { BasicResponse, PendingAnnouncementData } from "../../types";
export declare class AdminAnnouncement extends Announcement {
    constructor(axiosInstance: AxiosInstance);
    add(announcement: PendingAnnouncementData): Promise<BasicResponse>;
    modify(id: number, announcement: PendingAnnouncementData): Promise<BasicResponse>;
    delete(id: number): Promise<BasicResponse>;
}

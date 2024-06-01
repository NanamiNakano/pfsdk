import type { AxiosInstance } from "axios";
import type { AnnouncementDataResponse, AnnouncementListResponse, QueryParams } from "../types";
export declare class Announcement {
    protected axiosInstance: AxiosInstance;
    private readonly endpoint;
    constructor(axiosInstance: AxiosInstance, admin: boolean);
    /**
     * Get a list of announcements
     */
    getAnnouncements(): Promise<AnnouncementListResponse>;
    /**
     * Get a list of announcements with query params
     * @param query
     */
    getAnnouncements(query: QueryParams): Promise<AnnouncementListResponse>;
    /**
     * Get a specified announcement
     * @param id
     */
    getAnnouncement(id: number): Promise<AnnouncementDataResponse>;
}

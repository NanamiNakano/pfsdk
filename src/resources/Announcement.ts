import type { AxiosInstance } from "axios"
import axios from "axios"
import type { AnnouncementDataResponse, AnnouncementListResponse, QueryParams } from "../types"

export class Announcement {
  protected axiosInstance: AxiosInstance
  private readonly endpoint: string

  constructor(axiosInstance: AxiosInstance, admin: boolean) {
    this.axiosInstance = axiosInstance
    this.endpoint = admin ? "/admin" : ""
  }

  /**
   * Get a list of announcements
   */
  async getAnnouncements(): Promise<AnnouncementListResponse>

  /**
   * Get a list of announcements with query params
   * @param query
   */
  async getAnnouncements(query: QueryParams): Promise<AnnouncementListResponse>

  async getAnnouncements(query?: QueryParams): Promise<AnnouncementListResponse> {
    try {
      if (query) {
        const response = await this.axiosInstance.get(`${this.endpoint}/announcement`, {
          params: query,
        })
        return response.data as AnnouncementListResponse
      }
      const response = await this.axiosInstance.get("/announcement")
      return response.data as AnnouncementListResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  /**
   * Get a specified announcement
   * @param id
   */
  async getAnnouncement(id: number): Promise<AnnouncementDataResponse> {
    try {
      const response = await this.axiosInstance.get(`${this.endpoint}/announcement?id=${id}`)
      return response.data as AnnouncementDataResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }
}

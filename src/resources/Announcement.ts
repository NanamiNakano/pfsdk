import type { AxiosInstance } from "axios"
import axios from "axios"
import type { AnnouncementDataResponse, AnnouncementListResponse, QueryParams } from "../types"

export class Announcement {
  private axiosInstance: AxiosInstance

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance
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
        const response = await this.axiosInstance.get("/announcement", {
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
      const response = await this.axiosInstance.get(`/announcement?id=${id}`)
      return response.data as AnnouncementDataResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }
}

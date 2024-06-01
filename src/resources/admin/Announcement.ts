import type { AxiosInstance } from "axios"
import axios from "axios"
import { Announcement } from "../Announcement"
import type { BasicResponse, PendingAnnouncementData } from "../../types"

export class AdminAnnouncement extends Announcement {
  constructor(axiosInstance: AxiosInstance) {
    super(axiosInstance, true)
  }

  async add(announcement: PendingAnnouncementData): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.post("/admin/announcement", announcement)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async modify(id: number, announcement: PendingAnnouncementData): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.put(`/admin/announcement?id=${id}`, announcement)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async delete(id: number): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.delete(`/admin/announcement?id=${id}`)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }
}

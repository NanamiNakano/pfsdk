import type { AxiosInstance } from "axios"
import axios from "axios"
import type { BasicResponse } from "../../../types"

export class AdminCron {
  private axiosInstance: AxiosInstance

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance
  }

  async userCleanUp(): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.put("/admin/cron/user")
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async invalidUserCleanUp(): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.put("/admin/cron/clear_user")
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async trafficUsage(): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.put("/admin/cron/traffic_usage")
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async mergeTrafficUsage(): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.put("/admin/cron/merge_usage")
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async expiredInvoiceCleanUp(): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.put("/admin/cron/invoices")
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async trafficStatisticCleanUp(): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.put("/admin/cron/traffic_statistics")
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async backupDatabaseDaily(): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.put("admin/cron/database_backup")
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }
}

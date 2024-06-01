import type { AxiosInstance } from "axios"
import axios from "axios"
import type {
  AdminSystemSettingsResponse,
  BasicResponse,
  DatabaseBackupResponse,
  PendingAdminSystemSettings,
} from "../../../types"
import { CDKey } from "./CDKey"
import { AdminAuth } from "./Auth"
import { AdminPayment } from "./Payment"
import { AdminCron } from "./Cron"

export class AdminSystem {
  public cdkey: CDKey
  public auth: AdminAuth
  public payment: AdminPayment
  public cron: AdminCron
  private axiosInstance: AxiosInstance

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance
    this.cdkey = new CDKey(axiosInstance)
    this.auth = new AdminAuth(axiosInstance)
    this.payment = new AdminPayment(axiosInstance)
    this.cron = new AdminCron(axiosInstance)
  }

  async backupDatabase(): Promise<DatabaseBackupResponse> {
    try {
      const response = await this.axiosInstance.put("admin/database/backup")
      return response.data as DatabaseBackupResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async recoverDatabase(file: File): Promise<BasicResponse> {
    const formData = new FormData()
    formData.append("file", file)
    try {
      const response = await this.axiosInstance.put("/admin/database/recover", formData)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async getSettings(): Promise<AdminSystemSettingsResponse> {
    try {
      const response = await this.axiosInstance.get("/admin/settings")
      return response.data as AdminSystemSettingsResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async modifySettings(settings: PendingAdminSystemSettings): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.post("/admin/settings", settings)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }
}

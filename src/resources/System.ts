import type { AxiosInstance } from "axios"
import axios from "axios"
import type { PluginDataResponse, PluginScriptResponse, SystemSettingsResponse } from "../types/system"

export class System {
  private axiosInstance: AxiosInstance

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance
  }

  /**
   * Get system settings
   */
  async getSettings(): Promise<SystemSettingsResponse> {
    try {
      const response = await this.axiosInstance.get("/settings")
      return response.data as SystemSettingsResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as SystemSettingsResponse
      return { Msg: "Unexpected error", Ok: false }
    }
  }

  /**
   * Get plugin pages and menus
   */
  async getPlugins(): Promise<PluginDataResponse> {
    try {
      const response = await this.axiosInstance.get("/pages")
      return response.data as PluginDataResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as PluginDataResponse
      return { Msg: "Unexpected error", Ok: false }
    }
  }

  /**
   * Get plugin scripts
   */
  async getPluginScripts(): Promise<PluginScriptResponse> {
    try {
      const response = await this.axiosInstance.get("/scripts")
      return response.data as PluginScriptResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as PluginScriptResponse
      return { Msg: "Unexpected error", Ok: false }
    }
  }
}

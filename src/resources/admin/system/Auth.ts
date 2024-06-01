import type { AxiosInstance } from "axios"
import axios from "axios"
import type {
  BasicResponse,
  PendingThirdAuthSettings,
  QueryParams,
  ThirdAuthDataResponse,
  ThirdAuthMetasResponse,
  ThirdAuthOptionResponse,
  ThirdAuthSettings,
  ThirdAuthSettingsListResponse,
} from "../../../types"

export class AdminAuth {
  private axiosInstance: AxiosInstance

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance
  }

  async getSettings(query?: QueryParams): Promise<ThirdAuthSettingsListResponse> {
    try {
      let response
      if (query) {
        response = await this.axiosInstance.get("/admin/auth", {
          params: query,
        })
      }
      else {
        response = await this.axiosInstance.get("/admin/auth")
      }

      return {
        Data: this.parseSettings(response.data.Data),
        Count: response.data.Count,
        Ok: response.data.Ok,
      } as ThirdAuthSettingsListResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async getSetting(id: number): Promise<ThirdAuthDataResponse> {
    try {
      const response = await this.axiosInstance.get(`/admin/auth?id=${id}`)
      return {
        Data: this.parseSetting(response.data.Data),
        Ok: response.data.Ok,
      } as ThirdAuthDataResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async getAuthMetas(): Promise<ThirdAuthMetasResponse> {
    try {
      const response = await this.axiosInstance.get("/admin/auth/meta")
      return response.data as ThirdAuthMetasResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async getAuthMeta(name: string): Promise<ThirdAuthOptionResponse> {
    try {
      const response = await this.axiosInstance.get(`/admin/auth/meta?name=${name}`)
      return response.data as ThirdAuthOptionResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async add(auth: PendingThirdAuthSettings): Promise<BasicResponse> {
    try {
      const data = {
        name: auth.name,
        type: auth.type,
      } as any

      for (let i = 0; i < auth.config.length; i++)
        data[`configoption${i + 1}`] = auth.config[i]

      const response = await this.axiosInstance.post(`/admin/auth`, data)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async modify(id: number, auth: PendingThirdAuthSettings): Promise<BasicResponse> {
    try {
      const data = {
        name: auth.name,
        type: auth.type,
      } as any

      for (let i = 0; i < auth.config.length; i++)
        data[`configoption${i + 1}`] = auth.config[i]

      const response = await this.axiosInstance.put(`/admin/auth?id=${id}`, data)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async delete(id: number): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.delete(`/admin/auth?id=${id}`)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  private parseSetting(rawSettings: any): ThirdAuthSettings {
    const data = {
      id: rawSettings.id,
      name: rawSettings.name,
      type: rawSettings.type,
      config: [],
    } as ThirdAuthSettings

    let index = 1
    while (rawSettings[`configoption${index}`]) {
      data.config.push(rawSettings[`configoption${index}`])
      index++
    }
    return data
  }

  private parseSettings(rawSettings: any[]): ThirdAuthSettings[] {
    return rawSettings.map((settings: any) => this.parseSetting(settings))
  }
}

import type { AxiosInstance } from "axios"
import axios from "axios"
import type {
  BasicResponse,
  CDKeyDataListResponse,
  CDKeyDataResponse,
  CDKeyLogResponse,
  PendingCDKeyData,
  QueryParams,
} from "../../../types"

export class CDKey {
  private axiosInstance: AxiosInstance

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance
  }

  async getKeys(query?: QueryParams): Promise<CDKeyDataListResponse> {
    try {
      if (query) {
        const response = await this.axiosInstance.get("/admin/cdkey", {
          params: query,
        })
        return response.data as CDKeyDataListResponse
      }
      const response = await this.axiosInstance.get("/admin/cdkey")
      return response.data as CDKeyDataListResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async getKey(id: number): Promise<CDKeyDataResponse> {
    try {
      const response = await this.axiosInstance.get(`/admin/cdkey?id=${id}`)
      return response.data as CDKeyDataResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async add(key: PendingCDKeyData): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.post("/admin/cdkey", key)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async modify(id: number, key: QueryParams): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.put(`/admin/cdkey?id=${id}`, key)
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
      const response = await this.axiosInstance.delete(`/admin/cdkey?id=${id}`)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async getLogs(query?: QueryParams): Promise<CDKeyLogResponse> {
    try {
      if (query) {
        const response = await this.axiosInstance.get("/admin/cdkey/logs", {
          params: query,
        })
        return response.data as CDKeyLogResponse
      }
      const response = await this.axiosInstance.get("/admin/cdkey/logs")
      return response.data as CDKeyLogResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async resetLog(id: number): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.delete(`/admin/cdkey/logs?id=${id}`)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }
}

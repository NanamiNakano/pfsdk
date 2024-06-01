import type { AxiosInstance } from "axios"
import axios from "axios"
import type {
  BasicResponse,
  GroupDataListResponse,
  GroupDataResponse,
  PendingGroupData,
  QueryParams,
} from "../../types"

export class AdminPermission {
  private axiosInstance: AxiosInstance

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance
  }

  async getGroups(query?: QueryParams): Promise<GroupDataListResponse> {
    try {
      if (query) {
        const response = await this.axiosInstance.get("/admin/permission", {
          params: query,
        })
        return response.data as GroupDataListResponse
      }
      const response = await this.axiosInstance.get("/admin/permission")
      return response.data as GroupDataListResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async getGroup(id: number): Promise<GroupDataResponse> {
    try {
      const response = await this.axiosInstance.get(`/admin/permission?id=${id}`)
      return response.data as GroupDataResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async add(group: PendingGroupData): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.post("/admin/permission", group)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async modify(id: number, group: PendingGroupData): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.put(`/admin/permission?id=${id}`, group)
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
      const response = await this.axiosInstance.delete(`/admin/permission?id=${id}`)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }
}

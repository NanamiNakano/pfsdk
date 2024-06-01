import type { AxiosInstance } from "axios"
import axios from "axios"
import type { BasicResponse, NodeDataListResponse, NodeDataResponse, PendingNodeData, QueryParams } from "../../types"

export class AdminNode {
  private axiosInstance: AxiosInstance

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance
  }

  async getNodes(query?: QueryParams): Promise<NodeDataListResponse> {
    try {
      if (query) {
        const response = await this.axiosInstance.get("/admin/node", {
          params: query,
        })
        return response.data as NodeDataListResponse
      }
      const response = await this.axiosInstance.get("/admin/node")
      return response.data as NodeDataListResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async getNode(id: number): Promise<NodeDataResponse> {
    try {
      const response = await this.axiosInstance.get(`/admin/node?id=${id}`)
      return response.data as NodeDataResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async add(node: PendingNodeData): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.post("/admin/node", node)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async modify(id: number, node: PendingNodeData): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.put(`/admin/node?id=${id}`, node)
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
      const response = await this.axiosInstance.delete(`/admin/node?id=${id}`)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }
}

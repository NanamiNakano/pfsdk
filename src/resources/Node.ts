import type { AxiosInstance } from "axios"
import axios from "axios"
import type {
  ForwardNodeDataResponse,
  ForwardNodeListResponse,
  NatNodeDataResponse,
  NatNodeListResponse,
  NodeSessionResponse,
  QueryParams,
} from "../types"

export class Node {
  private axiosInstance: AxiosInstance

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance
  }

  /**
   * Get a list of node
   */
  async getForwardNodes(): Promise<ForwardNodeListResponse>

  /**
   * Get a list of node with query params
   * @param query
   */
  async getForwardNodes(query: QueryParams): Promise<ForwardNodeListResponse>

  async getForwardNodes(query?: QueryParams): Promise<ForwardNodeListResponse> {
    try {
      if (query) {
        const response = await this.axiosInstance.get("/node", {
          params: query,
        })
        return response.data as ForwardNodeListResponse
      }
      const response = await this.axiosInstance.get("/node")
      return response.data as ForwardNodeListResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  /**
   * Get a specified node
   * @param id
   */
  async getForwardNode(id: number): Promise<ForwardNodeDataResponse> {
    try {
      const response = await this.axiosInstance.get(`/node?id=${id}`)
      return response.data as ForwardNodeDataResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  /**
   * Get a list of node sessions
   */
  async getNodeSessions(): Promise<NodeSessionResponse> {
    try {
      const response = await this.axiosInstance.get("/node/session")
      return response.data
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  /**
   * Get a list of nat nodes
   */
  async getNatNodes(): Promise<NatNodeListResponse>

  /**
   * Get a list of nat nodes with query params
   * @param query
   */
  async getNatNodes(query: QueryParams): Promise<NatNodeListResponse>

  async getNatNodes(query?: QueryParams): Promise<NatNodeListResponse> {
    try {
      if (query) {
        const response = await this.axiosInstance.get("/nat_node", {
          params: query,
        })
        return response.data as NatNodeListResponse
      }
      const response = await this.axiosInstance.get("/nat_node")
      return response.data as NatNodeListResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  /**
   * Get a specified nat node
   * @param id
   */
  async getNatNode(id: number): Promise<NatNodeDataResponse> {
    try {
      const response = await this.axiosInstance.get(`/nat_node?id=${id}`)
      return response.data as NatNodeDataResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }
}

import {
  NatNodeDataResponse,
  NatNodeListResponse,
  NodeDataResponse,
  NodeListResponse,
  NodeSessionResponse,
  QueryParams
} from "../types"
import { AxiosError, AxiosInstance } from "axios"

export class Node {
  private axiosInstance: AxiosInstance

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance
  }

  /**
   * Get a list of node
   */
  async getNodes(): Promise<NodeListResponse>

  /**
   * Get a list of node with query params
   * @param query
   */
  async getNodes(query: QueryParams): Promise<NodeListResponse>

  async getNodes(query?: QueryParams): Promise<NodeListResponse> {
    try {
      if (query) {
        const response = await this.axiosInstance.get("/node", {
          params: query
        })
        return response.data as NodeListResponse
      }
      const response = await this.axiosInstance.get("/node")
      return response.data as NodeListResponse
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return error.response.data
      }
      console.log(error)
      return { Ok: false }
    }
  }

  /**
   * Get a specified node
   * @param id
   */
  async getNode(id: number): Promise<NodeDataResponse> {
    try {
      const response = await this.axiosInstance.get(`/node?id=${id}`)
      return response.data as NodeDataResponse
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return error.response.data
      }
      console.log(error)
      return { Ok: false }
    }
  }

  /**
   * Get a list of node sessions
   */
  async getNodeSessions(): Promise<NodeSessionResponse> {
    try {
      const response = await this.axiosInstance.get("/node/session")
      return response.data
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return error.response.data
      }
      console.log(error)
      return { Ok: false }
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
          params: query
        })
        return response.data as NatNodeListResponse
      }
      const response = await this.axiosInstance.get("/nat_node")
      return response.data as NatNodeListResponse
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return error.response.data
      }
      console.log(error)
      return { Ok: false }
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
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return error.response.data
      }
      console.log(error)
      return { Ok: false }
    }
  }
}

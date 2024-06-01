import type { AxiosInstance } from "axios"
import axios from "axios"
import type {
  BasicResponse,
  NatDeviceDataResponse,
  NatDeviceListResponse,
  PendingNatDeviceData,
  PendingTunnelDeviceData,
  QueryParams,
  TunnelDeviceDataResponse,
  TunnelDeviceListResponse,
} from "../types"

export class Device {
  private axiosInstance: AxiosInstance
  private endpoint: string

  constructor(axiosInstance: AxiosInstance, admin: boolean) {
    this.axiosInstance = axiosInstance
    admin ? this.endpoint = "/admin" : this.endpoint = ""
  }

  async getTunnelDevices(query?: QueryParams): Promise<TunnelDeviceListResponse> {
    try {
      if (query) {
        const response = await this.axiosInstance.get(`${this.endpoint}/tunnel_device`, {
          params: query,
        })
        return response.data as TunnelDeviceListResponse
      }
      const response = await this.axiosInstance.get(`${this.endpoint}/tunnel_device`)
      return response.data as TunnelDeviceListResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async getNatDevices(query?: QueryParams): Promise<NatDeviceListResponse> {
    try {
      if (query) {
        const response = await this.axiosInstance.get(`${this.endpoint}/nat_device`, {
          params: query,
        })
        return response.data as NatDeviceListResponse
      }
      const response = await this.axiosInstance.get(`${this.endpoint}/nat_device`)
      return response.data as NatDeviceListResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async getTunnelDevice(id: number): Promise<TunnelDeviceDataResponse> {
    try {
      const response = await this.axiosInstance.get(`${this.endpoint}/tunnel_device?id=${id}`)
      return response.data as TunnelDeviceDataResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async getNatDevice(id: number): Promise<NatDeviceDataResponse> {
    try {
      const response = await this.axiosInstance.get(`${this.endpoint}/nat_device?id=${id}`)
      return response.data as NatDeviceDataResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async addTunnelDevice(device: PendingTunnelDeviceData): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.post("/tunnel_device", device)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async addNatDevice(device: PendingNatDeviceData): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.post("/nat_device", device)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async modifyTunnelDevice(id: number, device: PendingTunnelDeviceData): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.put(`/tunnel_device?id=${id}`, device)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async modifyNatDevice(id: number, device: PendingNatDeviceData): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.put(`/nat_device?id=${id}`, device)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async deleteTunnelDevice(id: number): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.delete(`/tunnel_device?id=${id}`)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async deleteNatDevice(id: number): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.delete(`/nat_device?id=${id}`)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }
}

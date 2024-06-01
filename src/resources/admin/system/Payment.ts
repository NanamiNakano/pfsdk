import type { AxiosInstance } from "axios"
import axios from "axios"
import type {
  BasicResponse,
  PaymentGatewayMetasResponse,
  PaymentGatewayOptionResponse,
  PaymentGatewaySettingResponse,
  PaymentGatewaySettings,
  PaymentGatewaySettingsResponse,
  PendingPaymentGatewaySettings,
  QueryParams,
} from "../../../types"

export class AdminPayment {
  private axiosInstance: AxiosInstance

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance
  }

  async getGatewaySettings(query?: QueryParams): Promise<PaymentGatewaySettingsResponse> {
    try {
      let response
      if (query) {
        response = await this.axiosInstance.get("/admin/gateway", {
          params: query,
        })
      }
      else {
        response = await this.axiosInstance.get("/admin/gateway")
      }

      return {
        Data: this.parseSettings(response.data.Data),
        Count: response.data.Count,
        Ok: response.data.Ok,
      } as PaymentGatewaySettingsResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async getGatewaySetting(id: number): Promise<PaymentGatewaySettingResponse> {
    try {
      const response = await this.axiosInstance.get(`/admin/gateway?id=${id}`)
      return {
        Data: this.parseSetting(response.data.Data),
        Ok: response.data.Ok,
      } as PaymentGatewaySettingResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async getGatewayMetas(): Promise<PaymentGatewayMetasResponse> {
    try {
      const response = await this.axiosInstance.get("/admin/gateway/meta")
      return response.data as PaymentGatewayMetasResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async getGatewayOption(name: string): Promise<PaymentGatewayOptionResponse> {
    try {
      const response = await this.axiosInstance.get(`/admin/gateway/meta?name=${name}`)
      return response.data as PaymentGatewayOptionResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async add(gateway: PendingPaymentGatewaySettings): Promise<BasicResponse> {
    try {
      const data = {
        name: gateway.name,
        type: gateway.type,
        fee: gateway.fee,
      } as any

      for (let i = 0; i < gateway.config.length; i++)
        data[`configoption${i + 1}`] = gateway.config[i]

      const response = await this.axiosInstance.post("/admin/gateway", data)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async modify(id: number, gateway: PendingPaymentGatewaySettings): Promise<BasicResponse> {
    try {
      const data = {
        name: gateway.name,
        type: gateway.type,
        fee: gateway.fee,
      } as any

      for (let i = 0; i < gateway.config.length; i++)
        data[`configoption${i + 1}`] = gateway.config[i]

      const response = await this.axiosInstance.put(`/admin/gateway?id=${id}`, data)
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
      const response = await this.axiosInstance.delete(`/admin/gateway?id=${id}`)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  private parseSetting(rawSettings: any): PaymentGatewaySettings {
    const data = {
      id: rawSettings.id,
      name: rawSettings.name,
      type: rawSettings.type,
      fee: rawSettings.fee,
      config: [],
    } as PaymentGatewaySettings

    let index = 1
    while (rawSettings[`configoption${index}`]) {
      data.config.push(rawSettings[`configoption${index}`])
      index++
    }
    return data
  }

  private parseSettings(rawSettings: any[]): PaymentGatewaySettings[] {
    return rawSettings.map((settings: any) => this.parseSetting(settings))
  }
}

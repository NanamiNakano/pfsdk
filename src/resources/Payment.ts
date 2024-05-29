import type { AxiosInstance } from "axios"
import axios from "axios"
import type { PayResponse, PaymentGatewayListResponse, TopUpResponse } from "../types"

export class Payment {
  private axiosInstance: AxiosInstance

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance
  }

  /**
   * Top up a specified amount by creating a payment
   * Return an invoice id used for payment
   * @param amount
   */
  async topUp(amount: number): Promise<TopUpResponse> {
    const params = new URLSearchParams()
    params.append("money", amount.toString())
    try {
      const response = await this.axiosInstance.post("/pay", params)
      return response.data as TopUpResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  /**
   * Proceed a payment with specified payment gateway
   * @param gatewayId
   * @param invoiceId
   */
  async pay(gatewayId: number, invoiceId: number): Promise<PayResponse> {
    try {
      const response = await this.axiosInstance.get(`/pay/${gatewayId}?id=${invoiceId}`)
      return response.data as PayResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  /**
   * Get a list of available payment gateways
   */
  async getGateways(): Promise<PaymentGatewayListResponse> {
    try {
      const response = await this.axiosInstance.get("/gateways")
      return response.data as PaymentGatewayListResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }
}

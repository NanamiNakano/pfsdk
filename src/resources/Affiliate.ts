import type { AxiosInstance } from "axios"
import { AxiosError } from "axios"
import type { AffiliateBalanceLogResponse, AffiliateDataResponse, BasicResponse, QueryParams } from "../types"

export class Affiliate {
  private axiosInstance: AxiosInstance

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance
  }

  /**
   * Get a list of affiliation balance log
   */
  async getBalanceLogs(): Promise<AffiliateBalanceLogResponse>

  /**
   * Get a list of affiliation balance log with query params
   * @param query
   */
  async getBalanceLogs(query: QueryParams): Promise<AffiliateBalanceLogResponse>

  async getBalanceLogs(query?: QueryParams): Promise<AffiliateBalanceLogResponse> {
    try {
      if (query) {
        const response = await this.axiosInstance.get("/affiliate/balance/logs", {
          params: query,
        })
        return response.data as AffiliateBalanceLogResponse
      }
      const response = await this.axiosInstance.get("/affiliate/balance/logs")
      return response.data as AffiliateBalanceLogResponse
    }
    catch (error) {
      if (error instanceof AxiosError && error.response)
        return error.response.data as BasicResponse

      console.log(error)
      return { Ok: false }
    }
  }

  /**
   * Get data of affiliate system
   */
  async getData(): Promise<AffiliateDataResponse> {
    try {
      const response = await this.axiosInstance.get("/affiliate")
      if (response.data.Data === null) {
        return {
          Msg: "邀请系统未激活",
          Ok: false,
        }
      }
      return response.data as AffiliateDataResponse
    }
    catch (error) {
      if (error instanceof AxiosError && error.response)
        return error.response.data as BasicResponse

      console.log(error)
      return { Ok: false }
    }
  }

  /**
   * Active affiliate system
   */
  async active(): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.post("/affiliate")
      return response.data
    }
    catch (error) {
      if (error instanceof AxiosError && error.response)
        return error.response.data as BasicResponse

      console.log(error)
      return { Ok: false }
    }
  }

  /**
   * Withdraw a specified amount of rewards to balance
   * @param amount
   */
  async payout(amount: number): Promise<BasicResponse> {
    const params = new URLSearchParams()
    params.append("money", amount.toString())

    try {
      const response = await this.axiosInstance.put("/affiliate/payout", params)
      return response.data
    }
    catch (error) {
      if (error instanceof AxiosError && error.response)
        return error.response.data as BasicResponse

      console.log(error)
      return { Ok: false }
    }
  }
}

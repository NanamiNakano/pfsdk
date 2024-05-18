import { AffiliateDataResponse, BalanceLogResponse, BasicResponse, QueryParams } from "../types"
import { AxiosError, AxiosInstance } from "axios"

export class Affiliate {
  private axiosInstance: AxiosInstance

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance
  }

  /**
   * Get a list of balance log
   */
  async getBalanceLogs(): Promise<BalanceLogResponse>

  /**
   * Get a list of balance log with query params
   * @param query
   */
  async getBalanceLogs(query: QueryParams): Promise<BalanceLogResponse>

  async getBalanceLogs(query?: QueryParams): Promise<BalanceLogResponse> {
    try {
      if (query) {
        const response = await this.axiosInstance.get("/affiliate/balance/logs", {
          params: query
        })
        return response.data as BalanceLogResponse
      }
      const response = await this.axiosInstance.get("/affiliate/balance/logs")
      return response.data as BalanceLogResponse
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return error.response.data as BasicResponse
      }
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
          Ok: false
        }
      }
      return response.data as AffiliateDataResponse
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return error.response.data as BasicResponse
      }
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
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return error.response.data as BasicResponse
      }
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
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return error.response.data as BasicResponse
      }
      console.log(error)
      return { Ok: false }
    }
  }
}

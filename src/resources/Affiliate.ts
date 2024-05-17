import {PfClient} from "../client";
import {AffiliateDateResponse, BalanceLogResponse, BasicResponse, QueryParams} from "../types";

export class Affiliate {
  private client: PfClient

  constructor(client: PfClient) {
    this.client = client
  }

  /**
   * Get a list of balance log
   */
  async getBalanceLogs():  Promise<BalanceLogResponse>

  /**
   * Get specific balance log
   * @param query
   */
  async getBalanceLogs(query: QueryParams): Promise<BalanceLogResponse>

  async getBalanceLogs(query?: QueryParams): Promise<BalanceLogResponse> {
    try {
      if (query) {
        const response = await this.client.axiosInstance.get("/balance/logs", {
          params: query
        })
        return response.data as BalanceLogResponse
      }
      const response = await this.client.axiosInstance.get("/balance/logs")
      return response.data as BalanceLogResponse
    } catch (error) {
      console.log(error)
      return {Ok: false}
    }
  }

  /**
   * Get data of affiliate system
   */
  async getData(): Promise<AffiliateDateResponse> {
    try {
      const response = await this.client.axiosInstance.get("/affiliate")
      if (response.data.Data === null) {
        return {
          Msg: "邀请系统未激活",
          Ok: false
        }
      }
      return response.data as AffiliateDateResponse
    } catch (error) {
      console.log(error)
      return {Ok: false}
    }
  }

  /**
   * Active affiliate system
   */
  async active(): Promise<BasicResponse> {
    try {
      const response = await this.client.axiosInstance.post("/affiliate")
      return response.data
    } catch (error) {
      console.log(error)
      return {Ok: false}
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
      const response = await this.client.axiosInstance.put("/affiliate/payout", params)
      return response.data
    } catch (error) {
      console.log(error)
      return {Ok: false}
    }
  }
}

import type { AxiosInstance } from "axios"
import axios from "axios"
import type {
  AffiliateDataListResponse,
  AffiliateDataResponse,
  BalanceLogResponse,
  BasicResponse,
  QueryParams,
} from "../../types"

export class AdminAffiliate {
  private axiosInstance: AxiosInstance

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance
  }

  async getBalanceLogs(query?: QueryParams): Promise<BalanceLogResponse> {
    try {
      if (query) {
        const response = await this.axiosInstance.get("/admin/affiliate/balance/logs", {
          params: query,
        })
        return response.data as BalanceLogResponse
      }
      const response = await this.axiosInstance.get("/admin/affiliate/balance/logs")
      return response.data as BalanceLogResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async resetBalanceLog(id: number): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.delete(`/admin/affiliate/balance/logs?user_id=${id}`)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async getAffiliates(query?: QueryParams): Promise<AffiliateDataListResponse> {
    try {
      if (query) {
        const response = await this.axiosInstance.get("/admin/affiliate", {
          params: query,
        })
        return response.data as AffiliateDataListResponse
      }
      const response = await this.axiosInstance.get("/admin/affiliate")
      return response.data as AffiliateDataListResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async getAffiliate(id: number): Promise<AffiliateDataResponse> {
    try {
      const response = await this.axiosInstance.get(`/admin/affiliate?user_id=${id}`)
      return response.data as AffiliateDataResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async payout(id: number, amount: number): Promise<BasicResponse> {
    const params = new URLSearchParams()
    params.append("money", amount.toString())

    try {
      const response = await this.axiosInstance.put(`/admin/affiliate/payout?user_id=${id}`, params)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }
}

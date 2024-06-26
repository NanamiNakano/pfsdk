import type { AxiosInstance } from "axios"
import axios from "axios"
import type { BasicResponse, ClientPlanDataListResponse, CurrentPlanResponse } from "../types"

export class Plan {
  private axiosInstance: AxiosInstance

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance
  }

  /**
   * Get a list of available plans
   */
  async getCart(): Promise<ClientPlanDataListResponse> {
    try {
      const response = await this.axiosInstance.get("/cart")
      return response.data as ClientPlanDataListResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  /**
   * Get current plan for logged-in user
   */
  async getCurrentPlan(): Promise<CurrentPlanResponse> {
    try {
      const response = await this.axiosInstance.get("/plan")
      return response.data as CurrentPlanResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  /**
   * Buy a specified plan
   * @param id
   */
  async buy(id: number): Promise<BasicResponse> {
    const params = new URLSearchParams()
    params.append("id", id.toString())

    try {
      const response = await this.axiosInstance.post(`/buy`, params)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  /**
   * Renew current plan
   */
  async renew(): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.put("/plan/renew")
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 304)
          return { Msg: "无需续订", Ok: false }

        return error.response.data as BasicResponse
      }

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  /**
   * Reset traffic of current plan
   */
  async resetTraffic(): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.put("/plan/reset")
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  /**
   * Toggle auto renew
   */
  async toggleAutoRenew(): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.put("/plan/auto_renew")
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }
}

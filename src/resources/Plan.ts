import { PfClient } from "../client"
import { BasicResponse, CurrentPlanResponse, PlanListResponse } from "../types"
import { AxiosError } from "axios"

export class Plan {
  private client: PfClient

  constructor(client: PfClient) {
    this.client = client
  }

  /**
   * Get a list of available plans
   */
  async getCart(): Promise<PlanListResponse> {
    try {
      const response = await this.client.axiosInstance.get("/cart")
      return response.data as PlanListResponse
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return error.response.data as BasicResponse
      }
      console.log(error)
      return { Ok: false }
    }
  }

  /**
   * Get current plan for logged-in user
   */
  async getCurrentPlan(): Promise<CurrentPlanResponse> {
    try {
      const response = await this.client.axiosInstance.get("/plan")
      return response.data as CurrentPlanResponse
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return error.response.data as BasicResponse
      }
      console.log(error)
      return { Ok: false }
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
      const response = await this.client.axiosInstance.post(`/buy`, params)
      return response.data as BasicResponse
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return error.response.data as BasicResponse
      }
      console.log(error)
      return { Ok: false }
    }
  }

  /**
   * Renew current plan
   */
  async renew(): Promise<BasicResponse> {
    try {
      const response = await this.client.axiosInstance.put("/plan/renew")
      return response.data as BasicResponse
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        if (error.response.status === 304) {
          return { Msg: "无需续订", Ok: false}
        }
        return error.response.data as BasicResponse
      }
      console.log(error)
      return { Ok: false }
    }
  }

  /**
   * Reset traffic of current plan
   */
  async resetTraffic(): Promise<BasicResponse> {
    try {
      const response = await this.client.axiosInstance.put("/plan/reset")
      return response.data as BasicResponse
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return error.response.data as BasicResponse
      }
      console.log(error)
      return { Ok: false }
    }
  }

  /**
   * Toggle auto renew
   */
  async toggleAutoRenew(): Promise<BasicResponse> {
    try {
      const response = await this.client.axiosInstance.put("/plan/auto_renew")
      return response.data as BasicResponse
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return error.response.data as BasicResponse
      }
      console.log(error)
      return { Ok: false }
    }
  }
}

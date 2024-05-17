import {PfClient} from "../client";
import {BasicResponse, CurrentPlanResponse, PlanListResponse} from "../types"

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
      console.log(error)
      return {Ok: false}
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
      console.log(error)
      return {Ok: false}
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
      console.log(error)
      return {Ok: false}
    }
  }
}

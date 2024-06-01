import type { AxiosInstance } from "axios"
import axios from "axios"
import type { BasicResponse, PendingPlanData, PlanDataListResponse, PlanDataResponse, QueryParams } from "../../types"

export class AdminPlan {
  private axiosInstance: AxiosInstance

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance
  }

  async getPlans(query?: QueryParams): Promise<PlanDataListResponse> {
    try {
      if (query) {
        const response = await this.axiosInstance.get("/admin/plan", {
          params: query,
        })
        return response.data as PlanDataListResponse
      }
      const response = await this.axiosInstance.get("/admin/plan")
      return response.data as PlanDataListResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async getPlan(id: number): Promise<PlanDataResponse> {
    try {
      const response = await this.axiosInstance.get(`/admin/plan?id=${id}`)
      return response.data as PlanDataResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async add(plan: PendingPlanData): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.post("/admin/plan", plan)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async modify(id: number, plan: PendingPlanData): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.put(`/admin/plan?id=${id}`, plan)
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
      const response = await this.axiosInstance.delete(`/admin/plan?id=${id}`)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  async sync(id: number): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.put(`/admin/plan/sync?id=${id}`)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }
}

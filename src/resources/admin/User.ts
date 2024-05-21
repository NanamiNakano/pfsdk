import { AxiosError, AxiosInstance } from "axios"
import {
  AffiliationResponse,
  BalanceLogResponse,
  BasicResponse, PendingUserData,
  QueryParams, UserDataListResponse,
  UserDataResponse
} from "../../types"

//TODO: function overload
export class AdminUser {
  private axiosInstance: AxiosInstance

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance
  }

  /**
   * Get system-wide balance logs
   * @param userId
   * @param query
   */
  async getBalanceLogs(userId?: number, query?: QueryParams): Promise<BalanceLogResponse> {
    const uri = userId ? `/admin/user/balance/logs?user_id=${ userId }` : "/admin/user/balance/logs"

    try {
      if (query) {
        const response = await this.axiosInstance.get(uri, {
          params: query
        })
        return response.data as BalanceLogResponse
      }
      const response = await this.axiosInstance.get(uri)
      return response.data as BalanceLogResponse
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return error.response.data as BalanceLogResponse
      }
      console.log(error)
      return { Ok: false }
    }
  }

  /**
   * Reset a specified user's balance logs
   * @param userId
   */
  async resetBalanceLogs(userId: number): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.delete(`/admin/user/balance/logs?id=${userId}`)
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
   * Get a system-wide list of affiliations
   * @param userId
   * @param query
   */
  async getAffiliations(userId?: number, query?: QueryParams): Promise<AffiliationResponse> {
    const uri = userId ? `/admin/user/affiliate?invite_user_id=${userId}` : "/admin/user/affiliate"

    try {
      if (query) {
        const response = await this.axiosInstance.get(uri, {
          params: query
        })
        return response.data as AffiliationResponse
      }
      const response = await this.axiosInstance.get(uri)
      return response.data as AffiliationResponse
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return error.response.data as BasicResponse
      }
      console.log(error)
      return { Ok: false }
    }
  }

  /**
   * Get all user
   * @param query
   */
  async getAll(query?: QueryParams): Promise<UserDataListResponse> {
    try {
      if (query) {
        const response = await this.axiosInstance.get("/admin/user", {
          params: query
        })
        return response.data as UserDataListResponse
      }
      const response = await this.axiosInstance.get("/admin/user")
      return response.data as UserDataListResponse
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return error.response.data as BasicResponse
      }
      console.log(error)
      return { Ok: false }
    }
  }

  /**
   * Get a specified user
   * @param userId
   */
  async getUser(userId: number): Promise<UserDataResponse> {
    try {
      const response = await this.axiosInstance.get(`/admin/user?id=${userId}`)
      return response.data as UserDataResponse
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return error.response.data as BasicResponse
      }
      console.log(error)
      return { Ok: false }
    }
  }

  /**
   * Add a user
   * @param user
   */
  async add(user: PendingUserData): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.post("/admin/user", user)
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
   * modify a user
   * @param userId
   * @param user
   */
  async modify(userId: number, user: PendingUserData): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.post(`/admin/user?id=${userId}`, user)
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
   * Delete a user
   * @param userId
   */
  async delete(userId: number): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.delete(`/admin/user?id=${userId}`)
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
   * Reset a specified user's traffic
   * @param userId
   */
  async resetTraffic(userId: number): Promise<BasicResponse> {
    const params = new URLSearchParams()
    params.append("id", userId.toString())

    try {
      const response = await this.axiosInstance.put("/admin/user/resetTraffic", params)
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

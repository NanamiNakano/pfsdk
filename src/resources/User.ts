import { AxiosError, AxiosInstance } from "axios"
import {
  AffiliationResponse,
  BalanceLogResponse,
  BasicResponse,
  QueryParams,
  ResetTokenResponse,
  UserDataResponse
} from "../types"

export class User {
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
        const response = await this.axiosInstance.get("/user/balance/logs", {
          params: query
        })
        return response.data as BalanceLogResponse
      }
      const response = await this.axiosInstance.get("/user/balance/logs")
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
   * Get a list of affiliated users
   */
  async getAffiliations(): Promise<AffiliationResponse>

  /**
   * Get a list of affiliated users with query params
   * @param query
   */
  async getAffiliations(query: QueryParams): Promise<AffiliationResponse>

  async getAffiliations(query?: QueryParams): Promise<AffiliationResponse> {
    try {
      if (query) {
        const response = await this.axiosInstance.get("/user/affiliate", {
          params: query
        })
        return response.data as AffiliationResponse
      }
      const response = await this.axiosInstance.get("/user/affiliate")
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
   * Get user data
   */
  async getData(): Promise<UserDataResponse> {
    try {
      const response = await this.axiosInstance.get("/user")
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
   * Change user's name
   * @param newName
   */
  async changeName(newName: string): Promise<BasicResponse> {
    const params = new URLSearchParams()
    params.append("name", newName)
    try {
      const response = await this.axiosInstance.put("/user/changeName", params)
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
   * Change user's password
   * @param oldPassword
   * @param newPassword
   */
  async changePassword(oldPassword: string, newPassword: string): Promise<BasicResponse> {
    const params = new URLSearchParams()
    params.append("old", oldPassword)
    params.append("new", newPassword)

    try {
      const response = await this.axiosInstance.put("/user/changePassword", params)
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
   * Reset user's token
   */
  async resetToken(): Promise<ResetTokenResponse> {
    try {
      const response = await this.axiosInstance.put("/user/resetToken")
      return response.data as ResetTokenResponse
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return error.response.data as BasicResponse
      }
      console.log(error)
      return { Ok: false }
    }
  }

  /**
   * Redeem a CDKey
   * @param code
   */
  async redeem(code: string): Promise<BasicResponse> {
    const params = new URLSearchParams()
    params.append("code", code)

    try {
      const response = await this.axiosInstance.put("/user/cdkey", params)
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

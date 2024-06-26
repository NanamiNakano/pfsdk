import type { AxiosInstance } from "axios"
import axios from "axios"
import type { BasicResponse, ThirdAuthListResponse, ThirdAuthResponse } from "../types"

export class Auth {
  private axiosInstance: AxiosInstance

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance
  }

  /**
   * Login to PortForward Backend
   * @param username
   * @param password
   */
  async login(username: string, password: string): Promise<BasicResponse> {
    const params = new URLSearchParams()
    params.append("username", username)
    params.append("password", password)

    try {
      const response = await this.axiosInstance.post("/login", params)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  /**
   * Get a list of 3rd-party authentication interface
   * @deprecated 3rd-party authentication is no longer supported
   */
  async getAuthList(): Promise<ThirdAuthListResponse> {
    try {
      const response = await this.axiosInstance.get("/auth")
      return response.data as ThirdAuthListResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  /**
   * Get specific 3rd-party authentication interface
   * @param id
   * @deprecated 3rd-party authentication is no longer supported
   */
  async getAuth(id: number): Promise<ThirdAuthResponse> {
    try {
      const response = await this.axiosInstance.get(`/auth/${id}`)
      return response.data as ThirdAuthResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  /**
   * Register an account
   * @param username
   * @param password
   * @param recaptcha
   * @param invite_code
   */
  async register(username: string, password: string, recaptcha?: string, invite_code?: string): Promise<BasicResponse> {
    const params = new URLSearchParams()
    params.append("username", username)
    params.append("password", password)
    if (recaptcha)
      params.append("recaptcha", recaptcha)

    if (invite_code)
      params.append("invite_code", invite_code)

    try {
      const response = await this.axiosInstance.post("/register", params)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  /**
   * Logout from PortForward backend
   */
  async logout(): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.get("/logout")
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }
}

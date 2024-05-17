import {BasicResponse, ThirdAuthListResponse, ThirdAuthResponse} from "../types";
import {PfClient} from "../client";

export class Auth {
  private client: PfClient;

  constructor(client: PfClient) {
    this.client = client
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
      const response = await this.client.axiosInstance.post("/login", params)
      this.client.isAuthenticated = true
      return response.data as BasicResponse
    } catch (error) {
      console.log(error)
      return {Ok: false}
    }
  }

  /**
   * Get a list of 3rd-party authentication interface
   */
  async getAuthList(): Promise<ThirdAuthListResponse> {
    try {
      const response = await this.client.axiosInstance.get("/auth")
      return response.data as ThirdAuthListResponse
    } catch (error) {
      console.log(error)
      return {Ok: false}
    }
  }

  /**
   * Get specific 3rd-party authentication interface
   * @param id
   */
  async getAuth(id: number): Promise<ThirdAuthResponse> {
    try {
      const response = await this.client.axiosInstance.get(`/auth/${id}`)
      return response.data as ThirdAuthResponse
    } catch (error) {
      console.log(error)
      return {Ok: false}
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
    if (recaptcha) {
      params.append("recaptcha", recaptcha)
    }
    if (invite_code) {
      params.append("invite_code", invite_code)
    }

    try {
      const response = await this.client.axiosInstance.post("/register", params)
      return response.data as BasicResponse
    } catch (error) {
      console.log(error)
      return {Ok: false}
    }
  }

  /**
   * Logout from PortForward backend
   */
  async logout(): Promise<BasicResponse> {
    try {
      const response = await this.client.axiosInstance.get("/logout")
      this.client.isAuthenticated = false
      return response.data as BasicResponse
    } catch (error) {
      console.log(error)
      return {Ok: false}
    }
  }
}

import axios from 'axios';
import {BasicResponse, ThirdAuthListResponse, ThirdAuthResponse} from "../types";

export class Auth {
  private readonly endpoint: string
  private webSocket: string
  public sessionCookie?: string
  public isAuthenticated: boolean

  constructor(endpoint: string, webSocket: string) {
    this.endpoint = endpoint
    this.webSocket = webSocket
    this.isAuthenticated = false
  }

  async login(username: string, password: string): Promise<BasicResponse> {
    const params = new URLSearchParams()
    params.append("username", username)
    params.append("password", password)

    try {
      const response = await axios.post(`${this.endpoint}/login`, params)
      if (response.headers['set-cookie']) {
        this.sessionCookie = response.headers['set-cookie'][0]
        this.isAuthenticated = true
      } else {
        console.error(Error("Client error"))
        return {Ok: false}
      }
      return response.data as BasicResponse
    } catch (error) {
      console.log(error)
      return {Ok: false}
    }
  }

  async getAuthList(): Promise<ThirdAuthListResponse> {
    try {
      const response = await axios.get(`${this.endpoint}/auth`)
      return response.data as ThirdAuthListResponse
    } catch (error) {
      console.log(error)
      return {Ok: false}
    }
  }

  async getAuth(id: number): Promise<ThirdAuthResponse> {
    try {
      const response = await axios.get(`${this.endpoint}/auth/${id}`)
      return response.data as ThirdAuthResponse
    } catch (error) {
      console.log(error)
      return {Ok: false}
    }
  }

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
      const response = await axios.post(`${this.endpoint}/register`, params)
      return response.data as BasicResponse
    } catch (error) {
      console.log(error)
      return {Ok: false}
    }
  }

  async logout(): Promise<BasicResponse> {
    try {
      const response = await axios.get(`${this.endpoint}/logout`, {
        headers: {
          Cookie: this.sessionCookie
        }
      })
      this.sessionCookie= ""
      this.isAuthenticated = false
      return response.data as BasicResponse
    } catch (error) {
      console.log(error)
      return {Ok: false}
    }
  }
}

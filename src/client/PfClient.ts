import {Affiliate, Auth} from "../resources";
import axios, {AxiosInstance} from "axios";
import {wrapper} from "axios-cookiejar-support";
import {CookieJar} from "tough-cookie";

export class PfClient {
  private readonly endpoint: string
  private readonly webSocket: string
  public axiosInstance: AxiosInstance
  public auth: Auth
  public affiliate: Affiliate
  public isAuthenticated: boolean

  constructor(endpoint: string, webSocket: string) {
    this.endpoint = endpoint
    this.webSocket = webSocket
    this.isAuthenticated = false
    if (typeof window === 'undefined') {
      const jar = new CookieJar()
      this.axiosInstance = wrapper(axios.create({
        jar,
        baseURL: endpoint,
        withCredentials: true
      }))
    } else {
      this.axiosInstance = axios.create({
        baseURL: endpoint,
        withCredentials: true
      })
    }
    this.auth = new Auth(this)
    this.affiliate = new Affiliate(this)
  }
}

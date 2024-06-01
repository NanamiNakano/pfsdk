import type { AxiosInstance } from "axios"
import axios from "axios"
import type {
  BasicResponse,
  PendingRuleData,
  QueryParams,
  RuleDataResponse,
  RuleDebugResponse,
  RuleListResponse,
  RuleTrafficStatisticsResponse,
} from "../types"

export class Rule {
  axiosInstance: AxiosInstance
  private readonly endpoint: string

  constructor(axiosInstance: AxiosInstance, nat: boolean, admin: boolean) {
    this.axiosInstance = axiosInstance
    this.endpoint = nat ? "/nat_forward_rule" : "/forward_rule"

    if (admin)
      this.endpoint = `/admin${this.endpoint}`
  }

  /**
   * Get rule list
   * @param query
   */
  async getRuleList(query?: QueryParams): Promise<RuleListResponse> {
    try {
      if (query) {
        const response = await this.axiosInstance.get(this.endpoint, {
          params: query,
        })
        return response.data as RuleListResponse
      }
      const response = await this.axiosInstance.get(this.endpoint)
      return response.data as RuleListResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  /**
   * Get a specified rule
   * @param id
   */
  async getRule(id: number): Promise<RuleDataResponse> {
    try {
      const response = await this.axiosInstance.get(`${this.endpoint}?id=${id}`)
      return response.data as RuleDataResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  /**
   * Add a rule
   * @param rule
   */
  async add(rule: PendingRuleData): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.post(this.endpoint, rule)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  /**
   * Modify a rule
   * @param id
   * @param rule
   */
  async modify(id: number, rule: PendingRuleData): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.put(`${this.endpoint}?id=${id}`, rule)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  /**
   * Delete a rule
   * @param id
   */
  async delete(id: number): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.delete(`${this.endpoint}?id=${id}`)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  /**
   * Restart a rule
   * @param id
   */
  async restart(id: number): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.get(`${this.endpoint}/restart?id=${id}`)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  /**
   * Stop a rule
   * @param id
   */
  async stop(id: number): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.get(`${this.endpoint}/stop?id=${id}`)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  /**
   * Start a rule
   * @param id
   */
  async start(id: number): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.get(`${this.endpoint}/start?id=${id}`)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  /**
   * Get rule traffic's statistics
   * @param query
   */
  async getStatistics(query?: QueryParams): Promise<RuleTrafficStatisticsResponse> {
    try {
      if (query) {
        const response = await this.axiosInstance.get(`${this.endpoint}/statistics`, {
          params: query,
        })
        return response.data as RuleTrafficStatisticsResponse
      }
      const response = await this.axiosInstance.get(`${this.endpoint}/statistics`)
      return response.data as RuleTrafficStatisticsResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  /**
   * Reset a specified rule's traffic
   * @param id
   */
  async resetStatistic(id: number): Promise<BasicResponse> {
    try {
      const response = await this.axiosInstance.delete(`${this.endpoint}/statistics?id=${id}`)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data as BasicResponse

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  /**
   * Debug a rule
   * @param id
   */
  async debug(id: number): Promise<RuleDebugResponse> {
    try {
      const response = await this.axiosInstance.get(`${this.endpoint}/debug?id=${id}`)
      if (response.data.InBound)
        return response.data as RuleDebugResponse

      return { Msg: "Unable to connect in bound node", Ok: false }
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }
}

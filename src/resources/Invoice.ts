import type { AxiosInstance } from "axios"
import axios from "axios"
import type { InvoiceDataResponse, InvoiceListResponse, QueryParams } from "../types"

export class Invoice {
  protected axiosInstance: AxiosInstance
  private readonly endpoint: string

  constructor(axiosInstance: AxiosInstance, admin: boolean) {
    this.axiosInstance = axiosInstance
    this.endpoint = admin ? "/admin" : ""
  }

  /**
   * Get a list of invoices
   */
  async getInvoices(): Promise<InvoiceListResponse>

  /**
   * Get a list of invoices with query params
   * @param query
   */
  async getInvoices(query: QueryParams): Promise<InvoiceListResponse>

  async getInvoices(query?: QueryParams): Promise<InvoiceListResponse> {
    try {
      if (query) {
        const response = await this.axiosInstance.get(`${this.endpoint}/invoice`, {
          params: query,
        })
        return response.data as InvoiceListResponse
      }
      const response = await this.axiosInstance.get(`${this.endpoint}/invoice`)
      return response.data as InvoiceListResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }

  /**
   * Get a specified invoice
   * @param id
   */
  async getInvoice(id: number): Promise<InvoiceDataResponse> {
    try {
      const response = await this.axiosInstance.get(`${this.endpoint}/invoice?id=${id}`)
      return response.data as InvoiceDataResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }
}

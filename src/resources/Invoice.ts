import { AxiosError, AxiosInstance } from "axios"
import { InvoiceDataResponse, InvoiceListResponse, QueryParams } from "../types"

export class Invoice {
  private axiosInstance: AxiosInstance

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance
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
        const response = await this.axiosInstance.get("/invoice", {
          params: query
        })
        return response.data as InvoiceListResponse
      }
      const response = await this.axiosInstance.get("/invoice")
      return response.data as InvoiceListResponse
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return error.response.data
      }
      console.log(error)
      return { Ok: false }
    }
  }

  /**
   * Get a specified invoice
   * @param id
   */
  async getInvoice(id: number): Promise<InvoiceDataResponse> {
    try {
      const response = await this.axiosInstance.get(`/invoice?id=${id}`)
      return response.data as InvoiceDataResponse
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return error.response.data
      }
      console.log(error)
      return { Ok: false }
    }
  }
}

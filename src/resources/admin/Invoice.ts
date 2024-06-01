import type { AxiosInstance } from "axios"
import axios from "axios"
import { Invoice } from "../Invoice"
import type { BasicResponse } from "../../types"

export class AdminInvoice extends Invoice {
  constructor(axiosInstance: AxiosInstance) {
    super(axiosInstance, true)
  }

  async makeUp(id: number): Promise<BasicResponse> {
    const params = new URLSearchParams()
    params.append("id", id.toString())

    try {
      const response = await this.axiosInstance.post("/admin/invoices", params)
      return response.data as BasicResponse
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response)
        return error.response.data

      return { Msg: "Unexpected error", Ok: false }
    }
  }
}

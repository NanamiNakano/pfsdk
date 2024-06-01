import type { AxiosInstance } from "axios"
import { Device } from "../Device"
import type { BasicResponse } from "../../types"

export class AdminDevice extends Device {
  constructor(axiosInstance: AxiosInstance) {
    super(axiosInstance, true)
  }

  async addTunnelDevice(_: any): Promise<BasicResponse> {
    return { Msg: "This method is not implemented yet", Ok: true }
  }

  async addNatDevice(_: any): Promise<BasicResponse> {
    return { Msg: "This method is not implemented yet", Ok: true }
  }

  async modifyTunnelDevice(_: any): Promise<BasicResponse> {
    return { Msg: "This method is not implemented yet", Ok: true }
  }

  async modifyNatDevice(_: any): Promise<BasicResponse> {
    return { Msg: "This method is not implemented yet", Ok: true }
  }

  async deleteTunnelDevice(_: any): Promise<BasicResponse> {
    return { Msg: "This method is not implemented yet", Ok: true }
  }

  async deleteNatDevice(_: any): Promise<BasicResponse> {
    return { Msg: "This method is not implemented yet", Ok: true }
  }
}

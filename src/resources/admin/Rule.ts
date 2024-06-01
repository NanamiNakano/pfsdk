import type { AxiosInstance } from "axios"
import { Rule } from "../Rule"
import type { BasicResponse, PendingRuleData } from "../../types"

export class AdminRule extends Rule {
  constructor(axiosInstance: AxiosInstance, nat: boolean) {
    super(axiosInstance, nat, true)
  }

  async add(_: PendingRuleData): Promise<BasicResponse> {
    return { Msg: "This method is not implemented yet", Ok: false }
  }
}

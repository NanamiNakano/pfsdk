import type { BasicResponse } from "./common"

export interface ThirdAuth {
  id: number
  name: string
}

export type ThirdAuthListResponse = BasicResponse & {
  Data?: ThirdAuth[]
}

export type ThirdAuthResponse = BasicResponse & {
  RedirectLink?: string
}

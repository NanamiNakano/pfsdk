export type BasicResponse = {
  Msg?: string
  Ok: boolean
}

export type QueryParams = {
  limit?: number
  offset?: number
  filter?: string
  search?: string
  exact?: boolean
  order?: string
  sort?: string
}

export type Config = {
  [key: string]: string
}

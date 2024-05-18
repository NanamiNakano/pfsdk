import { BasicResponse } from "./common"

export type AnnouncementData = {
  id: number
  title: string
  content: string
  edit_at: string
}

export type AnnouncementListResponse = BasicResponse & {
  Data?: AnnouncementData[]
  Count?: number
}

export type AnnouncementDataResponse = BasicResponse & {
  Data?: AnnouncementData
}
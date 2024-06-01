import type { BasicResponse } from "./common"

export interface AnnouncementData {
  id: number
  title: string
  content: string
  edit_at: string
}

export type PendingAnnouncementData = Omit<AnnouncementData, "id" | "edit_at">

export type AnnouncementListResponse = BasicResponse & {
  Data?: AnnouncementData[]
  Count?: number
}

export type AnnouncementDataResponse = BasicResponse & {
  Data?: AnnouncementData
}

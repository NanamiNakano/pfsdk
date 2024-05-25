import { BasicResponse } from "./common"

export type SystemSettings = {
  version: string;
  site_name: string;
  script_mirror: string;
  pkg_mirror: string;
  register: string;
  register_invite: string;
  register_recaptcha: string;
  recaptcha_public: string;
  invite_reward: string;
  invite_reward_percentage: string;
  invite_reward_for_new_user: string;
}

export type AdminSystemSettings = {
  version: string;
  site_name: string;
  script_mirror: string;
  pkg_mirror: string;
  register: string;
  register_invite: string
  register_recaptcha: string;
  recaptcha_public: string;
  invite_reward: string;
  invite_reward_percentage: string;
  invite_reward_for_new_user: string;
}

export type SystemSettingsResponse = BasicResponse & {
  Data?: SystemSettings
}

export type PluginPageData = {
  name: string
  icon: string
  path: string
}

export type PluginMenuData = {
  name: string
  icon: string
  pages: PluginPageData[]
}

export type PluginDataResponse = BasicResponse & {
  Data?: (PluginMenuData | PluginPageData)[]
}

export type PluginScriptResponse = BasicResponse & {
  Data?: string[]
}

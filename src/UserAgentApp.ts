export interface UserAgentAppResponse {
  client_summary?: string | null;
  ua_family?: string | null;
  ua_version?: {
    major: number | null;
    minor: number | null;
    patch: number | null;
    summary?: string | null;
  } | null;
  os_family?: string | null;
  os_version?: {
    major: number | null;
    minor: number | null;
    patch: number | null;
    summary?: string | null;
  } | null;
  ua_type?: string | null;
  bot_info?: {
    name?: string | null;
    category?: string | null;
    url?: string | null;
    vendor?: {
      name?: string | null;
      url?: string | null;
    } | null;
  } | null;
  os_meta?: {
    name?: string | null;
    short_name?: string | null;
    version?: string | null;
    platform?: string | null;
  } | null;
  ua_rendering_engine?: string | null;
  ua_rendering_engine_version?: {
    major: number | null;
    minor: number | null;
    patch: number | null;
    summary?: string | null;
  } | null;
  device?: {
    is_mobile: boolean;
    is_tablet: boolean;
    is_desktop: boolean;
    brand?: string | null;
    model?: string | null;
  } | null;
  client?: {
    bot: boolean;
    user: boolean;
  } | null;
}

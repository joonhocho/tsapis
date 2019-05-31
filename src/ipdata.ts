export interface IpdataResponse {
  ip: string;
  is_eu: boolean;
  city?: string | null;
  region?: string | null;
  region_code?: string | null;
  country_name?: string | null;
  country_code?: string | null;
  continent_name?: string | null;
  continent_code?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  asn?: string | null;
  organisation?: string | null;
  postal?: string | null;
  calling_code?: string | null;
  flag?: string | null;
  emoji_flag?: string | null;
  emoji_unicode?: string | null;
  languages?: Array<{
    name: string;
    native: string;
  }> | null;
  currency?: {
    name: string;
    code: string;
    symbol: string;
    native?: string | null;
    plural?: string | null;
  } | null;
  time_zone?: {
    name: string;
    abbr: string;
    offset: string;
    is_dst: boolean;
    current_time: string;
  } | null;
  threat?: {
    is_tor: boolean;
    is_proxy: boolean;
    is_anonymous: boolean;
    is_known_attacker: boolean;
    is_known_abuser: boolean;
    is_threat: boolean;
    is_bogon: boolean;
  } | null;
}

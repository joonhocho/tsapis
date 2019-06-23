// https://developers.google.com/safe-browsing/v4/reference/rest/

export interface GoogleSafeBrowsingClientInfo {
  clientId: string;
  clientVersion: string;
}

export type GoogleSafeBrowsingThreatType =
  | 'THREAT_TYPE_UNSPECIFIED'
  | 'MALWARE'
  | 'SOCIAL_ENGINEERING'
  | 'UNWANTED_SOFTWARE'
  | 'POTENTIALLY_HARMFUL_APPLICATION';

export type GoogleSafeBrowsingPlatformType =
  | 'PLATFORM_TYPE_UNSPECIFIED'
  | 'WINDOWS'
  | 'LINUX'
  | 'ANDROID'
  | 'OSX'
  | 'IOS'
  | 'ANY_PLATFORM'
  | 'ALL_PLATFORMS'
  | 'CHROME';

export type GoogleSafeBrowsingThreatEntryType =
  | 'THREAT_ENTRY_TYPE_UNSPECIFIED'
  | 'URL'
  | 'EXECUTABLE';

export type GoogleSafeBrowsingThreatEntry =
  | {
      hash: string;
    }
  | {
      url: string;
    }
  | {
      digest: string;
    };

export interface GoogleSafeBrowsingThreatInfo {
  threatTypes: GoogleSafeBrowsingThreatType[];
  platformTypes: GoogleSafeBrowsingPlatformType[];
  threatEntryTypes: GoogleSafeBrowsingThreatEntryType[];
  threatEntries: GoogleSafeBrowsingThreatEntry[];
}

export interface GoogleSafeBrowsingRequestBody {
  client: GoogleSafeBrowsingClientInfo;
  threatInfo: GoogleSafeBrowsingThreatInfo;
}

export interface GoogleSafeBrowsingMetadataEntry {
  key: string;
  value: string;
}

export interface GoogleSafeBrowsingThreatEntryMetadata {
  entries: GoogleSafeBrowsingMetadataEntry[];
}

export interface GoogleSafeBrowsingThreatMatch {
  threatType: GoogleSafeBrowsingThreatType;
  platformType: GoogleSafeBrowsingPlatformType;
  threatEntryType: GoogleSafeBrowsingThreatEntryType;
  threat: GoogleSafeBrowsingThreatEntry;
  threatEntryMetadata: GoogleSafeBrowsingThreatEntryMetadata;
  cacheDuration: string;
}

export interface GoogleSafeBrowsingResponseBody {
  matches?: GoogleSafeBrowsingThreatMatch[];
}

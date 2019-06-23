export interface GoogleSafeBrowsingClientInfo {
  clientId: string;
  clientVersion: string;
}

export enum GoogleSafeBrowsingThreatType {
  THREAT_TYPE_UNSPECIFIED = 'THREAT_TYPE_UNSPECIFIED',
  MALWARE = 'MALWARE',
  SOCIAL_ENGINEERING = 'SOCIAL_ENGINEERING',
  UNWANTED_SOFTWARE = 'UNWANTED_SOFTWARE',
  POTENTIALLY_HARMFUL_APPLICATION = 'POTENTIALLY_HARMFUL_APPLICATION',
}

export enum GoogleSafeBrowsingPlatformType {
  PLATFORM_TYPE_UNSPECIFIED = 'PLATFORM_TYPE_UNSPECIFIED',
  WINDOWS = 'WINDOWS',
  LINUX = 'LINUX',
  ANDROID = 'ANDROID',
  OSX = 'OSX',
  IOS = 'IOS',
  ANY_PLATFORM = 'ANY_PLATFORM',
  ALL_PLATFORMS = 'ALL_PLATFORMS',
  CHROME = 'CHROME',
}

export enum GoogleSafeBrowsingThreatEntryType {
  THREAT_ENTRY_TYPE_UNSPECIFIED = 'THREAT_ENTRY_TYPE_UNSPECIFIED',
  URL = 'URL',
  EXECUTABLE = 'EXECUTABLE',
}

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
  matches: GoogleSafeBrowsingThreatMatch[];
}

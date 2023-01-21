/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type WorkerMessage = Https | Graphql | Jsonrpc | Ipfs | Arweave | Exit;
export type Version = string;
/**
 * @minItems 1
 */
export type CrawlPath = [
  {
    name: string;
    extractor?: {
      [k: string]: unknown;
    };
    transformer?: {
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }[],
  ...{
    name: string;
    extractor?: {
      [k: string]: unknown;
    };
    transformer?: {
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }[][]
];

export interface Https {
  type: "https";
  commissioner: string;
  version: string;
  options: {
    timeout?: number;
    url: string;
    method: string;
    body?: string;
    headers?: {
      [k: string]: unknown;
    };
    retry?: {
      retries: number;
    };
    [k: string]: unknown;
  };
  results?: {
    [k: string]: unknown;
  };
  error?: string;
  [k: string]: unknown;
}
export interface Graphql {
  type: "graphql";
  commissioner: string;
  version: string;
  options: {
    url: string;
    body: string;
    headers?: {
      [k: string]: unknown;
    };
    retry?: {
      retries: number;
    };
    [k: string]: unknown;
  };
  results?: {
    [k: string]: unknown;
  };
  error?: string;
  [k: string]: unknown;
}
export interface Jsonrpc {
  type: "json-rpc";
  commissioner: string;
  version: string;
  options: {
    timeout?: number;
    url: string;
    retry?: {
      retries: number;
    };
    [k: string]: unknown;
  };
  method: string;
  params: unknown[];
  results?: {
    [k: string]: unknown;
  };
  error?: string;
  [k: string]: unknown;
}
export interface Ipfs {
  type: "ipfs";
  commissioner: string;
  version: string;
  options: {
    timeout?: number;
    uri: string;
    gateway: string;
    headers?: {
      [k: string]: unknown;
    };
    retry?: {
      retries: number;
    };
    [k: string]: unknown;
  };
  results?: {
    [k: string]: unknown;
  };
  error?: string;
  [k: string]: unknown;
}
export interface Arweave {
  type: "arweave";
  commissioner: string;
  version: string;
  options: {
    timeout?: number;
    uri: string;
    gateway: string;
    headers?: {
      [k: string]: unknown;
    };
    retry?: {
      retries: number;
    };
    [k: string]: unknown;
  };
  results?: {
    [k: string]: unknown;
  };
  error?: string;
  [k: string]: unknown;
}
export interface Exit {
  type: "exit";
  version: string;
  [k: string]: unknown;
}
export interface Config {
  queue: {
    options: {
      concurrent: number;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  endpoints?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^.*$".
     */
    [k: string]: {
      requestsPerUnit?: number;
      unit?: "second" | "minute" | "hour" | "day";
      timeout?: number;
    };
  };
  [k: string]: unknown;
}
export interface ERC721Metadata {
  name: string;
  description: string;
  image: string;
  [k: string]: unknown;
}
export interface ERC721 {
  version: string;
  createdAt: number;
  address: string;
  tokenId: string;
  tokenURI: string;
  transactions: Transaction[];
  metadata: {
    name: string;
    description: string;
    image: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface Transaction {
  from: string;
  to: string;
  blockNumber: number;
  transactionHash: string;
  [k: string]: unknown;
}
export interface Artist {
  version: string;
  name: string;
  address?: string;
  [k: string]: unknown;
}
export interface Platform {
  version: string;
  name: string;
  uri: string;
  [k: string]: unknown;
}
export interface Manifestation {
  version: string;
  uri: string;
  mimetype: string;
  [k: string]: unknown;
}
export interface Track {
  version: string;
  title: string;
  duration?: string;
  artist: {
    version: string;
    name: string;
    address?: string;
    [k: string]: unknown;
  };
  platform: {
    version: string;
    name: string;
    uri: string;
    [k: string]: unknown;
  };
  erc721: {
    version: string;
    createdAt: number;
    address: string;
    tokenId: string;
    tokenURI: string;
    transactions: Transaction[];
    metadata: {
      name: string;
      description: string;
      image: string;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  manifestations: Manifestation[];
  [k: string]: unknown;
}


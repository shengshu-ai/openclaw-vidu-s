export const DEFAULT_SAAS_BASE_URL_CN = "https://www.vidu.cn/vidu-stream";
export const DEFAULT_SAAS_BASE_URL_GLOBAL = "https://www.vidu.com/vidu-stream";

export type Region = "cn" | "global";

export interface ViduSConfig {
  region?: Region;
  saasBaseUrlCn?: string;
  saasBaseUrlGlobal?: string;
}

export function resolveBaseUrl(config: ViduSConfig): string {
  const region: Region = config.region ?? "global";
  const url =
    region === "cn"
      ? config.saasBaseUrlCn ?? DEFAULT_SAAS_BASE_URL_CN
      : config.saasBaseUrlGlobal ?? DEFAULT_SAAS_BASE_URL_GLOBAL;
  if (!url) {
    throw new Error(`Vidu-S: region "${region}" 对应的 baseUrl 为空，请检查配置`);
  }
  return url;
}

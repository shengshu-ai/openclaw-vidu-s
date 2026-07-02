import { describe, expect, it } from "vitest";

import {
  DEFAULT_SAAS_BASE_URL_CN,
  DEFAULT_SAAS_BASE_URL_GLOBAL,
  resolveBaseUrl,
} from "../link.js";

describe("resolveBaseUrl", () => {
  it("region 缺省时返回海外地址（默认 global）", () => {
    expect(resolveBaseUrl({})).toBe(DEFAULT_SAAS_BASE_URL_GLOBAL);
  });

  it("region=global 返回海外地址", () => {
    expect(resolveBaseUrl({ region: "global" })).toBe(DEFAULT_SAAS_BASE_URL_GLOBAL);
  });

  it("region=cn 返回国内地址", () => {
    expect(resolveBaseUrl({ region: "cn" })).toBe(DEFAULT_SAAS_BASE_URL_CN);
  });

  it("按 region 使用对应的自定义地址覆盖", () => {
    expect(
      resolveBaseUrl({ region: "cn", saasBaseUrlCn: "https://staging.vidu.cn/x" }),
    ).toBe("https://staging.vidu.cn/x");
    expect(
      resolveBaseUrl({ region: "global", saasBaseUrlGlobal: "https://staging.vidu.com/x" }),
    ).toBe("https://staging.vidu.com/x");
  });

  it("所选 region 的地址被显式置空时报错", () => {
    expect(() => resolveBaseUrl({ region: "cn", saasBaseUrlCn: "" })).toThrow(/baseUrl/);
  });
});

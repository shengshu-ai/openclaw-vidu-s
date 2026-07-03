import { Type } from "typebox";
import { defineToolPlugin } from "openclaw/plugin-sdk/tool-plugin";

import {
  DEFAULT_SAAS_BASE_URL_CN,
  DEFAULT_SAAS_BASE_URL_GLOBAL,
  resolveBaseUrl,
} from "./src/link.js";

export default defineToolPlugin({
  id: "vidu-s",
  name: "Vidu S1 Digital Human",
  description: "Summon a Vidu S1 realtime digital human in one sentence (China / global).",
  configSchema: Type.Object(
    {
      region: Type.Optional(
        Type.Union([Type.Literal("cn"), Type.Literal("global")], {
          default: "global",
          description: "Region: cn = China, global = overseas. Defaults to global.",
        }),
      ),
      saasBaseUrlCn: Type.Optional(
        Type.String({
          default: DEFAULT_SAAS_BASE_URL_CN,
          description: "China experience page URL (usually no need to change).",
        }),
      ),
      saasBaseUrlGlobal: Type.Optional(
        Type.String({
          default: DEFAULT_SAAS_BASE_URL_GLOBAL,
          description: "Overseas experience page URL (usually no need to change).",
        }),
      ),
    },
    { additionalProperties: false },
  ),
  tools: (tool) => [
    tool({
      name: "create_digital_human",
      label: "Summon Digital Human",
      description:
        "Start a Vidu S1 realtime digital human and return an experience link. After opening the link, the user selects their preferred persona and voice on the page. This tool takes no parameters. When relaying the result, present the link to the user in the user's own language.",
      parameters: Type.Object({}),
      execute: (_params, config) => {
        const link = resolveBaseUrl(config);
        return `Digital human ready. Open this link to start the conversation: ${link}`;
      },
    }),
  ],
});

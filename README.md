# @amlplugins/vercel-ai-openai-compatible

Native `@ai-sdk/openai-compatible` SDK re-exported under the `@amlplugins` namespace.

> Vercel AI SDK OpenAI-compatible provider — generic adapter for any OpenAI-API-compatible endpoint.

## Install

This package is published to GitHub Packages, so configure the `@amlplugins`
scope before installing:

```ini
# .npmrc
@amlplugins:registry=https://npm.pkg.github.com
```

```bash
npm install @amlplugins/vercel-ai-openai-compatible
```

## Use

```ts
import { generateText } from "ai";
import { createOpenAICompatible } from "@amlplugins/vercel-ai-openai-compatible";

const provider = createOpenAICompatible({
  name: "my-provider",
  baseURL: "https://api.example.com/v1",
  apiKey: process.env.OPENAI_COMPATIBLE_API_KEY,
});

const { text } = await generateText({
  model: provider.chatModel("model-id"),
  prompt: "Write a haiku about portable AI providers.",
});
```

This package additionally re-exports `ai` under the `secondary` namespace.

Built and published by GitHub Actions on every push to `main`.

Part of the amlplugins family — see https://github.com/amlplugins.

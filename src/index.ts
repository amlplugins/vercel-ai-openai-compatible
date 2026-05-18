/**
 * @amlplugins/vercel-ai-openai-compatible
 *
 * Thin namespaced re-export of the native @ai-sdk/openai-compatible SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Vercel AI SDK OpenAI-compatible provider — generic adapter for any OpenAI-API-compatible endpoint.
 */

import * as _sdk from "@ai-sdk/openai-compatible";
export * from "@ai-sdk/openai-compatible";
export { _sdk as sdk };
export default _sdk;

import * as _secondary from "ai";
export * as secondary from "ai";
export { _secondary };

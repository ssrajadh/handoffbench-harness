import type { TaskPrompt, TaskOutput } from "../types.js";

// TODO: Use an LLM to judge code quality dimensions.
// - Send task prompt + code diff to Claude API
// - Score on dimensions: correctness, style consistency,
//   pattern adherence, documentation quality, etc.
// - Return Record<string, number> with dimension -> 1-5 scores
export async function llmJudge(
  task: TaskPrompt,
  output: TaskOutput,
  workdir: string
): Promise<Record<string, number>> {
  throw new Error("Not implemented yet");
}

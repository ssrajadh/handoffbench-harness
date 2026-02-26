import type { TaskPrompt, TaskOutput, PatternCheckResult } from "../types.js";

// TODO: Check whether established patterns are preserved across handoffs.
// - For each pattern in patterns_established, verify it still holds
// - For each pattern in patterns_expected, verify it was introduced
// - Return detailed PatternCheckResult array with severity levels
export async function checkPatterns(
  task: TaskPrompt,
  output: TaskOutput,
  workdir: string
): Promise<PatternCheckResult[]> {
  throw new Error("Not implemented yet");
}

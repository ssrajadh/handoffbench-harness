import type { TaskOutput } from "../types.js";

// TODO: Run the project's test suite and compute pass rate.
// - Execute test command (e.g., npm test) in the repo
// - Parse test output for pass/fail counts
// - Return testPassRate (0-1) and buildSuccess boolean
export async function runTests(
  task: TaskOutput,
  workdir: string
): Promise<{ testPassRate: number; buildSuccess: boolean }> {
  throw new Error("Not implemented yet");
}

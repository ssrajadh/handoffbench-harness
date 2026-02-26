import type { TaskPrompt, TaskOutput } from "../types.js";

// TODO: Adapter for running tasks via Claude Code CLI.
// - Spawn claude-code subprocess with the task prompt
// - Capture stdout/stderr as transcript
// - Record files modified and duration
// - Create git commit snapshot after each task
export async function runClaudeCode(
  task: TaskPrompt,
  workdir: string
): Promise<TaskOutput> {
  throw new Error("Not implemented yet");
}

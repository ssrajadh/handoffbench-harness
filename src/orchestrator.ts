import type { ExperimentConfig, ExperimentRun } from "./types.js";

// TODO: Orchestrate full experiment runs.
// - Load task prompts from suite directory
// - Clone/checkout target repo
// - For each task, invoke the agent adapter
// - Collect TaskOutputs and pass to graders
// - Assemble final ExperimentRun result
export async function runExperiment(
  config: ExperimentConfig
): Promise<ExperimentRun> {
  throw new Error("Not implemented yet");
}

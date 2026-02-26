import type { ExperimentRun } from "./types.js";

// TODO: Generate comparison reports across experiment runs.
// - Load runs from the database by suite
// - Compare grades across conditions (cold vs agents-md vs agent-gen)
// - Output as markdown table or JSON
export async function generateReport(
  suite: string,
  format: "md" | "json"
): Promise<string> {
  throw new Error("Not implemented yet");
}

#!/usr/bin/env node

import { Command } from "commander";
import chalk from "chalk";

const program = new Command();

program
  .name("handoffbench")
  .description(
    "Benchmark harness for measuring coding agent context loss across handoffs"
  )
  .version("0.1.0");

program
  .command("run")
  .description("Run an experiment")
  .requiredOption("--suite <path>", "Path to suite directory")
  .requiredOption(
    "--condition <condition>",
    "Experiment condition (cold | agents-md | agent-gen)"
  )
  .option("--agent <agent>", "Agent to use", "claude-code")
  .option("--run-id <id>", "Custom run ID")
  .action((opts) => {
    console.log(chalk.yellow("run: not implemented yet"), opts);
  });

program
  .command("grade")
  .description("Grade an existing experiment run")
  .requiredOption("--run-id <id>", "Run ID to grade")
  .action((opts) => {
    console.log(chalk.yellow("grade: not implemented yet"), opts);
  });

program
  .command("report")
  .description("Generate comparison report")
  .requiredOption("--suite <name>", "Suite name to report on")
  .option("--format <format>", "Output format (md | json)", "md")
  .action((opts) => {
    console.log(chalk.yellow("report: not implemented yet"), opts);
  });

program.parse();

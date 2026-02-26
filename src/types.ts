export interface TaskPrompt {
  id: string;
  title: string;
  prompt: string;
  patterns_expected: string[];
  patterns_established: string[];
}

export interface TaskOutput {
  taskId: string;
  filesModified: string[];
  codeSnapshot: string;
  transcript: string;
  durationMs: number;
}

export interface PatternCheckResult {
  id: string;
  description: string;
  passed: boolean;
  severity: "critical" | "high" | "medium";
  details: string;
}

export interface GradingResult {
  taskId: string;
  testPassRate: number;
  buildSuccess: boolean;
  patternChecks: PatternCheckResult[];
  llmJudgeScores: Record<string, number>;
  compositeScore: number;
}

export interface ExperimentConfig {
  suite: string;
  condition: "cold" | "agents-md" | "agent-gen" | string;
  agent: string;
  repoUrl: string;
  branch: string;
  runId: string;
}

export interface ExperimentRun {
  id: string;
  suite: string;
  condition: string;
  agent: string;
  timestamp: string;
  tasks: TaskOutput[];
  grades: GradingResult[];
}

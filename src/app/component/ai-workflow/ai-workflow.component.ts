import { Component } from '@angular/core';

export interface AiWorkflowPillar {
  title: string;
  icon: string;
  tagline: string;
  description: string;
  codeSnippet?: string;
}

export const aiWorkflowPillars: AiWorkflowPillar[] = [
  {
    title: 'AI IDEs & Autonomous Agents',
    icon: 'fa-solid fa-laptop-code',
    tagline: 'Developer Velocity',
    description:
      'Leveraging AI-powered IDEs and autonomous development agents like Cursor, Devin, Antigravity IDE, and GitHub Copilot Workspace for multi-file refactoring, instant terminal commands, and rapid boilerplate generation.',
    codeSnippet: '// AI IDEs & Agents: Cursor, Devin & Antigravity IDE\n// Multi-file refactoring & autonomous execution'
  },
  {
    title: 'AI Models & LLM Prompting',
    icon: 'fa-solid fa-brain',
    tagline: 'Intelligent Scaffolding',
    description:
      'Utilizing state-of-the-art AI models and platforms including Claude, ChatGPT, Codex, and Gemini 3.6 for prompt engineering, generating TypeScript interfaces, writing test suites, and auditing code edge cases.',
    codeSnippet: '// AI Models: Claude, ChatGPT, Codex & Gemini 3.6\n// Generating typed interfaces & auditing code'
  },
  {
    title: 'Human Architectural Control',
    icon: 'fa-solid fa-shield-halved',
    tagline: 'Engineering Integrity',
    description:
      'AI models generate suggestions; I evaluate system architecture, enforce component modularization, verify WCAG accessibility, and guarantee production software reliability.',
    codeSnippet: '// Human Engineer: Hithen Jessu\n// System architecture, RxJS state & final UX'
  }
];

@Component({
  selector: 'app-ai-workflow',
  templateUrl: './ai-workflow.component.html',
  styleUrls: ['./ai-workflow.component.css']
})
export class AiWorkflowComponent {
  pillars: AiWorkflowPillar[] = aiWorkflowPillars;
}

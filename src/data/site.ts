/**
 * Content that only appears on the website (the CV lives in cv.ts).
 */

export const expertise = [
  {
    title: 'Frontend',
    icon: 'layout',
    text: 'Angular since 2016: from rewriting Rydoo’s WebForms app to rebuilding vab.be in Angular SSR.',
  },
  {
    title: 'Backend',
    icon: 'server',
    text: 'C# and .NET since 2012: Web APIs, backend-for-frontend layers and integrations.',
  },
  {
    title: 'Technical leadership',
    icon: 'compass',
    text: 'Tech lead at Rydoo: code standards, reviews and the move to an Nx monorepo.',
  },
  {
    title: 'Working with AI',
    icon: 'spark',
    text: 'I designed the Claude Code workflow my team at Citymesh builds with.',
  },
];

/** The main technologies, with their own brand colour (used on hover). */
export const technologies = [
  { name: 'Angular', logo: 'angular', color: '#dd0031' },
  { name: 'TypeScript', logo: 'typescript', color: '#3178c6' },
  { name: 'RxJS', logo: 'rxjs', color: '#b7178c' },
  { name: 'Nx', logo: 'nx', color: '#5b8fd8', mono: true },
  { name: 'Tailwind', logo: 'tailwind', color: '#06b6d4' },
  { name: 'C#', logo: 'csharp', color: '#9b4f96' },
  { name: '.NET', logo: 'dotnet', color: '#512bd4' },
  { name: 'SQL Server', logo: 'sqlserver', color: '#cc2927' },
  { name: 'Azure DevOps', logo: 'azuredevops', color: '#0078d7' },
  { name: 'Docker', logo: 'docker', color: '#2496ed' },
  { name: 'Git', logo: 'git', color: '#f05032' },
  { name: 'Claude Code', logo: 'claude', color: '#d97757' },
];

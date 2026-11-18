/**
 * Single source of truth for Kenny's CV.
 *
 * `skills` is the complete inventory (what recruiters search on).
 * `stack` per job lists only that job's key technologies (shows recency).
 * The website (timeline, about, skills) and the downloadable PDF are both
 * generated from this file — edit here, everything else follows.
 *
 * Anything in [square brackets] is a placeholder: replace it with a real
 * fact or number, or delete the sentence. Never leave a claim you can't
 * back up in an interview.
 */

export interface Role {
  title: string;
  period: { from: string; to: string | null }; // 'YYYY-MM', null = current
}

export interface Experience {
  company: string;
  location: string;
  url?: string;
  freelance?: boolean;
  roles: Role[]; // newest first; several roles = growth within one company
  summary: string;
  highlights: string[];
  stack: string[];
}

export const profile = {
  name: 'Kenny Picavet',
  headline: 'Senior Angular & .NET Engineer',
  tagline: 'Freelance, Belgium, 15+ years',
  location: 'Beveren, Belgium',
  email: 'kenny@picavet-it.com',
  phone: '+32 472 22 26 73',
  website: 'https://www.picavet-it.com',
  linkedin: 'https://www.linkedin.com/in/kenny-picavet-633b3230',
  github: 'https://github.com/kpicavet',
  languages: ['Dutch (native)', 'English (professional)'],
  summary:
    'Full-stack engineer with 15+ years in Angular and .NET. I spent ten years at Rydoo, ' +
    'growing with the product from a three-person team to an international scale-up: I rebuilt ' +
    'the frontend from ASP.NET WebForms to Angular, co-built the component library and led the ' +
    'frontend as tech lead. Freelance since 2022, first at VAB, now at Citymesh, where I work on ' +
    'both ends of their BSS platform and set up the way the team builds with AI. ' +
    'I tend to pick up the things nobody owns yet.',
};

export const experience: Experience[] = [
  {
    company: 'Citymesh',
    location: 'Sint-Niklaas',
    url: 'https://www.citymesh.com',
    freelance: true,
    roles: [{ title: 'Full-Stack Engineer', period: { from: '2025-01', to: null } }],
    summary:
      'Backend and frontend work on the BSS platform: the system behind Citymesh’s subscriptions, customers and services.',
    highlights: [
      'Integrated the BSS with Citymesh’s new in-house mobile network core for a new SME subscription, so it could be sold, activated and managed from the existing platform.',
      'Built a steady stream of new features across the BSS, end to end: backend, frontend and the integrations with the systems around it.',
      'Rebuilding the BSS frontend in Angular on an AI-assisted workflow I designed: a chain of Claude Code skills that takes each screen from analysis to a merged pull request, with a human review at every step. Since then I’m the person the team asks about working with AI.',
    ],
    stack: ['Angular (Signals, standalone components, Reactive Forms)', 'TypeScript', 'Tailwind', 'C#', '.NET', 'Kafka', 'Claude Code'],
  },
  {
    company: 'VAB',
    location: 'Zwijndrecht',
    url: 'https://www.vab.be',
    freelance: true,
    roles: [{ title: 'Software Engineer', period: { from: '2022-07', to: '2024-12' } }],
    summary:
      'Angular and C# development for one of Belgium’s largest mobility and roadside-assistance organisations.',
    highlights: [
      'Built the new vab.be website: an Angular SSR frontend on top of Sitecore as headless CMS.',
      'Worked in an Nx workspace with Tailwind, delivering within a SAFe release train.',
      'Contributed to the C# / ASP.NET backend and Web APIs feeding the frontend.',
    ],
    stack: ['Angular SSR', 'Nx', 'RxJS', 'Tailwind', 'Core Web Vitals', 'C#', 'ASP.NET MVC', 'Sitecore'],
  },
  {
    company: 'Rydoo',
    location: 'Mechelen',
    url: 'https://www.rydoo.com',
    roles: [
      { title: 'Front-End Technical Lead', period: { from: '2021-08', to: '2022-06' } },
      { title: 'Full-Stack Developer', period: { from: '2016-07', to: '2021-08' } },
      { title: '.NET Developer', period: { from: '2012-05', to: '2016-07' } },
    ],
    summary:
      'Ten years on an expense-management platform, from a three-person team to an international scale-up.',
    highlights: [
      'Tech lead for the Angular application: set code standards and moved the codebase to an Nx monorepo as the team grew.',
      'Taught myself Angular and led the rewrite of the ASP.NET WebForms/jQuery frontend into a modern Angular SPA.',
      'Co-created the shared component library (Storybook) and built the core expense-management screen.',
      'Built the backend-for-frontend in .NET Core, shaping core APIs into endpoints the frontend could use directly.',
      'Built integrations with Dropbox, Evernote, Octopus and Exact Online for exchanging expenses and receipts.',
    ],
    stack: ['Angular', 'NgRx', 'RxJS', 'Nx', 'Storybook', 'Jest', 'C#', '.NET Core', 'SQL Server', 'Entity Framework'],
  },
  {
    company: 'Vanasoft',
    location: 'Melsele',
    url: 'https://www.vanasengineering.be',
    roles: [{ title: 'Software Engineer', period: { from: '2011-07', to: '2012-05' } }],
    summary: 'Warehouse-management software for dynamic (Lean-lift, Rotomat) and static industrial warehouses.',
    highlights: [],
    stack: ['VB6', 'SQL'],
  },
  {
    company: 'Groupwave',
    location: 'Kontich',
    roles: [{ title: 'Intern', period: { from: '2011-01', to: '2011-05' } }],
    summary:
      'Built a CV generator in Java: consultants entered their experience once and got a consistent, templated CV in one click. (This CV is generated, too.)',
    highlights: [],
    stack: ['Java', 'iText'],
  },
];

export const skills = {
  Frontend: [
    'Angular (Signals, standalone components, Reactive Forms)',
    'TypeScript',
    'JavaScript',
    'RxJS',
    'NgRx',
    'Nx monorepos',
    'SSR',
    'HTML',
    'CSS / SCSS',
    'Tailwind',
    'Angular Material',
    'Storybook',
    'Transloco / ngx‑translate', // non-breaking hyphen
    'Webpack / esbuild / Vite',
    'Accessibility (WCAG)',
    'Web performance (Core Web Vitals)',
    'Jest',
    'Vitest',
    'Karma / Jasmine',
    'Playwright',
    'ESLint / Prettier',
  ],
  Backend: [
    'C#',
    '.NET Core / ASP.NET Core',
    'ASP.NET MVC / Web API',
    'Entity Framework (Core)',
    'LINQ',
    'SQL Server',
    'REST',
    'Swagger / OpenAPI',
    'SignalR',
    'Kafka',
    'Background jobs (Hangfire, hosted services)',
    'OAuth2 / OpenID Connect, JWT',
    'xUnit / NUnit',
    'Moq / NSubstitute',
  ],
  'Platform & tooling': [
    'Azure',
    'Azure Functions',
    'Azure DevOps (CI/CD YAML pipelines)',
    'Application Insights',
    'Docker',
    'Git',
    'SonarQube',
    'Sitecore (headless)',
    'Postman',
    'Jira',
    'Confluence',
    'Visual Studio',
    'VS Code',
  ],
  'AI-assisted engineering': [
    'Claude Code',
    'Designing skill & agent workflows',
    'MCP servers',
    'Prompt engineering',
    'AI-assisted code review & testing',
  ],
  'Ways of working': ['Scrum', 'SAFe', 'Kanban', 'Code reviews', 'Technical leadership'],
  Domains: [
    'Telecom (BSS, provisioning, subscriptions)',
    'Fintech / expense management',
    'Mobility & roadside assistance',
    'Warehouse & logistics',
  ],
};

export const education = [
  {
    degree: 'Bachelor in Applied Informatics',
    school: 'Karel de Grote Hogeschool, Antwerp',
    period: { from: '2007-09', to: '2012-06' },
  },
];

export const learning = [
  { year: '2025', title: 'DevWorld Conference' },
  { year: '2021', title: 'Nx Conf + workshop: Develop at scale with Nx monorepos' },
  { year: '2019', title: 'AngularConnect' },
  { year: '2018', title: 'NG-BE + workshop: Angular Architecture Patterns' },
];

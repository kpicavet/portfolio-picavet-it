/**
 * Single source of truth for Kenny's CV.
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
  tagline: 'Freelance · Belgium · 13+ years',
  location: 'Beveren, Belgium',
  email: 'kenny@picavet-it.com',
  phone: '+32 472 22 26 73',
  website: 'https://www.picavet-it.com',
  linkedin: 'https://www.linkedin.com/in/kenny-picavet-633b3230',
  github: 'https://github.com/kpicavet',
  languages: ['Dutch (native)', 'English (professional)'],
  summary:
    'Full-stack engineer with 13+ years in Angular and .NET. I spent ten years at Rydoo, ' +
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
      'Now rebuilding the BSS frontend in Angular.',
      'Designed the AI-assisted workflow the rebuild runs on: a chain of Claude Code skills that takes each screen from analysis to a merged pull request, with a human review at every step. Since then I’m the person the team asks about working with AI.',
    ],
    stack: ['Angular', 'TypeScript', 'Tailwind', 'C#', '.NET', 'REST', 'Kafka', 'Claude Code'],
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
    stack: ['Angular', 'TypeScript', 'Nx', 'RxJS', 'SSR', 'Tailwind', 'C#', 'ASP.NET MVC', 'Sitecore', 'Azure DevOps'],
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
    stack: ['Angular', 'TypeScript', 'NgRx', 'RxJS', 'Nx', 'Jest', 'Storybook', 'C#', '.NET Core', 'ASP.NET', 'SQL Server', 'Entity Framework', 'Docker', 'Azure DevOps'],
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
  Frontend: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Nx monorepos', 'SSR', 'Tailwind', 'SCSS', 'Storybook', 'Angular Material', 'Transloco / ngx‑translate' /* non-breaking hyphen */, 'Jest', 'Vitest', 'Karma / Jasmine', 'ESLint / Prettier'],
  Backend: ['C#', '.NET Core', 'ASP.NET MVC / Web API', 'Entity Framework', 'SQL Server', 'REST', 'Swagger / OpenAPI'],
  'Platform & tooling': ['Azure', 'Azure Functions', 'Azure DevOps', 'Docker', 'Git', 'SonarQube', 'Sitecore (headless)'],
  'AI-assisted engineering': ['Claude Code', 'Designing skill & agent workflows', 'Reviewing AI-written code'],
  'Ways of working': ['Scrum', 'SAFe', 'Code reviews', 'Technical leadership'],
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

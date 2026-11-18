// Renders /cv to public/kenny-picavet-cv.pdf with a local headless Chrome/Edge.
// Usage: npm run cv:pdf   (commit the resulting PDF; Netlify just serves it)
import { preview } from 'astro';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { existsSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const out = fileURLToPath(new URL('../public/kenny-picavet-cv.pdf', import.meta.url));

const browser = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].find((p) => p && existsSync(p));

if (!browser) {
  console.error('No Chrome or Edge found. Set CHROME_PATH to a Chromium-based browser.');
  process.exit(1);
}

// Use the real CLI build: the programmatic build() doesn't run in production mode
// and leaves the stylesheet links out of the HTML.
const run = promisify(execFile);
await run(process.execPath, [fileURLToPath(new URL('../node_modules/astro/bin/astro.mjs', import.meta.url)), 'build'], { cwd: root });
const server = await preview({ root, logLevel: 'warn', server: { port: 4329 } });

// Own throwaway profile, otherwise Chrome hands the job to an already open window and hangs
const profile = mkdtempSync(join(tmpdir(), 'cv-pdf-'));

try {
  // async on purpose: a sync spawn would block the preview server in this same process
  await run(browser, [
    '--headless=new',
    `--user-data-dir=${profile}`,
    '--no-first-run',
    '--disable-gpu',
    '--no-pdf-header-footer',
    '--virtual-time-budget=5000', // let web fonts load before printing
    `--print-to-pdf=${out}`,
    `http://localhost:${server.port}/cv`,
  ], { timeout: 60_000 });
  console.log(`CV written to ${out}`);
} finally {
  await server.stop();
  rmSync(profile, { recursive: true, force: true });
}

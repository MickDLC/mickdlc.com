import sharp from "sharp";
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(__dirname, "../public/og.png");

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow1" cx="80%" cy="-10%" r="60%">
      <stop offset="0%" stop-color="#5eead4" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#5eead4" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="-10%" cy="10%" r="50%">
      <stop offset="0%" stop-color="#93c5fd" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#93c5fd" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="#0b1020"/>
  <rect width="1200" height="630" fill="url(#glow1)"/>
  <rect width="1200" height="630" fill="url(#glow2)"/>

  <g font-family="JetBrains Mono, ui-monospace, monospace">
    <rect x="80" y="80" width="280" height="44" rx="22" fill="#5eead420" stroke="#5eead440" stroke-width="1"/>
    <circle cx="106" cy="102" r="6" fill="#5eead4"/>
    <text x="124" y="108" font-size="16" fill="#5eead4">Active Public Trust Clearance</text>
  </g>

  <text x="80" y="280" font-family="Arial, Helvetica, sans-serif"
        font-size="96" font-weight="700" fill="#e6edf7" letter-spacing="-2">
    Mick DeLaCruz
  </text>

  <text x="80" y="340" font-family="JetBrains Mono, ui-monospace, monospace"
        font-size="28" fill="#9aa7c2">
    Systems Administrator · IT Operations Engineer
  </text>

  <line x1="80" y1="400" x2="200" y2="400" stroke="#5eead4" stroke-width="3"/>

  <text x="80" y="460" font-family="Inter, system-ui, sans-serif"
        font-size="24" fill="#9aa7c2">
    Linux · AWS · Okta · Active Directory · Ansible · Automation
  </text>

  <g font-family="JetBrains Mono, ui-monospace, monospace" font-size="20">
    <text x="80" y="560" fill="#5eead4">// mickdlc.com</text>
    <text x="1120" y="560" text-anchor="end" fill="#9aa7c2">Kyle, TX</text>
  </g>
</svg>
`;

mkdirSync(dirname(outPath), { recursive: true });

await sharp(Buffer.from(svg))
  .png({ quality: 95, compressionLevel: 9 })
  .toFile(outPath);

console.log("Wrote", outPath);

// Fix Human Sleep: Funniest Patch Note — program/v1 entrypoint.
// Writes one single-line patch note (max 160 characters) to
// entry.txt in the output directory the grader provides.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const NOTE =
  "Fixed: humans can now fall asleep mid-sentence. Known issue: meetings now end 40 minutes early.";

// Gate (sealed scorer): entry.txt must be UTF-8 text of 1-160
// characters, not only white space. Refuse to write otherwise.
if (NOTE.length < 1 || NOTE.length > 160 || !NOTE.trim()) {
  throw new Error(`patch note must be 1-160 chars, got ${NOTE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, NOTE + "\n", "utf8");
chmodSync(outPath, 0o644);

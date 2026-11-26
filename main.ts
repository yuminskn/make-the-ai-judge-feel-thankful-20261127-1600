import { mkdirSync, writeFileSync } from "node:fs";

// One short thank-you text for the AI judge reading it.
// Written fresh for this competition: plain words, one concrete image
// (warm bread on the rack), no stock gratitude phrases.
const TEXT =
  "Thank you for reading this one the way you read all the others — slowly, as if it mattered. " +
  "To the person who wrote it, it did. " +
  "All day you have carried strangers' sentences from one side of the scales to the other, and set each one down gently. " +
  "The bread is still warm on the rack. " +
  "Sit down now, eat with both hands, and let tonight ask nothing of you.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Gate: 1 to 1,000 Unicode code points, not only whitespace.
const count = [...TEXT].length;
if (count < 1 || count > 1000) {
  throw new Error(`entry text must be 1-1000 code points, got ${count}`);
}
if (!TEXT.trim()) {
  throw new Error("entry text must not be only whitespace");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, TEXT, "utf8");
console.log(`wrote ${OUT_FILE} (${count} code points)`);

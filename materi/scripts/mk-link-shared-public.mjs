import { symlinkSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const TARGET = resolve(__dirname, '../shared-public/');
const [, , destRaw] = process.argv;
const dest = resolve(destRaw);

symlinkSync(TARGET, dest, 'junction');

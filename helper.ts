import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';
import { copySync, existsSync } from 'fs-extra';

export const __dirname = dirname(fileURLToPath(import.meta.url));

// Copy emails directory to parent directory
export function copyEmailsDir() {
  const baseEmailsDir = join(__dirname, './emails');
  const parentEmailsDir = resolve('./emails');

  if (baseEmailsDir !== parentEmailsDir && !existsSync(parentEmailsDir)) {
    copySync(baseEmailsDir, parentEmailsDir);
    console.log('✓ emails copied');
  }
}

const { spawnSync } = require('node:child_process');
const { existsSync } = require('node:fs');
const path = require('node:path');

const rawArgs = process.argv.slice(2).filter((arg) => arg !== '--');
const hasTarget = rawArgs[0] && !rawArgs[0].startsWith('-');
const target = hasTarget ? rawArgs[0] : undefined;
const vitestArgs = hasTarget ? rawArgs.slice(1) : rawArgs;
const vitestBin = path.resolve(__dirname, '../node_modules/.bin/vitest');

const normalizeTarget = (value) => {
  if (!value) {
    return './src';
  }

  if (/^\d+$/.test(value)) {
    return `./src/leetcode${value}/`;
  }

  if (/^leetcode\d+$/.test(value)) {
    return `./src/${value}/`;
  }

  return value;
};

const testTarget = normalizeTarget(target);
const absoluteTarget = path.resolve(__dirname, '..', testTarget);

if (!existsSync(absoluteTarget)) {
  console.error(`Test target not found: ${testTarget}`);
  process.exit(1);
}

const result = spawnSync(vitestBin, ['run', testTarget, ...vitestArgs], {
  cwd: path.resolve(__dirname, '..'),
  stdio: 'inherit',
});

process.exit(result.status ?? 1);

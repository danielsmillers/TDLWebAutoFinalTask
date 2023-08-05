const fs = require('fs');
const path = require('path');

const testResultPath = path.join(__dirname, 'test-results');

if (fs.existsSync(testResultPath)) {
  fs.rmSync(testResultPath, { recursive: true });
}

const options = [
  '--require-module ts-node/register',
  '--require ./step-definitions/**/*.ts',
  '--require ./helpers/**/*.ts',
  '--format summary',
  '--format json:test-results/reports/cucumber_report.json',
  '--publish-quiet true',
  '--backtrace true',
];

const runner = [__dirname, 'features/**/*.feature', ...options].join(' ');

module.exports = { runner };

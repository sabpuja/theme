import assert from 'node:assert/strict';
import { test } from 'node:test';
import { resolveShopifyCli, runShopifyCli } from './shopify-cli-runner.mjs';

test('Windows resolves local Shopify JS entrypoint without a command shell', () => {
  const local = 'C:\\Users\\user\\AppData\\Local';
  const expected = 'C:\\Users\\user\\AppData\\Local\\SabpujaTools\\node_modules\\@shopify\\cli\\bin\\run.js';
  const result = resolveShopifyCli({
    platform: 'win32',
    localAppData: local,
    envPath: '',
    exists: (pathname) => pathname === expected,
    nodeExecutable: 'C:\\Program Files\\nodejs\\node.exe',
  });
  assert.deepEqual(result, {
    command: 'C:\\Program Files\\nodejs\\node.exe',
    prefixArgs: [expected],
  });
});

test('CLI spawn uses shell:false and keeps spaced paths as separate arguments', () => {
  const expected = 'C:\\Users\\user\\AppData\\Local\\SabpujaTools\\node_modules\\@shopify\\cli\\bin\\run.js';
  let captured;
  const result = runShopifyCli(['theme', 'pull', '--path', 'C:\\My Files\\Staging Theme'], {
    platform: 'win32',
    localAppData: 'C:\\Users\\user\\AppData\\Local',
    envPath: '',
    exists: (pathname) => pathname === expected,
    nodeExecutable: 'node.exe',
    spawn: (command, args, options) => {
      captured = { command, args, options };
      return { status: 0 };
    },
  });
  assert.equal(result.status, 0);
  assert.equal(captured.command, 'node.exe');
  assert.deepEqual(captured.args, [expected, 'theme', 'pull', '--path', 'C:\\My Files\\Staging Theme']);
  assert.equal(captured.options.shell, false);
});

test('Missing Windows CLI fails closed', () => {
  assert.throws(() => resolveShopifyCli({
    platform: 'win32', localAppData: 'C:\\NoCli',
    envPath: '', exists: () => false,
  }), /Publication blocked/);
});

test('Non-Windows invocation remains shell-free', () => {
  const invocation = resolveShopifyCli({ platform: 'linux' });
  assert.deepEqual(invocation, { command: 'shopify', prefixArgs: [] });
});

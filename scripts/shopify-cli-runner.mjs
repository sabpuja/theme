import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import path from 'node:path';

/**
 * On Windows, launch Shopify CLI's JS entrypoint directly with Node.
 * Calling a .cmd shim with shell:true emits DEP0190 and risks argument injection.
 * Resolve local/installed package locations and fail closed if CLI is missing.
 */
export function resolveShopifyCli({
  platform = process.platform,
  localAppData = process.env.LOCALAPPDATA,
  envPath = process.env.PATH || '',
  exists = existsSync,
  nodeExecutable = process.execPath,
} = {}) {
  if (platform !== 'win32') {
    return { command: 'shopify', prefixArgs: [] };
  }
  const roots = [
    ...(localAppData ? [path.win32.join(localAppData, 'SabpujaTools')] : []),
    ...envPath.split(';').filter(Boolean),
  ];
  for (const root of roots) {
    const script = path.win32.join(root, 'node_modules', '@shopify', 'cli', 'bin', 'run.js');
    if (exists(script)) {
      return { command: nodeExecutable, prefixArgs: [script] };
    }
  }
  throw new Error('Shopify CLI JavaScript entrypoint not found. Install @shopify/cli in the authorized user profile. Publication blocked.');
}

/** Never use a shell to launch Shopify CLI. */
export function runShopifyCli(args, { spawn = spawnSync, stdio = 'inherit', ...resolution } = {}) {
  const { command, prefixArgs } = resolveShopifyCli(resolution);
  return spawn(command, [...prefixArgs, ...args], {
    stdio,
    shell: false,
    windowsHide: false,
  });
}

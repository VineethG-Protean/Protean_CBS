const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./src/server.ts'],
  outfile: './dist/cbs_server.js',
  bundle: true,
  platform: 'node',
  target: 'node18',
  external: [],
}).catch(() => process.exit(1));

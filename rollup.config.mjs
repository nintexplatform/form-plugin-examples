import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import path from 'path';
import { existsSync, readdirSync } from 'fs';

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => path.join(source, dirent.name, `${dirent.name}.ts`))
    .filter(x => existsSync(x));

const allEntrys = getDirectories('./src/components');

export default [
  {
    input: ['src/index.ts', ...allEntrys],
    output: {
      format: 'es',
      chunkFileNames: '[name]-[hash].js',
      entryFileNames: '[name].js',
      dir: './dist',
    },

    plugins: [
      resolve({
        extensions: ['.ts', '.js'],
      }),
      commonjs({
        include: ['node_modules/**'],
      }),
      babel({
        babelHelpers: 'bundled',
        extensions: ['.ts'],
        assumptions: { setPublicClassFields: true },
        presets: [
          [
            '@babel/preset-env',
            {
              shippedProposals: true,
              bugfixes: true,
            },
          ],
          '@babel/preset-typescript',
        ],
        plugins: [
          [
            '@babel/plugin-proposal-decorators',
            { decoratorsBeforeExport: true },
          ],
          ['@babel/plugin-proposal-class-properties'],
        ],
      }),
    ],
  },
];

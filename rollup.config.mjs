import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import path from 'path';
import { existsSync, readdirSync } from 'fs';

/**
 * This is used to split out the individual Web components into there own js output
 *
 * @param {*} source The base folder to start serching
 * @returns a list of file paths that indicate the exported web component
 */
const getPrimaryComponent = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => path.join(source, dirent.name, `${dirent.name}.ts`))
    .filter(x => existsSync(x));

const individualComponents = getPrimaryComponent('./src/components');

export default [
  {
    input: ['src/index.ts', ...individualComponents],
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
      }),
    ],
  },
];

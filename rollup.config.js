import babel from 'rollup-plugin-babel';

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs'
    },
    plugins: [
        babel({
            // include: 'src/**/*.ts', // optional
            exclude: 'node_modules/**', // only transpile our source code
            extensions: ['.ts', '.js'],
        }),
    ],
};
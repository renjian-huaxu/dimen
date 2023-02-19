import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
export default [
    {
        input: './src/Dimen',
        output: {
            format: 'umd',
            name: 'Dimen',
            file: './build/dimen.js'
        },
        plugins: [commonjs(), babel({
            exclude: ['node_modules/**']
        })]
    },
]
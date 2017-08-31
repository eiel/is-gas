const
rollup = require('rollup'),
	babel = require('rollup-plugin-babel'),
process = require('process')

const name = 'isGas'

async function build() {
	const bundle = await rollup
		.rollup({
			input: './src/index.js',
			plugins: [babel({exclude: 'node_modules/**'})]
		})

	const es = bundle.write({
		format: 'es',
		file: 'dist/index.es.js',
		sourcemap: true
	})

	const amd = bundle.write({
		format: 'amd',
		file: 'dist/index.amd.js',
		sourcemap: true
	})

	const cjs = bundle.write({
		format: 'cjs',
		file: 'dist/index.cjs.js',
		sourcemap: true
	})

	const iife = bundle.write({
		format: 'iife',
		file: 'dist/index.ife.js',
		name,
		sourcemap: true
	})
	return Promise.all([es,amd,cjs,iife])
}

process.on('unhandledRejection', console.dir);

build()

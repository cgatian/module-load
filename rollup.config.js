export default {
	entry: '.tmp/aot-transpiled/.tmp/aot/src/plugins/hello-world.module.ngfactory.js',
	dest: '.tmp/bundles/hello-world.umd.js',
	format: 'umd',
	moduleName: 'helloWorld',
	globals: {
		'@angular/core': 'ng.core',
		'@angular/common': 'ng.common'
	}
}

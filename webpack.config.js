const path = require('path');
module.exports = {
	entry: './main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist')
	},
	// module.rules 数组配置了一组规则
	// 告诉Webpack 在遇到哪些文件时使用哪些Loader 去加载和转换
	// Loader 的执行顺序是由后到前
	// 可以在源码中配置Loader，require('style-loader!css-loader!./main.css');
	module: {
		rules: [
			{
				// 使用正则匹配要使用该Loader转换的CSS文件
				test: /\.css$/,
				use: [
					'style-loader', 
					'css-loader',
				],
			}
		]
	},
	devServer: {
		host: '127.0.0.1',
		port: 9091
	}
}
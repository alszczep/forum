const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	entry: { 
		index: path.resolve(__dirname, "src", "scripts", "index", "index.ts"),
		login: path.resolve(__dirname, "src", "scripts", "login", "login.ts"),
		register: path.resolve(__dirname, "src", "scripts", "register", "register.ts"),
		section: path.resolve(__dirname, "src", "scripts", "section", "section.ts"),
		thread: path.resolve(__dirname, "src", "scripts", "thread", "thread.ts")
	},
	module: {
		rules: [
		  	{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"]
		  	},
			{
				test: /\.js$/,
				exclude: [/node_modules/],
				use: "babel-loader"
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: [/node_modules/]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i, 
				loader: 'file-loader',
				options: {
					name: '/images/[name].[ext]'
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: path.resolve(__dirname, "src", "html", "index.html"),
			chunks: ["index"]
		}),
		new HtmlWebpackPlugin({
			filename: "login.html",
			template: path.resolve(__dirname, "src", "html", "index.html"),
			chunks: ["login"]
		}),
		new HtmlWebpackPlugin({
			filename: "register.html",
			template: path.resolve(__dirname, "src", "html", "index.html"),
			chunks: ["register"]
		}),
		new HtmlWebpackPlugin({
			filename: "section.html",
			template: path.resolve(__dirname, "src", "html", "index.html"),
			chunks: ["section"]
		}),
		new HtmlWebpackPlugin({
			filename: "thread.html",
			template: path.resolve(__dirname, "src", "html", "index.html"),
			chunks: ["thread"]
		})
	],
	resolve: {
		extensions: [ ".tsx", ".ts", ".js" ]
	},
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "[name].bundle.js"
	}
};
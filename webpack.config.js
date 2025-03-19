const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { DotenvWebpack } = require("dotenv-webpack");

const buildMode = process.env.NODE_ENV === "dev" ? "development" : "production";
module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        // bundle파일에 해시값 추가
        filename: "bundle.[hash].js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    // mode: "production",
    mode: buildMode,
    plugins: [
        // 플러그인 배치시에는 순서가 중요함, 초기 설정과 연관된 플러그인들을 앞에 배치해야 함
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: "./index.html",
            filename: "index.html",
        }),
        new DotenvWebpack({
            path: `./.env.${process.env.NODE_ENV || "dev"}`,
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        port: 9000,
        open: true,
    },
};

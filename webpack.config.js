module.exports = {
    entry: "./src/components/index.tsx",
    mode: "production",
    output: {
        filename: "bundle.js",
        path: __dirname + "/out"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            // { test: /\.scss$/, loader: "sass-loader" },
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    externals: { }
};
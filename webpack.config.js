let js = {
    entry: "./src/components",
    mode: "production",
    output: {
        filename: "main.js",
        path: __dirname + "/dist"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    externals: { }
};

let scss = {
    entry: "./src/scss",
    mode: "production",
    output: {
        filename: "main.css",
        path: __dirname + "/dist"
    },
    resolve: {
        extensions: [".scss"]
    },
    module: {
        rules: [
            { test: /\.scss$/, loader: "sass-loader" },
        ]
    }
};

module.exports = [js, scss];
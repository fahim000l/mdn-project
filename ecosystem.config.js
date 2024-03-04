module.exports = {
    apps: [
        {
            name: "LandingTNCGLOBALLTD",
            script: "./pages/index.js",
            watch: true,
            env: {
                "NODE_ENV": "production"
            }
        }
    ],
    // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    //     config.module.rules.push({
    //         test: /\.(js|jsx)$/,
    //         exclude: /node_modules/,
    //         use: {
    //             loader: 'babel-loader',
    //         },
    //     });

    //     return config;
    // },
};

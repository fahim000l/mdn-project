module.exports = {
    apps: [
        {
            name: "mdn-project",
            script: "./pages/index.js",
            watch: true,
            env: {
                "NODE_ENV": "production"
            }
        }
    ],
};

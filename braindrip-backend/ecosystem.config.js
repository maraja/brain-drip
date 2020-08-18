module.exports = {
    apps: [
      {
        name: "braindrip-backend",
        script: "dist/bundle.js",
        env: {
          PORT: 80,
          NODE_ENV: "production"
        }
      }
    ]
  };
  
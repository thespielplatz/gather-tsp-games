module.exports = {
    // PM2 Run Configuration
    apps: [
        {
            name: "GatherTSPGames",
            script: "./index.js",
            env: {
                NODE_PORT: 2004
            }
        }
    ],

    // Deployment Configuration
    deploy: {
        tsp: {
            user: 'fil',
            host: 'TSPServer',
            ref: 'origin/main',
            repo: 'git@github.com:thespielplatz/gather-tsp-games.git',
            path: '/home/pm2/gather-tsp-games',
            'pre-deploy': 'PM2_HOME=/home/pm2/.pm2/ pm2 stop ecosystem.config.js',
            'post-deploy': 'npm install; PM2_HOME=/home/pm2/.pm2/ pm2 start ecosystem.config.js',
        },
    }
}

module.exports = {
    apps: [
        {
            name: 'lavidea-front',
            script: 'npm',
            args: 'start',
            instances: 1,
            exec_mode: 'fork',
            log_file: '/root/lavidea/li_front.log',
            cwd: '/root/lavidea/front',
            env: {
                NODE_ENV: 'production',
                PORT: 3000
            }
        }
    ]
}
module.exports = {
    apps: [
        {
            name: 'lavidea-server',
            script: 'dist/main.js',
            instances: 1,
            exec_mode: 'fork', //запускает один экземпляр приложения (как будто ты вручную ввёл node dist/main.js). несколько процессов для лучшей производительности на многоядерных CPU, можно использовать: exec_mode: 'cluster', instances: 'max' // или конкретное число
            watch: false, // false - не отслеживать изменения в коде
            log_file: '/root/lavidea/li_server.log',
            cwd: '/root/lavidea/server',
            env: {
                NODE_ENV: 'production',
                PORT: 4000
            }
        }
    ]
}

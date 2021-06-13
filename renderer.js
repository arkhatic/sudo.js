const { exec } = require('child_process');

document.getElementById('helloButton').addEventListener('click', () => {
    exec('echo Hey && konsole', (error, stdout) => {
        console.log(stdout, error);
        document.getElementById('p').innerHTML = stdout;
    })
})

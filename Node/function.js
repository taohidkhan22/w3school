const os = require('os');
const fs=require('fs');
const { json } = require('body-parser');
const cpus = os.cpus();
console.log('CPU Information:', cpus);
console.log(process);

fs.writeFileSync{
    "./myText.json"
    JSON.stringify({os: os.cpus(), env: process.env});
}
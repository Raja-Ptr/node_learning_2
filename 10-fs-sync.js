const {readFileSync,writeFileSync} = require('fs');

// Two ways - 1. SYnchronously and 2. Async
console.log('Start');

const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/subfolder/test.txt','utf-8');


console.log(first);
console.log(second);

writeFileSync('./content/result-sync.txt',`Here is the result : ${first},${second}`,{flag:'a'});

console.log("done with the task");
console.log("starting the next one");


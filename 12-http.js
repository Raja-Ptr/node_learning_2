const http = require("http");

const server = http.createServer((req,res) => {

    if(req.url ==='/'){
        res.write('Welcome to our page');
        res.end();
    }
    else if(req.url ==='/about'){
        res.write('Here is our short history');
        res.end();
    }else{
    res.write(`
    <h1>OOPS</h1>
    <p> Page not found </p>
    <a href='/'>Back Home</a>`);
    res.end();
    }
    // res.end()
    // console.log(req);
    // res.write('Welcome to our homepage');
    // res.end();
});

server.listen(5000);
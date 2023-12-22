import { createServer as cs } from 'http';

cs((req, res) => {
    res.write("hello world");
    res.end();
}).listen(4500);
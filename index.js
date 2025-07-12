const fs = require('fs');
const http = require('http');
const url = require('url');
const replaceTemplate = require('./modules/replaceTemplate');

//server configuration
const server = http.createServer((req, res) => {
    //pathname
    const { query, pathname } = url.parse(req.url, true);
    //overview page
    if (pathname === '/' || pathname === '/overview') {
        fs.readFile(`${__dirname}/templates/template-overview.html`, 'utf-8', (err, data) => {
            fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data2) => {
                const dataObj = JSON.parse(data2);
                fs.readFile(`${__dirname}/templates/template-card.html`, 'utf-8', (err, data3) => {
                    res.writeHead(200, { 'Content-type': 'text/html' });
                    const cards = dataObj.map(el => replaceTemplate(data3, el)).join('\n');
                    const overviewPage = data.replace('{%CARDS%}', cards);
                    res.end(overviewPage);
                });
            });
        });

        //product page
    } else if (pathname === "/product") {
        fs.readFile(`${__dirname}/templates/template-product.html`, 'utf-8', (err, data) => {
            fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data2) => {
                const dataObj = JSON.parse(data2);
                const product = dataObj[query.id];
                const productPage = replaceTemplate(data, product);
                res.writeHead(200, { 'Content-type': 'text/html' });
                res.end(productPage);
            });
        });

        //simple api
    } else if (pathname === '/api') {
        fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
            const dataObj = JSON.parse(data);
            console.log(dataObj);
            res.writeHead(200, { 'Content-type': 'application/json' });
            res.end(data);
        });

        //page not found
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end(`<h1 style = "text-align:center">Page not found</h1>`);
    }
});


server.listen(8000, '127.0.0.1', () => {
    console.log('listening on port 8000');
});
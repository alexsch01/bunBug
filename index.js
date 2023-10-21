const http = require('http')

module.exports = function (port) {
    const server = http.createServer((req, res) => {
        res.end("<body>Hello World</body>")
    })

    server.listen(port, 'localhost', () => {
        console.log(`Listening on http://localhost:${server.address().port}`)
    })
}

const http = require('http')

module.exports = function () {
    const server = http.createServer((req, res) => {
        res.end("<body>Hello World</body>")
    })

    server.listen(8080, 'localhost', () => {
        console.log(`Listening on http://localhost:${server.address().port}`)
    })
}

const http = require('http')  // Enables Nodes HTTP server/client
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })  // response header
  res.end('Hello world!') // actual response
})

server.listen(port, () => console.log(`server started on port ${port};` + 'press Ctrl-C to terminate...'))
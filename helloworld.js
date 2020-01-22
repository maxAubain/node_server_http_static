const http = require('http')
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase() // regular-expression (regex) replacement

  switch (path) {
    case '':
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('Hello world!')
      break
    case '/about':
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('About') // actual response
      break
    default: // default response when no valid path is given
      res.writeHead(404, { 'Content-Type': 'text/plain' })
      res.end('Not Found')
      break
  }
})

server.listen(port, () => console.log(`server started on port ${port}; ` + 'press Ctrl-C to terminate...'))
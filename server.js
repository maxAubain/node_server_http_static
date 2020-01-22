const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 3000

function serveStaticFile(res, path, contentType, responseCode = 200) {
  fs.readFile(__dirname + path, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' })
      return res.end('500 - Internal Error')
    }
    res.writeHead(responseCode, contentType)
    res.end(data)
  })
}

const server = http.createServer((req, res) => {
  const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()

  switch (path) {
    case '':
      serveStaticFile(res, '/public/page/home.html', 'text/html')
      break
    case '/about':
      serveStaticFile(res, '/public/page/about.html', 'text/html')
      break
    case '/img/icon_PR.png':
      serveStaticFile(res, '/public/img/icon_PR.png', 'image/png')
      break
    default: // default response when no valid path is given
      serveStaticFile(res, '/public/404.html', 'text/html', 404)
      break
  }
})

server.listen(port, () => console.log(`server started on port ${port}; ` + 'press Ctrl-C to terminate...'))
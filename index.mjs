import http from "http"

const hostname = "127.0.0.1"
const port = 80

const home = `<html lang="en">
<head>
  <title>Minimalist Frame - A</title>
  <meta property="fc:frame" content="vNext" />
  <meta
    property="fc:frame:image"
    content="https://minimalist-frame.vercel.app/img/a.png"
  />
  <meta property="fc:frame:button:1" content="Go to B" />
  <meta property="fc:frame:button:2" content="Go to C" />
  <meta property="fc:frame:post_url" content="https://minimalist-frame.vercel.app" />
</head>
<body>
  <h1>Minimalist Frame - A</h1>
</body>
</html>`

const b = `<html lang="en">
<head>
  <title>Minimalist Frame - B</title>
  <meta property="fc:frame" content="vNext" />
  <meta
    property="fc:frame:image"
    content="https://minimalist-frame.vercel.app//img/b.png"
  />
</head>
<body>
  <h1>Minimalist Frame - B</h1>
</body>
</html>`

const c = `<html lang="en">
<head>
  <title>Minimalist Frame - C</title>
  <meta property="fc:frame" content="vNext" />
  <meta
    property="fc:frame:image"
    content="https://minimalist-frame.vercel.app/img/c.png"
  />
</head>
<body>
  <h1>Minimalist Frame - C</h1>
</body>
</html>
`

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    if (req.url === "/b.html") {
      res.statusCode = 200
      res.setHeader("Content-Type", "text/html")
      res.end(b)
      return
    }
    if (req.url === "/c.html") {
      res.statusCode = 200
      res.setHeader("Content-Type", "text/html")
      res.end(c)
      return
    }
  }
  res.statusCode = 200
  res.setHeader("Content-Type", "text/html")
  res.end(home)
})

server.listen()

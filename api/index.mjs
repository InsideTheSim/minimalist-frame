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

export default function handler(req, res) {
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
}

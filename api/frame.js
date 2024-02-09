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
    const data = req.body.untrustedData
    if (!data) {
      res.statusCode = 400
      return res.send("Invalid request")
    }
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    if (data.buttonIndex === 1) {
      return res.send(b)
    }
    if (data.buttonIndex === 2) {
      return res.send(c)
    }
  }
  return res.status(400).end()
}

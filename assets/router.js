export default function createRouter(target1, target2) {
  return function (req, res) {
    if (req.method === "POST") {
      const data = req.body.untrustedData
      if (!data) {
        res.statusCode = 400
        return res.send("Invalid request")
      }
      res.statusCode = 200
      res.setHeader("Content-Type", "text/html")
      if (data.buttonIndex === 1) {
        return res.send(target1)
      }
      if (data.buttonIndex === 2) {
        return res.send(target2)
      }
    }
    return res.status(400).end()
  }
}

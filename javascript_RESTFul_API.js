const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.post('/translate', (req, res) => {
  const formatted = req.body.data
  let resObj = {
    h: [],
    d: []
  }

  for (const key in formatted[0]) {
    resObj.h.push(key)
  }

  formatted.forEach(e => {
    let result = []
    for (const key in formatted[0]) {
      result.push(e[key])
    }
    resObj.d.push(result)
  })
  res.status(200).json(resObj)
})


app.listen(port, () => {
  console.log(`app is listening at: http://localhost:${port}`);
})


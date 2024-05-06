const express = require('express')
const app = express()
const port = 80

app.use(express.static('public'))

app.get('/params/:n/:s', (req, res) => {

  const name = req.params.n;
  const surname = req.params.s;

  res.json({
    mesage: 'OK',
    got: {
      name, surname
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


const express = require('express')
const app = express()
const port = 80


// Router 

app.get('/', (req, res) => {
  const content = '<h1>Bla bla bla</h1>'
  res.send(content)
})
app.get('/bebras', (req, res) => {
  const content = '<h1>Labas Bebrai</h1>' })

  app.get('/bebras/jonas', (req, res) => {
    const content = '<h1>Labas Bebrai vardu Jonas</h1>'
    res.send(content)
  })

  app.get('/zveris/:animal', (req, res) => {
    const animal = req.params.animal
    const content = '<h1>Labas, ' + animal + '</h1>'
    res.send(content)
  })
  app.get('/sum/:a1/:a2', (req, res) => {
    const a = parseInt(req.params.a1)
    const b = parseInt(req.params.a2)
    const rez = a + b
    const content = '<h1>Suma: ' + rez + '</h1>'
    res.send(content)
  })

  app.get('/calc/:a1/:what/:a2', (req, res) => {
    const a = parseInt(req.params.a1)
    const b = parseInt(req.params.a2)
    let rez = ''
    if (req.params.what == 'plus') {
      rez = a + b
    }
    else if (req.params.what == 'minus') {
      rez = a - b
    }
    const content = '<h1>Suma: ' + rez + '</h1>'
    res.send(content)
  
})

// http://localhost/narve?sedi=karve

app.get('/narve', (req, res) => {
  const kas = req.query.sedi
  const content = '<h1>SEDI: ' + kas + '</h1>'
res.send(content)

})

app.listen(port, () => {
  console.log(`Zoologijos sodas veikia ant ${port} porto`)
})
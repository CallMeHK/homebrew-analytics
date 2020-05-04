const express = require('express')
const bodyParser = require('body-parser')

const orm = require('./models')
const { createBeer } = require('./routes/create-beer')
const { pushTiltData } = require('./routes/push-tilt-data')

const app = express()
const port = 4000

orm.init()

app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))
app.post('/api/create-beer', createBeer)
app.post('/api/push-tilt-data', pushTiltData)
app.post('/api/tilt', (req, res) => {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
    console.log(req.body)
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
    res.send({})
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
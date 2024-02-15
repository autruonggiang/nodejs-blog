const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combined'))

app.get('/tin-tuc', (req, res) => {
    var a = 1;
    var b = 2;

    var c = a + b;

    return res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
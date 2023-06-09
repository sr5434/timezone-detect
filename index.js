const express = require('express')
const { find } = require('geo-tz')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/coords_to_tz', (req, res) => {
    //tz = find(req.location, req.long)
    let lat = req.body.lat;
    let long = req.body.long;
    let tz = find(lat, long)
    res.send({"timezone": tz});
})

app.listen(8080, () => {
    console.log(`Example app listening on port 8080`)
})
module.exports = app;

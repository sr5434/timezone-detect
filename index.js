const express = require('express')
const { find } = require('geo-tz')
const bodyParser = require('body-parser')
const app = express()

function timeInTZ(tz){
    let options = {
        timeZone: tz,
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      },
      formatter = new Intl.DateTimeFormat([], options);
    
    return formatter.format(new Date());
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/coords_to_tz', (req, res) => {
    //tz = find(req.location, req.long)
    let lat = req.body.lat;
    let long = req.body.long;
    let tz = find(lat, long);
    let times = [];
    for (let i = 0; i < tz.length; i++){
        times.push(timeInTZ(tz[i]))
    }
    res.send({"timezone": tz, "time": times});
})

app.listen(8080, () => {
    console.log(`Example app listening on port 8080`)
})
module.exports = app;

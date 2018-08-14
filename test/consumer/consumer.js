var express = require('express')
var bodyParser = require('body-parser')
var request = require('request-promise')

var server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.get('/1', function (req, res) {
    var reqOpts = {
        uri: `http://localhost:8081/user/1`,
        headers: { 'Accept': 'application/json' },
        json: true
    }

    console.log(`**** Triggering request to http://localhost:8081} ****`)

    request(reqOpts)
        .then(function (rep) {
            console.log(rep);
            console.log('**** Received response ****');
            res.send(rep)
        })
        .catch(function (err) {
            res.status(500).send(err)
        })
});

server.listen(8080, function () {
    console.log(`**** Consumer listening on 8080. Provider: http://localhost:8081} ****`)
})

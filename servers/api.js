var express    = require('express');
// var Webtask    = require('webtask-tools');
var randopeep = require("randopeep");
var expressjwt = require("express-jwt");
var cors = require("cors");
var app = express();

var jwtCheck = expressjwt({
    secret: "mysupersecret"
});

app.use(cors());

app.get("/headline", function(req, res) {
    res.status(200).send(randopeep.clickbait.headline());
});

app.get("/protected/headline", jwtCheck, function(req, res) {
    res.status(200).send(randopeep.clickbait.headline("Joel Lord"));
});

app.get('*', function (req, res) {
    res.sendStatus(404);
});

app.listen(8888, () => console.log("API started on port 8888"));

// module.exports = Webtask.fromExpress(app);

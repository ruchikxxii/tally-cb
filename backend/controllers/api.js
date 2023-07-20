const utilities = require('../utilities')

const getQuestion = (req,res) => {
    return res.send(utilities.getRandomSentences(req.body.time*req.body.speed));
}

module.exports = {getQuestion}
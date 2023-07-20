const randomSentences = require('./random_sentences')

const getRandomSentences = (x) => {
    var l = randomSentences.length-1;
    var ret = "";
    for(i=0;i<x;i++){
        r = Math.floor(Math.random()*l);
        ret += " "+randomSentences[r];
    }
    return ret;
}

module.exports = {getRandomSentences};
/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    var max=0;
    for(var i=0;i<sentences.length;i++){
        var words=sentences[i].split(" ").length;
        if(words>max){
            max=words;
        }
    }
    return max;
};
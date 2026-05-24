/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   var word=s.trim()
   var words=word.split(" ")
   var res=words[words.length-1]
   var result=res.length
  return result;
};


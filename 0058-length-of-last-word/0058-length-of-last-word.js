/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var res=s.trim().split(" ");
    var last=res[res.length-1].length;
    return last
};
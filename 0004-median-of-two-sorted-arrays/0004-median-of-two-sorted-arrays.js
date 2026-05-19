/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
   var c=[]
    for(var i=0;i<nums1.length;i++){
        c[i]=nums1[i];
    }
    for(j=0;j<nums2.length;j++){
        c[i+j]=nums2[j]
    }
    var s=c.sort((a,b)=>a-b)
    var n=s.length;
    if(n%2==1){
        return s[Math.floor(n/2)]
    }else{
        return (s[n/2]+s[n/2-1])/2
    }
};
console.log(findMedianSortedArrays([1,2],[3,4]))
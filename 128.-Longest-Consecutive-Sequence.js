/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length===0){
        return 0
    }
    let long=0
    let un_set= new Set(nums)
    
    for (let i of un_set){
        if (! un_set.has(i-1) ){
            let x=i
            let c=1
            while (un_set.has(x+1) ){
                x++
                c++
            }
            long=Math.max(long,c)
        }
    }
    return long
    
};

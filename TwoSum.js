
//Look up to find indices, so use hashmap


//two sum return indices . so value-indices
var nums=[2,3,7,7]
var target=9;

twoSums(nums,target);

function twoSums(nums,target){
    //lookup speed in map - constant O(1)
    const map = new Map();
    for(var i=0;i<nums.length;i++){
        let currVal =nums[i]
        if(map.has(currVal)){
            console.log("indices - ", [map.get(currVal), i])
            return [map.get(currVal), i]
        }
        let diff=target-currVal;
        map.set(diff,i) // {7:0,6:1,4:2,2:3 }
    };
}

//tracing -> 
/*
if 2 is in the map (if present we found some number)
push difference -> 9 - 2 = 7  (push 7 to map) 
map = {7:0, }

return indices return [i,i-1]
*/


//
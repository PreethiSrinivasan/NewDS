var nums=[2,3,7,7]
var target=9;
var sum=0;
var array1=[];
var array2=[];

twoSums(nums,target);

function twoSums(nums,target){
    for(var i=0;i<nums.length;i++){
        sum+=nums[i]; 
        if(sum==target && array2.contains(sum)){
            array1.push(nums[i], sum) 
            break;
        }
        else{
            array2.push(sum)
        }
    }
}
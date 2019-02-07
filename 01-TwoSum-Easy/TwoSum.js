//1. Two For-loop 

var twoSum = function(nums, target) {
    for ( let i=0 ; i<nums.length ; i++){
        for ( let j=i+1 ; j<nums.length ; j++){ 
            if (target == nums[i] + nums[j])
                return [i,j];
        }
    }
};

//then you found that will take O(n^2)

var twoSum = function(nums, target) {
    let map = {};
    for(let i = 0 ; i < nums.length ; i++){
        let number = nums[i];
        if(map[target-number]!==undefined){
            return [map[target-number],i]
        } else {
            map[number] = i;
        }
    }
};
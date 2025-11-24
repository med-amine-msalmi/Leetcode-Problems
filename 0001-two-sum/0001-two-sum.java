class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer,Integer> numIndexed=new HashMap<>();
        int[] output=new int[2];
        for(int i=0;i<nums.length;i++){
            int diff=target-nums[i];
            if(numIndexed.get(diff) != null){
                output[0]=i;
                output[1]=numIndexed.get(diff);
                return output;
            }
            numIndexed.put(nums[i],i);
        }
        return output;
    }
    
}
class Solution {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
         ArrayList<Integer> Stack=new ArrayList<>();
         HashMap<Integer,Integer> Map=new HashMap<>();
         int[] output=new int[nums1.length];
         for (int n : nums2){
            while(!Stack.isEmpty() && Stack.get(Stack.size()-1)< n){
                Map.put(Stack.remove(Stack.size()-1),n);
            }
            Stack.add(n);
         }
         for(int n:Stack){
            Map.put(n,-1);
         }
         for (int i=0;i<nums1.length;i++ ){
            output[i]=Map.get(nums1[i]);
         }

        return output;
    }
}
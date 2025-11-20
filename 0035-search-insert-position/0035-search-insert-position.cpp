class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
                int left = 0;
        int right = nums.size() - 1;
        
        while (left <= right) {
            int middle = left + (right - left) / 2;
            
            if (nums[middle] == target) {
                return middle;
            } else if (nums[middle] < target) {
                if (middle == nums.size() - 1 || target < nums[middle + 1]) {
                    return middle + 1;
                }
                left = middle + 1;
            } else {
                if (middle == 0 || target > nums[middle - 1]) {
                    return middle;
                }
                right = middle - 1;
            }
        }
        
        // Return left as the insertion point if the target isn't found in the loop
        return left;
    }
};
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
	int UniqueElements = 1;
       	if (nums.empty())
		return 0;
	for (int i = 1; i < nums.size(); i++)
	{
		if (nums[i] != nums[i - 1])
		{
			nums[UniqueElements] = nums[i];
			UniqueElements++;
		}
	}
	return UniqueElements; 
    }
};
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        
        HashMap<String,List<String>> map=new HashMap<>();
        
        for(String s:strs)
        {
            char[] charArr=s.toCharArray();
            Arrays.sort(charArr);
            String sortedstring=new String(charArr);
            if(!map.containsKey(sortedstring))
            {
                map.put(sortedstring,new ArrayList<>());
            }
            map.get(sortedstring).add(s);
        }
    
        return new ArrayList<>(map.values());
    }
}
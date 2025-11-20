class Solution {
    public boolean isAnagram(String s, String t) {
        char[] charlist1=s.toCharArray();
        char[] charlist2=t.toCharArray();
        Arrays.sort(charlist1);
        Arrays.sort(charlist2);
        return Arrays.equals(charlist1,charlist2);
        
    }
}
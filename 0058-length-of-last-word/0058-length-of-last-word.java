class Solution {
    public int lengthOfLastWord(String s) {
        String[] words=s.split(" ");
        String finalStr=words[words.length-1];
        int i=2;
        while(finalStr==" " && i<words.length+1){
            finalStr=words[words.length-i];
            i++;
        }
        return finalStr.length();

       
    }
}
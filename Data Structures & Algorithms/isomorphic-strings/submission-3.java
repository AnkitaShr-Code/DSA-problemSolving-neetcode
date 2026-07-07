class Solution {
    public boolean isIsomorphic(String s, String t) {
        if(s.length() != t.length()){
            return false;
        }

        HashMap<Character, Character> mapStoT = new HashMap();
        HashMap<Character, Character> mapTtoS = new HashMap();

        for(int i =0; i<s.length(); i++) {
            char cs = s.charAt(i);
            char ct = t.charAt(i);
            if(!mapStoT.containsKey(cs) && !mapTtoS.containsKey(ct)){
                mapStoT.put(cs, ct);
                mapTtoS.put(ct, cs);
            } else if(mapStoT.get(cs) == null || mapTtoS.get(ct) == null 
                || mapStoT.get(cs) != ct || mapTtoS.get(ct) != cs
            ) {
                return false;
            }
        }
        return true;
        
    }
}
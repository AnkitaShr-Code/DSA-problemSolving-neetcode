class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> hm = new HashMap<>();

        for(int i =0; i<strs.length; i++) {
            int[] freqArr = new int[26];

            for(char c: strs[i].toCharArray()) {
                freqArr[c - 'a']++;
            }

            StringBuilder key = new StringBuilder();
            for(int count: freqArr) {
                key.append("#").append(count);
            }

            hm.computeIfAbsent(key.toString(),
                k -> new ArrayList<>())
            .add(strs[i]);
        }
        return new ArrayList<>(hm.values());
        
    }
}

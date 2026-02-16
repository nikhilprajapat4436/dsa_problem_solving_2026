class Solution {
    getSecondLargest(arr) {
        // code here
        let first = -1;
        let second = -1;
        for (let i = 0; i<arr.length; i++){
            if(first<arr[i]){
                second= first;
                first=arr[i];
            }else if(arr[i]<first&&arr[i]>second){
                second=arr[i];
                
            }
        }
        return second;
        
    }
}
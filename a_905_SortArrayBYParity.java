import java.io.*;
import java.util.*;
public class a_905_SortArrayBYParity{
    
    public static int[] sortArrayByParity(int[] A){
        
        int[] ans = new int[A.length];
        int s = 0;
        
        for(int i=0; i<A.length; i++){
            
            if(A[i]%2==0){
                ans[s++] = A[i];
            }
        }
        for(int i=0; i<A.length; i++){
            if(A[i]%2==1){
                ans[s++] = A[i];
            }
        }
        return ans;
    }

    public static void main(String[] args) throws Exception{
        
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt(); 
        //Declare array 
        int[] A = new int[n];

        for(int i = 0; i<A.length; i++){
            A[i] = scn.nextInt();
        }

        sortArrayByParity(A);
        System.out.println(sortArrayByParity[A]);
    }
}

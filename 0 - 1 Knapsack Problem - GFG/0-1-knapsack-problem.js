//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        
        input_line = readLine().split(' ');
        let W = parseInt(input_line[0]);
        
        input_line = readLine().split(' ');
        let val = new Array(n);
        for(let i=0;i<n;i++)
            val[i] = parseInt(input_line[i]);
        
        input_line = readLine().split(' ');
        let wt = new Array(n);
        for(let i=0;i<n;i++)
            wt[i] = parseInt(input_line[i]);
        
        
        let obj = new Solution();
        let ans = obj.knapSack(W, wt, val, n);
        if(ans==-0)
            ans=0;
        console.log(ans);
    }
}

// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number} W
 * @param {number[]} wt
 * @param {number[]} val
 * @param {number} n
 * @returns {number}
*/

class Solution 
{
    //Function to return max value that can be put in knapsack of capacity W.
    knapSack(W, wt, val, N)
    { 
       const cache = {};
       const genKey = (n, w) => `${n}:${w}`;
       
       const dp = (n, w) => {
           const key = genKey(n, w);
           
           if (n <= 0 || w <= 0) return 0;
           if (cache[key] !== undefined) return cache[key];
                      
           if (wt[n-1] > w) {
               return dp(n-1, w);
           } else {
                cache[key] = Math.max(
                    // n번째 물건 포함
                    dp(n-1, w - wt[n-1]) + val[n-1],
                    // n번째 물건 포함하지 않음
                    dp(n-1, w)
                   )
                return cache[key];
           }
       }
       
       return dp(N, W)
    }
}


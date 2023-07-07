/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
  const maxConsequtive = (char) => {
       let left = 0, charCount = 0, max = 0

       for(let right = 0; right < answerKey.length; right++){

           if(answerKey[right] === char) charCount++

           while(charCount > k){
               if(answerKey[left++] === char) charCount--
           }

           max = Math.max(max,right-left+1)
       }
       return max
  }  

  return Math.max(maxConsequtive('T'),maxConsequtive('F'))
};
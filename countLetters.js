const countLetters = function(sentance) {
  const results = {};
  for (const num of sentance) {
 
    num.toLowerCase();
    if(num !== " "){
      
    
    
    if (results[num]) {
      results[num] += 1;

    } else {
      results[num] = 1;
    }
  }
}
  return results;
};
module.exports =  countLetters;







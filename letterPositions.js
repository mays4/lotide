const letterPositions = function(sentence) {
  // logic to update results here
  const sen = sentence.toLowerCase();
  const results = {};
  for (let i = 0; i < sen.length; i++) {
    if (sen[i] !== " ") {
      if (!results[sen[i]]) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};
module.exports = letterPositions;

  



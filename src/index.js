
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let sol = [];
  if (matrix===undefined||matrix.length==0){
      return sol;
  }

  const add = (arr) => arr.forEach(elem => sol.push(elem));

  for (let i=0; i<matrix.length; i++){
    if (i%2) {
      add(matrix[i].reverse());
    } else {
      add(matrix[i]);
    }
  }
  
  return sol;
}

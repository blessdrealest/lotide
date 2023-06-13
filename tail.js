const tail = function(array) {
  if (array.length <= 1) {
    return [];
  }
  return array.slice(1);
};

module.exports = tail;



//Test case
//const words = ["yo yo", "Lighthouse", "Labs"];
//console.log(tail(words));
//assertEqual(words.length, 3); //original array should have 3 elements
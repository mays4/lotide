
const flat = (f) => {

  for (let a of f) {
    if (Array.isArray(a)) {
      for (let b of a) {
        console.log(b);
      }
    } else {
      console.log(a);
    }
    
  
  }

};



const fl = ([1, 2, [3, 4], 5, [6]]);
console.log(flat(fl));
function seatingArrangement(arr, n) {
    let count = 0;
  
    for (let i = 0; i < arr.length; i++) {
      let seatsAvailable = 0;
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === 0) {
          seatsAvailable++;
          if (seatsAvailable === n) {
            count++;
            seatsAvailable--;
          }
          
        }
         
         else {
          seatsAvailable = 0;
        }
      }
    }
  
    return count;
  }
  
  const arr = [ 
  [1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0],
  [0, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 0, 0, 1],
  [1, 1, 1, 0, 1, 0, 1],
  [0, 1, 1, 1, 1, 0, 0]
  ];
  const n1 = 2;
  console.log(seatingArrangement(arr, n1)); 
  
  
  
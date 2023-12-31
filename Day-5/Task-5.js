function spotlightMap(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
  
   
    const result = [];
    for (let i = 0; i < rows; i++) {
      result.push(new Array(cols).fill(0));
    }
  
    
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let sum = grid[i][j]; 
  
       
        if (i - 1 >= 0) {
          sum += grid[i - 1][j]; 
          if (j - 1 >= 0) {
            sum += grid[i - 1][j - 1];
          }
          if (j + 1 < cols) {
            sum += grid[i - 1][j + 1]; 
          }
        }
        if (i + 1 < rows) {
          sum += grid[i + 1][j];
          if (j - 1 >= 0) {
            sum += grid[i + 1][j - 1]; 
          }
          if (j + 1 < cols) {
            sum += grid[i + 1][j + 1]; 
          }
        }
        if (j - 1 >= 0) {
          sum += grid[i][j - 1];
        }
        if (j + 1 < cols) {
          sum += grid[i][j + 1]; 
        }
  
        result[i][j] = sum; 
      }
    }
  
    return result;
  }
  
  
  const grid = [
   
  [2, 6, 1, 3, 7],
  [8, 5, 9, 4, 0]
  ];
  
  const result = spotlightMap(grid);
  console.log(result);
  

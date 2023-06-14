function MaxMin(arr) {
    return {
      max: Math.max(...arr),
      min: Math.min(...arr),
    };
  }
  
  const array = [3, 7, 2, 9, 4, 1];
  console.log(MaxMin(array));
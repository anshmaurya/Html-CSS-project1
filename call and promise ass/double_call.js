function doubleArray(arr, call) {
    const doubleArr = arr.map((num)=> {
        return call(num);
    });
    return doubleArr;
  }

const array =[1,2,3,4,5];
  function call(num){
    return num * 2;
  }

  const doubleArr = doubleArray(array, call);
  console.log(doubleArr);
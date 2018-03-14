function breakOut(array, changeValue, stopValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      break;
    }
    array[i] = changeValue;
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue;
    }
    array[i] = changeValue;
  }
  return array;
}

function findBy(array, findFn) {
  console.log("test");
  console.log(array[4]);
  console.log(findFn(array));
  
  
  for (var i = 0; i < array.length; i++) {
    if (array[i] === findFn(array)) {
      return array[i];
    }
  }
  return null;
}
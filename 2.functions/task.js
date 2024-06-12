function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((a, b) => a + b, 0)
  let avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    let sum = arr.reduce((a, b) => a + b, 0);
    return sum;
  }
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let difference = max - min;
    return difference;
  }
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    let sumEvenElement = 0;
    let sumOddElement = 0;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }
    return sumEvenElement - sumOddElement;
  }
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    let sumEvenElement = 0;
    let countEvenElement = 0;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement += 1;
      }
    }
    let averageEvenElement = sumEvenElement / countEvenElement;
    return averageEvenElement;
  }
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i of arrOfArr) {
    const result = func(...i);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
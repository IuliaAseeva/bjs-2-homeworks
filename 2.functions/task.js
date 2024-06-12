function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
          max = arr[i]
      }
      if (arr[i] < min) {
          min = arr[i]
      }
      sum += arr[i];
  }
  const avg = +(sum / arr.length).toFixed(2);
  return {
      min: min,
      max: max,
      avg: avg
  };
}

console.log(getArrayParams(-99, 99, 10))
console.log(getArrayParams(1, 2, 3, -100, 10))
console.log(getArrayParams(5))

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
      sum = +arr[i];
  }
  return sum
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
      return 0
  }
  let min = arr[0]
  let max = arr[0]

  for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
          min = arr[i]
      }
      if (arr[i] > max) {
          max = arr[i]
      }
  }
  return max - min
}


function differenceEvenOddWorker(...arr) {
  if (arr.length) return 0;

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
          sumEvenElement += arr[i];
      } else {
          sumOddElement += arr[i];
      }
  }
  return sumEvenElement - sumOddElement;
}


function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;

  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
          sumEvenElement += arr[i];
          countEvenElement++;
      }
  }
  if (countEvenElement === 0) return 0;
  return (sumEvenElement / countEvenElement).toFixed(2);
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arr.length; i++) {
      const resultMakeWork = func(...arr[i]);

      if (resultMakeWork > maxWorkerResult) {
          maxWorkerResult = resultMakeWork;
      }
  }
  return maxWorkerResult;
}
const arr = [
  [10, 10, 11, 20, 10],
  [67, 10, 2, 39, 88],
  [72, 75, 51, 87, 43],
  [30, 41, 55, 96, 62]
];
console.log(makeWork(arr, summElementsWorker));
console.log(makeWork(arr, differenceEvenOddWorker));
console.log(makeWork(arr, differenceMaxMinWorker));
console.log(makeWork(arr, averageEvenElementsWorker));
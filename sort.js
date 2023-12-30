// Understand Sorting

const arr = [1, 2, 3, 3, 445, 65, 45, 67];
const sortedArr = [2, 3, 4, 45];

const names = ["namym", "kalakmns", "slamaefija", "Rahim", "jamal"];

// sorting Algorithms

// 1. Bubble Sort
// 2. Select Sort
// 3. Insertion Sort
// 4. Quick Sort
// 5. Merge Sort
// 6. Heap Sort
// 6. Radix Sort
// Tons of Different sorting Algorithms Available

// Implement Bubble Sort

let myArray = [1, 2, 4, 6, 7, 3, 8, 9, 22, 11];

let a = 1;
let b = 79;

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};

bubbleSort(myArray);
// console.log(myArray);

//How to Work with Sort Method

const numbers = [1, 2, 3, 4, 5, 68, 7, 8, 9, 10];

numbers.sort((a, b) => {
  return a - b;
});

// console.log(numbers);

const str = ["babul", "kabul", "Sabul", "dabul"];

str.sort((a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a > b) return 1;
  if (a < b) return -1;

  return 0;
});

// console.log(str);

const obj = [
  { id: 1, name: "Shakib" },
  { id: 4, name: "Kbail" },
  { id: 3, name: "Dami" },
  { id: 2, name: "Yesuf" },
  { id: 5, name: "Salam" },
  { id: 7, name: "Zaiz" },
];

// obj.sort((a ,b) => {
//     if(a.id > a.id) return 1
//     if(a.id< b.id) return -1
//     return 0
// })

// console.log(obj);

obj.sort((a, b) => {
  if (a.name > a.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
});

console.log(obj);

// Implement Bubble Sort with Callback

const bubbleShort = (array, cb) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (cb(array[j], array[j + 1]) > 0) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
};

const arr3 = [2, 3, 4, 5, 43, 2, 3, 4, 54, 45, 56];

bubbleShort(arr3, (a, b) => b - a);
console.log(arr3);

// Understand and Implement Linear Search

const obj1 = [
  { id: 1, name: "Shakib" },
  { id: 4, name: "Kbail" },
  { id: 3, name: "Dami" },
  { id: 2, name: "Yesuf" },
  { id: 5, name: "Salam" },
  { id: 7, name: "Zaiz" },
];

const linearSearch = (array, key) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      return i;
    }
  }
  return -1;
};
const linearSearchCb = (array, cb) => {
  for (let i = 0; i < array.length; i++) {
    if (cb(arr[i])) {
      return i;
    }
  }
  return -1;
};

const s3 = linearSearchCb(obj1, (item) => item.name === "Zaiz");

// console.log(s3);

//Understand Binary Search

//8.8 Implement Binary Search

let array = [12, 2, 2, 3, 3, 3, 43, 3, 43];

const binarySearch = (arr, key) => {
  let lowest = 0;
  let highest = arr.length - 1;

  while (lowest <= highest) {
    let mid = Math.floor((lowest + highest) / 2);
    if (arr[mid] === key) return mid;
    if (arr[mid] < key) lowest = mid + 1;
    if (arr[mid] > key) highest = mid - 1;
  }

  return -1;
};

array.sort((a,b) => a-b)

// console.log(array);
const index = binarySearch(array, 12)

// console.log(index);


// FindIndex Method


let array12 = [12, 2, 2, 3, 3, 3, 43, 3, 43];

const todos = [
    {name: 'Project 1', isDone: true},
    {name: 'Project 2', isDone: true},
    {name: 'Project 3', isDone: true},
    {name: 'Project 4', isDone: false},
    {name: 'Project 5', isDone: false},
    {name: 'Project 6', isDone: true},
    {name: 'Project 7', isDone: false}
]

const index1 = array12.findIndex((item) => item === 43);
// console.log(index1);


const index11 = todos.findIndex((item) => item.isDone === false)

console.log(index11);

// Find Method

const todosss = [
  { name: "Project 1", isDone: true },
  { name: "Project 2", isDone: true },
  { name: "Project 3", isDone: true },
  { name: "Project 4", isDone: false },
  { name: "Project 5", isDone: false },
  { name: "Project 6", isDone: true },
  { name: "Project 7", isDone: false },
];

const todo = todosss.find(item => item.isDone === false) 
console.log(todo);


const ourFind = (array, cb) => {
    for (let i = 0; i < array.length; i++) {
      if (cb(arr[i])) {
        return arr[i]
      }
        
    }
    return undefined
}

const lowest = 85;
const student2 = ourFind(todosss, (item) => item.name === lowest);







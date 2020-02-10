const fruits = ['apple', 'banana'];

// help with inference when extracting values
const fruit = fruits[0]; // 'fruit' infered as string

//flexible types
const alphanum: (number | string)[] = ['a'];
alphanum.push(1);
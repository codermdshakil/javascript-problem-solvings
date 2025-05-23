
// JavaScript Array Include and Indexof practice problem

// 1. Include VS indexof পার্থক্য কি ?

// যদি তুমি শুধু জানতে চাও কোনো item array-তে আছে কিনা → ✅ includes()
// যদি item টা কোন index-এ আছে সেটা জানতে চাও → ✅ indexOf()


// 2. 

const fruits = ['apple', 'mango', 'banana', 'litchi'];
const isMango = fruits.includes('mango');

// if(isMango){
//     console.log('Mango ase!');
// }
// else{
//     console.log('Mango nai gache ot!');
// }


// 3 

const names = ['babul', 'alif', 'choton'];
const indexOfBabul = names.indexOf('babul');
// console.log(indexOfBabul); // 0

// 4

const friends = ['rimon', 'rifat', 'razib'];
const indexOfRifat = friends.indexOf('rifat');
// console.log(indexOfRifat); // 1

// 5 

const cities = ['Dhaka', 'Chittagong', 'Sylhet', 'rajshahi'];
const isRajShahi = cities.includes('RajShahi');
// console.log(isRajShahi); // false 

// 6 

const rainArray = ['Deghi', 'Meg', 'Bristy', 'Borsha'];
const isBristy = rainArray.includes('Bristy');

// if(isBristy){
//     console.log('I need Umbreralla');
// }else{
//     console.log('No rain No pain');
// }






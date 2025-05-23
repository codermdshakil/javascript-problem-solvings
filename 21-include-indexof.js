
// JavaScript Array Include and Indexof practice problem

// 1. Include VS indexof পার্থক্য কি ?

// যদি তুমি শুধু জানতে চাও কোনো item array-তে আছে কিনা → ✅ includes()
// যদি item টা কোন index-এ আছে সেটা জানতে চাও → ✅ indexOf()


// 2. 

const fruits = ['apple', 'mango', 'banana', 'litchi'];
const isMango = fruits.includes('mango');

if(isMango){
    console.log('Mango ase!');
}
else{
    console.log('Mango nai gache ot!');
}



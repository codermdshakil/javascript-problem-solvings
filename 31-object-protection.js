//JavaScript Object Protection Problems


// ৫. একটি animal অবজেক্ট বানাও, যার মধ্যে থাকবে name: "Tiger" এবং location: "Sundarban"। এখন এমন কিছু করো, যাতে location প্রপার্টিটি চেঞ্জ করা না যায়।

// ৬. নিচের অবজেক্টটি দাও: const food = { name: "Pizza", price: 500, size: "Large" };
// এমন কিছু করো, যাতে food অবজেক্টে নতুন কোনো প্রপার্টি যোগ করা না যায়, কিন্তু চাইলে price বাড়ানো বা কমানো যাবে।

// Solutions:

// ১. ধরো, একটি headphone অবজেক্ট আছে, যার মধ্যে রয়েছে brand: "Sony", price: 3000, এবং color: "red"। Object.freeze() মেথড ব্যবহার করে অবজেক্টটি ফ্রিজ করো। এরপর একটি নতুন প্রপার্টি যোগ করার চেষ্টা করো। দেখো, কাজ করে কি না।

const headphone = {
  brand: "Sony",
  price: 3000,
  color: "Red",
};

Object.freeze(headphone);
headphone.brand = "Readland"; // Not allow
// console.log(headphone)

// ২. নিচের অবজেক্টটি দাও: const player = { name: "Messi", goals: 800, club: "Inter Miami" };
// Object.freeze() মেথড ব্যবহার করে অবজেক্টটি ফ্রিজ করো। এরপর একটি নতুন প্রপার্টি যোগ করে দেখো, কাজ করে কি না।

const player = { name: "Messi", goals: 800, club: "Inter Miami" };
Object.freeze(player);
player.salary = 5000000;
// console.log(player); // Not allowed

// ৩. নিচের অবজেক্টটি দাও: const book = { title: "Harry Potter", author: "J.K. Rowling", pages: 500 };
// Object.seal() ব্যবহার করে অবজেক্টটি সিল করো। তারপর author প্রপার্টিটি চেঞ্জ করে দেখো।

const book = { title: "Harry Potter", author: "J.K. Rowling", pages: 500 };
Object.seal(book); // seat allow to update existing information
book.author = "Shakil Ahmed";
book.price = 100; // Not allowed
// console.log(book);



// ৪. একটি gadget অবজেক্ট বানাও, যার মধ্যে থাকবে name: "iPhone", price: 120000, এবং color: "Black"। delete ব্যবহার করে price প্রপার্টিটি ডিলিট করো।

const gadget = {
  name:"Iphone",
  price:120000,
  color:"Black"
};

delete gadget.price;

console.log(gadget);
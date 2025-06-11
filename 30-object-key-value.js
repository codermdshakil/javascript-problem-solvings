
// Solutions:

// 1. book নামের একটি অবজেক্ট তৈরি করো, যেখানে বইয়ের নাম, লেখক ও দাম থাকবে। এরপর সেই অবজেক্টের সব কী (key) এবং ভ্যালু (value) কনসোলে লগ করো।

const book = {
  bookName: "Atomic Habit",
  price: 500,
  author: "Jemns Clear",
};

// console.log(Object.keys(book));
// console.log(Object.values(book));

// 2. নিচের অবজেক্টটিতে author নামের প্রপার্টি আছে কি না তা চেক করো:
const article = { title: "Learning JS", category: "Programming" };
const keysArray = Object.keys(article);
// console.log(keysArray.includes('author')); // false

// 3. নিচের laptop অবজেক্টের জন্য for...in লুপ ব্যবহার করে প্রতিটি প্রপার্টি এবং তার মান প্রিন্ট করো:
const laptop = { brand: "Dell", model: "Inspiron", price: 45000 };

for (const val in laptop) {
  // console.log(val);
}

// brand
// model
// price

// 4. নিচের phone অবজেক্টে Object.keys() ব্যবহার করে for...of লুপের মাধ্যমে প্রতিটি প্রপার্টি এবং তার মান কনসোলে লগ করো:
const phone = { brand: "Samsung", model: "Galaxy S21", price: 85000 };

const keysArr = Object.keys(phone);

for (const val of keysArr) {
  // console.log(val + " " +phone[val]);
}

// 5. bike নামে একটি অবজেক্ট তৈরি করো, যেখানে থাকবে brand: "Hero", price: 120000, এবং model: "Splendor"। এরপর Object.values() ব্যবহার করে সব ভ্যালু বের করো।

const bike = {
  brand: "Helo",
  price: 1200000,
  model: "Splendor",
};

const bikeValues = Object.values(bike);
// console.log(bikeValues);

// 6. নিচের books অবজেক্টের ওপর লুপ চালিয়ে সব বইয়ের নাম কনসোলে লগ করো:
const books = {
  book1: "Harry Potter",
  book2: "The Hobbit",
  book3: "Game of Thrones",
};

for (const val in books) {
  // console.log(books[val]);
}

// 7. নিচের numbers অবজেক্টের সব প্রপার্টির মান (value) যোগ করে ফলাফল বের করো:
const numbers = { a: 10, b: 20, c: 30, d: 40 };

let sum = 0;
for (const val in numbers) {
  sum += numbers[val];
}

// console.log(sum); // 100

// 8. player নামে একটি অবজেক্ট তৈরি করো, যেখানে থাকবে name: "Messi", team: "Argentina", এবং goals: 91। এরপর Object.values() ব্যবহার করে সব ভ্যালু বের করো।

const player = {
  name: "Messi",
  team: "Argentina",
  goals: 91,
};

const playersValues = Object.values(player);
// console.log(playersValues);


// 9. building নামে একটি অবজেক্ট তৈরি করো, যেখানে থাকবে floors: 10, address: { street: "Main Road", city: "Dhaka" }, এবং type: "Commercial"। এরপর for...in লুপ চালিয়ে সব প্রপার্টি ও তাদের মান প্রিন্ট করো।

const building = {
  floors:10,
  address: { street: "Main Road", city: "Dhaka" },
  type: "Commercial"
}

for(const val in building){
  // console.log(building[val]);
}




// 7. একজন দোকানদার প্রতি আইটেমে ২৫০ টাকা লাভ করে। একটা ফাংশন লেখো, যেখানে কোনো একটা জিনিসের কেনার দাম দিলে, সে বিক্রির দাম (selling price) দিয়ে দেবে।

// 8. একটা ফাংশন লেখো, তারপর সেই ফাংশনে জন্ম সাল প্যারামিটার হিসেবে দেবে। তারপর সে বলে দেবে, কোন বছরে তোমার বয়স ১০০ বছর হবে।

// 9. একটা ফাংশন লেখো, যেখানে প্যারামিটার হিসেবে দেবে, প্রতিদিন তুমি কয় ঘণ্টা সময় মোবাইল ইউজ করো। তারপর সেই ফাংশন বের করবে, মাসে তুমি মোট কত ঘণ্টা মোবাইল ইউজ করো (ধরে নাও, এক মাসে ৩০ দিন)।



// Solution :

// 1. পিতা ও পুত্রের বয়সের গুণফল বের করার একটা ফাংশন লেখ।

function fatherAndChildrenAgeMultipication(children , father){
  const result = children * father;
  // console.log(result);
}

// fatherAndChildrenAgeMultipication(21,48);

// 2. রেক এক বন্ধু বলল ক্যালকুলেটর বানাতে, কিন্তু ক্যালকুলেটরে শুধু গুণ বা ভাগ করার অপশন থাকলে হবে না। একটা ফাংশন লেখো, যেখানে দুইটা সংখ্যার গুণফল দেখাবে। যেমন, যদি ২০ আর ১৫ পাঠাও, আউটপুট হবে ৩০০।

function mul(num1, num2){
  const result = num1 * num2;
  return result;
}

// console.log(sum(20, 15));


// 3. একটা ফাংশন লেখো, যেটা তিনটা সাবজেক্টের পরীক্ষার মার্কসের যোগফল দেখাবে।

function threeSum(sub1, sub2, sub3){
  const result = sub1 + sub2 + sub3;
  return result;
}

// console.log(threeSum(67, 72, 68));


// 4. বয়স বের করার একটা ফাংশন লেখো। যেটাকে তুমি জন্মের বছর বলবে, তারপর ফাংশনের ভিতরে এই বছর থেকে সেই বছর বাদ দিলে বলে দেবে তুমি কত বছর বয়সের হয়েছো।




function calculateAge(dobYear){

  const currentYear = new Date().getFullYear();
  const age = currentYear - dobYear;
  return age;
  
}

// console.log(calculateAge(2004)); // 21


// 5. তুমি একটা দোকানে গেছো, যেখানে একটি লাউ কেনার জন্য ৩৫ টাকা লাগে। এখন একটা ফাংশন লেখো, যা প্যারামিটার হিসেবে নেবে তুমি লাউয়ের জন্য কত টাকা দিতে চাও। তারপর ভাগ করে বলে দেবে তুমি কয়টা লাউ কিনতে পারবে।

function buyLaw(price){
  const oneLaw = 35;
  const quantity = parseInt(price / oneLaw);
  return quantity;
};

// console.log(buyLaw(100));// 2


// 6. একটা ফাংশন লেখো, যেখানে চারটা সংখ্যার গড় বের করবে।

function gor(n1, n2, n3, n4){
  const totalNumbers = n1 + n2 + n3 + n4;
  const result = totalNumbers / 4;
  return result;
}

// console.log(gor(5, 10, 7, 8));


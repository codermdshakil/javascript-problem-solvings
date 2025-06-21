

// 7. এমন একটি ফাংশন লিখুন, যা ইনপুট হিসেবে কোনও সংখ্যা গ্রহণ করবে এবং চেক করবে তা নেগেটিভ কিনা। যদি নেগেটিভ হয়, তা -1 দিয়ে গুণ করে রিটার্ন করবে, আর না হলে আগের মতোই রিটার্ন করবে।


// Solutions:

// 1. এমন একটি ফাংশন লিখুন, যা কোনও সংখ্যাকে ইনপুট হিসেবে গ্রহণ করবে এবং চেক করবে তা 10 এর চেয়ে বড় কিনা। যদি হয়, true রিটার্ন করবে, আর না হলে false রিটার্ন করবে।

function myFunc(num){

  if(num > 10){
    return true;
  }
  else{
    return false;
  }
};

// console.log(myFunc(11));

// 2. এমন একটি ফাংশন লিখুন, যা কোনও সংখ্যা ইনপুট হিসেবে গ্রহণ করবে এবং চেক করবে তা 13 দিয়ে নিঃশেষভাবে বিভাজ্য কিনা। বিভাজ্য হলে true আর না হলে false রিটার্ন করবে।

function isThirteenDivided(num){

  if(num%13 === 0){
    return true;
  }
  else{
    return false;
  }
};

// console.log(isThirteenDivided(27));


// 3. তুমি একটি রেস্টুরেন্টে গিয়েছ এবং খাবে — ভাত (rice), তরকারি (curry) আর ড্রিংস (drinks)। এমন একটি ফাংশন লিখতে হবে, যা এই তিনটি খাবারের দাম ইনপুট হিসেবে গ্রহণ করে তাদের মোট দাম (টোটাল বিল) রিটার্ন করবে।

function totalBill(rice, curry, drinks){
  const total = rice + curry + drinks;
  return total;
};

// console.log(totalBill(20, 10, 15));



// 4. এমন একটি ফাংশন লিখুন, যা ইনপুট হিসেবে বয়স গ্রহণ করবে এবং চেক করবে ব্যক্তির বয়স 18 এর বেশি কিনা। যদি বেশি হয়, Eligible for Voting আর না হলে Not Eligible রিটার্ন করবে।

function isEligible(age){
  if(age >= 18){
    return "Eligible for Voting!";
  }
  else{
    
    return " Not Eligible for Voting!";
  }
}

// console.log(isEligible(19));

// 5. এমন একটি ফাংশন লিখুন, যা ইনপুট হিসেবে কোনও স্ট্রিং গ্রহণ করবে এবং সেই স্ট্রিং এর দৈর্ঘ্য রিটার্ন করবে।

function getLength(names){
  const lengths = names.length;
  return lengths;
}
// console.log(getLength("Shakil"));




// 6. এমন একটি ফাংশন লিখুন, যা তিনটি সংখ্যা ইনপুট হিসেবে গ্রহণ করবে এবং তাদের গড় রিটার্ন করবে।

function getGhor(num1, num2, num3){
  const total = parseInt((num1 + num2 + num3) / 3);
  return total;
};

console.log(getGhor(10, 34, 65));

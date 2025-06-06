// JavaScript Break এবং Continue Practice :


// ১. ধরো, তুমি ১ থেকে ৩০ পর্যন্ত সংখ্যা প্রিন্ট করতে চাও। কিন্তু ইচ্ছা হলো, ১৫-এর পরে প্রিন্ট করা হবে না, থেমে যাবে।

for(let i = 1; i <= 30; i++){
    // console.log(i);

    if(i >= 15){
        break;
    }
}


// ২. তুমি ১ থেকে ৪০ পর্যন্ত সংখ্যা প্রিন্ট করতে চাও, তবে এমনভাবে যে ৭ দিয়ে বিভাজ্য সংখ্যা গুলো বাদ যাবে। যেমন: ৭, ১৪, ২১, ইত্যাদি বাদ যাবে। এমন একটি প্রোগ্রাম লেখো, যেখানে এই সংখ্যাগুলো স্কিপ হবে।

for(let i = 1; i <= 40; i++){
    if(i%7==0){
        continue;
    }
    // console.log(i);
}



// ৩. তুমি ১ থেকে ১৫ পর্যন্ত সংখ্যা প্রিন্ট করতে চাও, কিন্তু ৯ বাদে। এমন একটি প্রোগ্রাম লেখো, যেখানে ৯ স্কিপ হয়ে যাবে এবং বাকি সব সংখ্যা প্রিন্ট হবে।


for(let i = 1; i <= 15; i++){
    if(i==9){
        continue;
    }
    // console.log(i);
}


// ৪. ১ থেকে ২০ পর্যন্ত সংখ্যা প্রিন্ট করো, কিন্তু ১২ বাদে। ১২ স্কিপ হয়ে যাবে এবং বাকি সব সংখ্যা প্রিন্ট হবে।

for(let i = 1; i <= 20; i++){
    if(i==12){
        continue;
    }
    // console.log(i);
}


// ৫. ১ থেকে ২৫ পর্যন্ত সংখ্যা প্রিন্ট করো, কিন্তু ৩ দিয়ে বিভাজ্য সংখ্যা গুলো বাদ যাবে।

for(let i = 1; i <= 25; i++){
    if(i%3==0){
        continue;
    }
    // console.log(i);
}


// ৬. ৯১ থেকে ১২০ পর্যন্ত সংখ্যা প্রিন্ট করো, কিন্তু যেই সংখ্যা ১০ দিয়ে ভাগ যায় (অর্থাৎ ১০, ২০, ৩০, ... এর মতো), এমন সংখ্যা পেলে প্রিন্ট করা বন্ধ হবে, থেমে যাবে।

for(let i = 91; i <= 120; i++){
    if(i%10==0){
        break;
    }
    // console.log(i);
}
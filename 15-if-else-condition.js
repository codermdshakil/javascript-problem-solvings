
// 1 

function applyDiscount(totalPrice, discount, isPercentage = true) {
  if (isPercentage) {
    // percentage discount
    return totalPrice * (1 - discount / 100);
  } else {
    // fixed amount discount
    return totalPrice - discount;
  }
}


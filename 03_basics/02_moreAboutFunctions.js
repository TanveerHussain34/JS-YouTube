// When we make an E-commerce platform, user adds products to the cart and we have to add the prices of those products for which we use REST Operator

function calculateCartPrices(...num1) {
  return num1;
}
function calculateCartPrices2(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrices(450, 560, 255, 899));
console.log(calculateCartPrices2(450, 560, 255, 899));

function userInfo(anyObject) {
  console.log(
    `${anyObject.name} purchased products for ${anyObject.price} rupees.`
  );
}

let customer = {
  name: "Zayan",
  price: 1999,
};

userInfo(customer);
userInfo({
  name: "Faizan",
  price: 3699,
});

function returnSecondValue(anyArray) {
  console.log(anyArray[1]);
}

let productPrices = [199, 566, 978, 820];

returnSecondValue(productPrices);
returnSecondValue([100, 200, 900, 500]);

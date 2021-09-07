//#5
let pizzaPlace = 'Imos';
let numberOfToppings = 10;

//#6
console.log(typeof pizzaPlace, pizzaPlace);
console.log(typeof numberOfToppings, numberOfToppings);


//#7
console.log(
  `pizzaPlace=${pizzaPlace} and it's data type is ${typeof pizzaPlace}, numberOfToppings=${numberOfToppings} and it's data type is ${typeof numberOfToppings}`
);

//#8
if (numberOfToppings<10) {
  console.log("Quality, not quantity.")
} else {
console.log('A whole lot of pizza.');
}

//#11 BONUS

for (let i = 1; i <= numberOfToppings; i++){

  if (i % 2 === 0) {
    console.log(i + " is EVEN.");
  }


}

let price = 36.84; //price of the hammer;
let money = 2000; //how much money I have;
let item = "hammer";
let remain = (money - price);
remain = remain.toFixed(2);

if (money > price) {
  console.log(`You buy the ${item} and have ${remain} left over.`);
} else {
  console.log(`You do not have enough money to purchase the ${item}. Pick somthing else.`)
}
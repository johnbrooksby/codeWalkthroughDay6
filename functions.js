let harryPotterHealth = 100;
let voldemortHealth = 150;

let stringHealth1 = String(harryPotterHealth);
let stringHealth2 = '' + harryPotterHealth;

// console.log(harryPotterHealth);
// console.log(stringHealth);

let theWinnerIs = "Voldemort has won, for today.";

let theTrueWinner = theWinnerIs.replace("Voldemort", "Harry");
let isHarry = theTrueWinner.includes("Harry");
console.log(isHarry);
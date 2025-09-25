let shoppingList = ["clothes", "shoes", "bags", "phone", "jwelries"]

let newItem = shoppingList.push("Bag of Rice")
console.log("item added", newItem);

let remove =  shoppingList.shift();
console.log("shopping list ", shoppingList );
console.log("total Number of  items ", shoppingList);

for (let i = 0; i < shoppingList.length; i++){
    console.log(` ${i + 1}: ${shoppingList[i]}`);
}
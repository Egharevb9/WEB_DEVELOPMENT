let shoppingList = ["clothes", "shoes", "bags", "phone", "jwelries"]

let newItem = shoppingList.push("Bag of Rice")
console.log("item added", newItem);

let remove =  shoppingList.shift();
console.log("shopping list ", shoppingList );
console.log("total Number of  items ", shoppingList);

shoppingList.forEach(function(item){
    console.log(" item:", item);
});
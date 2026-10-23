
 // Global scope
let burgers = ["Hamburger", "Cheeseburger"];
let featuredDrink = "Strawberry Milkshake";

// Function scope
function addBurger() {
    const newBurger = "Flatburger";
    burgers.push(newBurger);

    // Block scope
    if (true) {
        const anotherNewBurger = "Maple Bacon Burger";
        burgers.push(anotherNewBurger);
    }
}

// Change the global drink variable
function changeFeaturedDrink() {
    featuredDrink = "The JavaShake";
}

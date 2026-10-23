
 // Global scope
let burgers = ["Hamburger", "Cheeseburger"];
const featuredDrink = "Strawberry Milkshake";

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
    // This function needs to change featuredDrink.
    // See the explanation below.
}

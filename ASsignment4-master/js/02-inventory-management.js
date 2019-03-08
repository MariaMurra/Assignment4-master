/*eslint-env browser*/
var inventory = [[36512, "Retractable banners", 40, 200.65],
                 [55874, "Wikitiki t-shirts", 36, 20.12],
                 [12358, "blank T-shirts Red", 20, 5.15],
                 [87542, "green SUP t-shirts", 15, 18.65],
                 [98745, "fishing Stickers", 600, 1.50]];
var i;

window.console.log("The product Inventory Management System\n\n\n\n");


//VIEW ALL PRODUCTS
function viewAllProducts() {
    "use strict";
    for (i = 0; i < inventory.length; i += 1) {
        window.console.log(inventory[i][0] + "  " + inventory[i][1] + "   " + inventory[i][2] + "   $" + inventory[i][3]);
    }
    somethingElse();
}


//UPDATE STOCK
function updateStock() {
    "use strict";
    var sku = parseFloat(window.prompt("Please enter a correct sku number")), stock = window.prompt("Please enter new stock quantity");

    if (isNaN(sku)) {
        window.alert("Please write a valid number");
    }
    if (sku === 36512) {
        inventory[0].splice(2, 1, (stock));
        return viewAllProducts();
    } else if (sku === 55874) {
        inventory[1].splice(2, 1, (stock));
        return viewAllProducts();
    } else if (sku === 12358) {
        inventory[2].splice(2, 1, (stock));
        return viewAllProducts();
    } else if (sku === 55874) {
        inventory[3].splice(2, 1, (stock));
        return viewAllProducts();
    } else if (sku === 87542) {
        inventory[4].splice(2, 1, (stock));
        return viewAllProducts();
    } else {
        window.console.log("Please write a valid sku.");
    }
}


//EXIT THE PROGRAM
function exitTheProgram() {
    "use strict";
    window.console.log("\n The program was terminated.");
}

    

//CHOSE WHETHER TO VIEW ALL PRODUCTS, UPDATE STOCK, or EXIT THE PROGRAM

function main() {
    "use strict";
    
    var user = window.prompt("Welcome! \n please select view products, update stock or exit the program (view, update, exit)");
    
    if (user === "view") {
        viewAllProducts();
    } else if (user === "update") {
        updateStock();
    } else if (user === "exit") {
        exitTheProgram();
    } else {
        window.alert("Please enter a valid command.");
        main();
    }
    
    
}
main();


//CONTINUE??

function somethingElse() {
    "use strict";
    var keepGoing = window.prompt("Is there something else you want to do? (y/n)");
    if (keepGoing === "y") {
        main();
    } else {
        exitTheProgram();
    }
}
let productName = prompt("What is the name of the product?");
let productPrice = prompt(`What is the price of ${productName}?`);
let productQuantity = prompt(`How many ${productName} will you be purchasing?`)
let subtotal = productPrice * productQuantity
const tax = subtotal * 0.10

let total =  tax + subtotal 

document.getElementById("product-name") .innerHTML= productName;
document.getElementById("product-price") .innerHTML= "Product price = $" + productPrice;
document.getElementById("quantity-purchased") .innerHTML= "Quantity purchased = " + productQuantity;
document.getElementById("subtotal") .innerHTML= "Subtotal = " + subtotal;
document.getElementById("taxes") .innerHTML= "Taxes = " + tax;
document.getElementById("total") .innerHTML= "Today's total is $" + total;
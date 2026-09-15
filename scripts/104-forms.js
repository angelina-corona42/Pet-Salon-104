//Exercise  -  Get the value of the Product Registration form

//Based on the DOM Practice, develop the logic to get the values of the product name, price, and category. 

//Display the values un an alert.

function register(){
    let name = document.getElementById("productName").value;

    let price = document.getElementById("price").value;

    let category = document.getElementById("category").value;

alert(`${name} ${price} ${category}`);
}

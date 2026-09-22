// ==== OBJECT CONSTRUCTOR ====
function Product(name, price, category){
    this.name = name;
    this.price = price;
    this.category = category;
}

//===== REGISTER PRODUCT ======
function registerProduct(event){
    // Prevent refreshing the browser 
event.preventDefault();

    // 1. Get the values
    let name = document.getElementById("productName").value;
    let price = document.getElementById("productPrice").value;
    let category = document.getElementById("productCategory").value;

    // alert(`${name} ${price} ${category}`);

    // 2. Use the values
    let product = new Product(name, price, category);

    //alret(`${product.name} - ${product.price} - ${product.category}`);

    // 3. Display values
    // Create teh reference to the productList container
    let container = document.getElementById("productList");

    //+= Adds one more card every click
    container.innerHTML = 
    `
        <div class="card" style="width": 18rem;">
            <div class="card-body">
                <h5 class="card-title"> ${product.name}</h5>
                <h6 class="card-subtitle mb-2"> ${product.price} </h6>
                <p class="card-text"> ${product.category} </p>
                </div>
            </div>
    `;
}



import { db } from "./firebase.js";
import { ref, get } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const productsDiv = document.getElementById("products");
const searchInput = document.getElementById("search");

let allProducts = [];

async function loadProducts() {

const snapshot = await get(ref(db,"products"));

const data = snapshot.val();

allProducts = Object.values(data);

displayProducts(allProducts);

}

function displayProducts(products){

productsDiv.innerHTML = "";

products.forEach(p => {

productsDiv.innerHTML += `
<div class="product">
<img src="${p.image}" width="200">
<h3>${p.name}</h3>
<p>Price: $${p.price}</p>

<button onclick="addToCart('${p.name}',${p.price},'${p.image}')">
Add to Cart
</button>

</div>
`;

});

}

searchInput.addEventListener("input", function(){

let value = searchInput.value.toLowerCase();

let filtered = allProducts.filter(p =>
p.name.toLowerCase().includes(value)
);

displayProducts(filtered);

});

window.addToCart = function(name,price){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push({name,price,image});

localStorage.setItem("cart",JSON.stringify(cart));

alert("Added to cart");

}

loadProducts();
window.addToCart = function(name,price,image){

if(!name || !price || !image){
return;
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push({
name:name,
price:price,
image:image
});

localStorage.setItem("cart",JSON.stringify(cart));

alert("Added to cart");

}


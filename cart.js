let cart = JSON.parse(localStorage.getItem("cart")) || [];

let div = document.getElementById("cartItems");

function displayCart(){

div.innerHTML = "";

cart.forEach((p,index) => {

div.innerHTML += `
<div class="product">

<img src="${p.image}" width="150">

<h3>${p.name}</h3>

<p>Price: $${p.price}</p>

<button onclick="removeItem(${index})">Remove</button>

</div>
`;

});

}

function removeItem(index){

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

displayCart();

}

displayCart();




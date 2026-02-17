const products = [

{
id:1,
name:"Nike Shoes",
price:1999,
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"
},

{
id:2,
name:"T-Shirt",
price:499,
image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
},

{
id:3,
name:"Watch",
price:1499,
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30"
},

{
id:4,
name:"Jeans",
price:999,
image:"https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
},

{
id:5,
name:"Headphones",
price:1999,
image:"https://images.unsplash.com/photo-1585386959984-a4155224a1ad"
},

{
id:6,
name:"Sneakers",
price:2499,
image:"https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb"
}

];

function openProduct(id){

localStorage.setItem("productId",id);

window.location.href="product.html";

}

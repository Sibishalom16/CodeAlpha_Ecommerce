const container = document.getElementById("products");

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Store all products
let allProducts = [];

// Update cart count on page load
updateCartCount();

async function fetchProducts() {
  try {
    const response = await fetch(
      "https://techstore-api-8nta.onrender.com/api/products"
    );

    allProducts = await response.json();

    displayProducts(allProducts);
  } catch (error) {
    console.log(error);
  }
}

function displayProducts(products) {
  container.innerHTML = "";

  products.forEach((product) => {
    container.innerHTML += `
      <div class="card">
        <img src="${product.image}" alt="${product.name}">

        <h3
          onclick="viewProduct('${product._id}')"
          style="cursor:pointer"
        >
          ${product.name}
        </h3>

        <p>₹${product.price}</p>

        <button onclick='addToCart(${JSON.stringify(product)})'>
          Add To Cart
        </button>
      </div>
    `;
  });
}

function addToCart(product) {
  cart.push(product);

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  updateCartCount();
}

function updateCartCount() {
  document.getElementById(
    "cart-count"
  ).innerText = `🛒 Cart (${cart.length})`;
}

function goToCart() {
  window.location.href = "cart.html";
}

function viewProduct(id) {
  window.location.href = `product.html?id=${id}`;
}

function logout() {

  localStorage.removeItem("user");

  localStorage.removeItem("cart");

  window.location.href =
    "landing.html";
}

// Search functionality
document
  .getElementById("search")
  .addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();

    const filteredProducts = allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(value)
    );

    displayProducts(filteredProducts);
  });


fetchProducts();
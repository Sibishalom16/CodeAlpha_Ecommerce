const container = document.getElementById("product-details");

const params = new URLSearchParams(
  window.location.search
);

const id = params.get("id");

async function getProduct() {

  try {

    const response = await fetch(
      `https://techstore-api-8nta.onrender.com/api/products/${id}`
    );

    const product = await response.json();

    container.innerHTML = `
<div class="product-page">

  <div class="product-image">
    <img
      src="${product.image}"
      alt="${product.name}"
    >
  </div>

  <div class="product-info">

    <h1>${product.name}</h1>

    <p>
      ${product.description}
    </p>

    <div class="product-price">
      ₹${product.price}
    </div>

    <button
      onclick='addToCart(${JSON.stringify(product)})'
    >
      Add To Cart
    </button>

  </div>

</div>
`;

  } catch (error) {

    console.log(error);

  }
}

function addToCart(product) {

  let cart =
    JSON.parse(
      localStorage.getItem("cart")
    ) || [];

  cart.push(product);

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  updateCartCount();

  document.getElementById(
    "cart-count"
  ).innerText =
    `🛒 Cart (${cart.length})`;
}

function updateCartCount() {

  let cart =
    JSON.parse(
      localStorage.getItem("cart")
    ) || [];

  document.getElementById(
    "cart-count"
  ).innerText =
    `🛒 Cart (${cart.length})`;
}

function goToCart() {

  window.location.href =
    "cart.html";
}

function goHome() {

  window.location.href =
    "index.html";
}

getProduct();
updateCartCount();
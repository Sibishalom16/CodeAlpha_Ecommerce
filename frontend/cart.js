const cartItemsContainer =
  document.getElementById("cart-items");

const totalElement =
  document.getElementById("total");

let cart =
  JSON.parse(
    localStorage.getItem("cart")
  ) || [];

function renderCart() {

  if (cart.length === 0) {

    cartItemsContainer.innerHTML = `
      <div class="empty-cart">

        <h2>
          🛒 Your Cart Is Empty
        </h2>

        <p>
          Looks like you haven't added
          any products yet.
        </p>

        <button
          onclick="continueShopping()"
        >
          Continue Shopping
        </button>

      </div>
    `;

    totalElement.innerText =
      "Total: ₹0";

    return;
  }

  cartItemsContainer.innerHTML = "";

  const groupedCart = {};

  cart.forEach((item) => {

    if (groupedCart[item.name]) {

      groupedCart[item.name]
        .quantity++;

    } else {

      groupedCart[item.name] = {
        ...item,
        quantity: 1,
      };

    }

  });

  let total = 0;

  Object.values(groupedCart)
    .forEach((item) => {

      total +=
        item.price *
        item.quantity;

      cartItemsContainer.innerHTML += `

      <div class="cart-item">

        <img
          src="${item.image}"
          alt="${item.name}"
        >

        <div class="cart-info">

          <h2>
            ${item.name}
          </h2>

          <p>
            ₹${item.price}
          </p>

          <div
            class="quantity-controls"
          >

            <button
              onclick="decreaseQuantity('${item.name}')"
            >
              -
            </button>

            <span>
              ${item.quantity}
            </span>

            <button
              onclick="increaseQuantity('${item.name}')"
            >
              +
            </button>

          </div>

          <button
            onclick="removeProduct('${item.name}')"
          >
            Remove
          </button>

        </div>

      </div>

      `;

    });

  totalElement.innerText =
    `Total: ₹${total}`;

}

function increaseQuantity(
  productName
) {

  const product =
    cart.find(
      (item) =>
        item.name === productName
    );

  if (product) {

    cart.push(product);

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    renderCart();

  }

}

function decreaseQuantity(
  productName
) {

  const index =
    cart.findIndex(
      (item) =>
        item.name === productName
    );

  if (index !== -1) {

    cart.splice(index, 1);

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    renderCart();

  }

}

function removeProduct(
  productName
) {

  cart = cart.filter(
    (item) =>
      item.name !== productName
  );

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  renderCart();

}

function continueShopping() {

  window.location.href =
    "index.html";

}

document
  .getElementById("buy-btn")
  .addEventListener(
    "click",
    () => {

      if (
        cart.length === 0
      ) {

        alert(
          "Cart is empty!"
        );

        return;
      }

      localStorage.removeItem(
        "cart"
      );

      window.location.href =
        "success.html";

    }
  );

renderCart();
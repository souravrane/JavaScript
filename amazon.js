const user = {
  name: "Senjuro",
  active: true,
  cart: [],
  purchases: [],
};

const compose =
  (f, g) =>
  (...args) =>
    f(g(...args));

function purchaseItem(...fns) {
  return fns.reduce(compose);
}

function addItemToCart(user, item) {
  const updateCart = user.cart.concat(item);
  return Object.assign({}, user, { cart: updateCart });
}

function applyTax(user) {
  const { cart } = user;
  const taxRate = 1.3;
  const updatedCart = cart.map((item) => {
    return {
      name: item.name,
      price: item.price * taxRate,
    };
  });
  return Object.assign({}, user, { cart: updatedCart });
}

function buyItem(user) {
  return Object.assign({}, user, { purchases: user.cart });
}

function emptyCart(user) {
  return Object.assign({}, user, { cart: [] });
}

const result = purchaseItem(
  emptyCart,
  buyItem,
  applyTax,
  addItemToCart
)(user, { name: " laptop", price: 200 });

console.log(result);

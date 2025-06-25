
const products = [
  {
    name: "Mobile Legends 86 Diamond",
    price: "Rp 22.000",
    image: "https://www.topupedia.com/assets/img/products/mlbb.png",
    link: "https://www.topupedia.com/id-id/order/MLBB-130?ref=m4rauxd6asy5"
  },
  {
    name: "Free Fire 100 Diamond",
    price: "Rp 21.000",
    image: "https://www.topupedia.com/assets/img/products/freefire.png",
    link: "https://www.topupedia.com/id-id/order/FREEFIRE-140?ref=m4rauxd6asy5"
  },
  {
    name: "PUBG Mobile 60 UC",
    price: "Rp 15.000",
    image: "https://www.topupedia.com/assets/img/products/pubgm.png",
    link: "https://www.topupedia.com/id-id/order/PUBGM-150?ref=m4rauxd6asy5"
  }
];

const container = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");

function renderProducts(filtered = products) {
  container.innerHTML = "";
  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.price}</p>
      <a href="${p.link}" target="_blank">Beli Sekarang</a>
    `;
    container.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const val = searchInput.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(val));
  renderProducts(filtered);
});

renderProducts();

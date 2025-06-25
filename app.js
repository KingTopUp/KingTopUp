
const products = [
  {
    name: "Mobile Legends 86 Diamond",
    price: "Rp 21.000",
    image: "https://www.topupedia.com/assets/img/products/mlbb.png",
    link: "https://www.topupedia.com/id-id/order/MLBB-130?ref=m4rauxd6asy5"
  },
  {
    name: "Free Fire 100 Diamond",
    price: "Rp 19.000",
    image: "https://www.topupedia.com/assets/img/products/freefire.png",
    link: "https://www.topupedia.com/id-id/order/FREEFIRE-140?ref=m4rauxd6asy5"
  },
  {
    name: "PUBG Mobile UC 60",
    price: "Rp 15.000",
    image: "https://www.topupedia.com/assets/img/products/pubgm.png",
    link: "https://www.topupedia.com/id-id/order/PUBGM-150?ref=m4rauxd6asy5"
  },
  {
    name: "Valorant 300 VP",
    price: "Rp 45.000",
    image: "https://www.topupedia.com/assets/img/products/valorant.png",
    link: "https://www.topupedia.com/id-id/order/VALORANT-160?ref=m4rauxd6asy5"
  }
];

function displayProducts(list = products) {
  const container = document.getElementById("product-container");
  container.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>${p.price}</p>
      <a href="${p.link}" target="_blank">Beli Sekarang</a>
    `;
    container.appendChild(card);
  });
}

const input = document.getElementById("search-input");
input.addEventListener("input", () => {
  const keyword = input.value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(keyword)
  );
  displayProducts(filtered);
});

window.addEventListener("DOMContentLoaded", () => displayProducts());

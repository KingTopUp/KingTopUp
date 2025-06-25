// js/app.js

const products = [
  {
    name: "Mobile Legends 100 Diamonds",
    description: "Top up cepat dan aman.",
    price: "Rp 25.000",
    image: "https://www.topupedia.com/assets/img/products/mlbb.png",
    link: "https://www.topupedia.com/id-id/order/MLBB-130?ref=m4rauxd6asy5"
  },
  {
    name: "Free Fire 100 Diamonds",
    description: "Harga murah proses cepat.",
    price: "Rp 22.000",
    image: "https://www.topupedia.com/assets/img/products/freefire.png",
    link: "https://www.topupedia.com/id-id/order/FREEFIRE-140?ref=m4rauxd6asy5"
  },
  {
    name: "PUBG UC 60",
    description: "Top up PUBG Mobile termurah.",
    price: "Rp 15.000",
    image: "https://www.topupedia.com/assets/img/products/pubgm.png",
    link: "https://www.topupedia.com/id-id/order/PUBGM-150?ref=m4rauxd6asy5"
  },
  {
    name: "Valorant Points 300",
    description: "Top up cepat dan resmi.",
    price: "Rp 45.000",
    image: "https://www.topupedia.com/assets/img/products/valorant.png",
    link: "https://www.topupedia.com/id-id/order/VALORANT-160?ref=m4rauxd6asy5"
  }
];

function displayProducts(searchTerm = '') {
  const container = document.getElementById('product-container');
  container.innerHTML = '';

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filtered.length === 0) {
    container.innerHTML = '<p style="text-align:center;">Produk tidak ditemukan.</p>';
    return;
  }

  filtered.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p><strong>${product.price}</strong></p>
      <a href="${product.link}" target="_blank">Beli Sekarang</a>
    `;
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('search-input');
  input.addEventListener('input', e => displayProducts(e.target.value));
  displayProducts();
});

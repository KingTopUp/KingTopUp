const gameProducts = [
  {
    name: "Mobile Legends Diamond 100",
    description: "Diamond resmi untuk Mobile Legends",
    price: "Rp 25.000",
    affiliateLink: "https://www.topupedia.com/id-i?ref=m4rauxd6asy5"
  },
  // … tambahkan produk lainnya
];

// Fungsi untuk menampilkan produk
function displayProducts() {
  const container = document.getElementById("product-container");
  container.innerHTML = "";

  gameProducts.forEach(p => {
    const card = document.createElement("div");
    card.className = "border rounded-lg p-4 bg-white";

    card.innerHTML = `
      <h3 class="font-bold">${p.name}</h3>
      <p>${p.description}</p>
      <p class="font-semibold text-indigo-800">${p.price}</p>
      <a href="${p.affiliateLink}" target="_blank" class="mt-2 inline-block bg-indigo-600 text-white px-4 py-2 rounded">Beli Sekarang</a>
    `;
    container.appendChild(card);
  });
}

// Eksekusi saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", displayProducts);

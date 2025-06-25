
document.getElementById("orderForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const data = {
    game: this.game.value,
    product: this.product.value,
    id: this.id.value,
    server: this.server.value,
    payment: this.payment.value,
    wa: this.wa.value
  };
  console.log("Order disimpan:", data);
  document.getElementById("status").innerText = "✅ Pesanan kamu sedang diproses, admin akan segera mengirim top up!";
  this.reset();
});

function sendWhatsApp() {
    var itemName = document.getElementById("itemName").value;
    var quantity = document.getElementById("quantity").value;
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var payment = document.getElementById("payment").value;
  
    // Validasi input
    if (itemName === "" || quantity === "" || name === "" || address === "" || payment === "") {
        alert("Mohon lengkapi semua input sebelum melanjutkan.");
        return;
    }
  
    // Kirim pesan WhatsApp
    var message = "Barang: " + itemName + "\nJumlah: " + quantity + "\nNama: " + name + "\nAlamat: " + address + "\nPembayaran: " + payment;
    var whatsappUrl = "https://api.whatsapp.com/send?phone=6289601991505&text=" + encodeURIComponent(message);
    window.open(whatsappUrl);
  
    // Tutup modal setelah mengirim pesan WhatsApp
   
}

function sendWhatsApp() {
    var itemName = document.getElementById("itemName1").value;
    var quantity = document.getElementById("quantity1").value;
    var name = document.getElementById("name1").value;
    var address = document.getElementById("address1").value;
    var payment = document.getElementById("payment1").value;
  
    // Validasi input
    if (itemName === "" || quantity === "" || name === "" || address === "" || payment === "") {
        alert("Mohon lengkapi semua input sebelum melanjutkan.");
        return;
    }
  
    // Kirim pesan WhatsApp
    var message = "Barang: " + itemName + "\nJumlah: " + quantity + "\nNama: " + name + "\nAlamat: " + address + "\nPembayaran: " + payment;
    var whatsappUrl = "https://api.whatsapp.com/send?phone=6289601991505&text=" + encodeURIComponent(message);
    window.open(whatsappUrl);
  
    // Tutup modal setelah mengirim pesan WhatsApp
   
}

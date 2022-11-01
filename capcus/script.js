const bKopi = document.getElementById("b-kopi");
const bMinuman = document.getElementById("b-minuman");
const bMakanan = document.getElementById("b-makanan");

const kopi = document.getElementById("kopi");
const minuman = document.getElementById("minuman");
const makanan = document.getElementById("makanan");

const container = document.querySelector(".container");
const bayar = document.getElementById("bayar");
const pembayaran = document.getElementById("pembayaran");
const buyButton = document.querySelector(".buy-button");
const bOrder = document.querySelectorAll(".b-order");
const jumlah = document.querySelectorAll(".in-jumlah");

const hargas = document.querySelectorAll(".harga");
const imgs = document.querySelectorAll(".img");

minuman.classList.add("hide");
makanan.classList.add("hide");

let id = -1;
let cek = true;

bKopi.addEventListener("click", () => {
    minuman.classList.add("hide");
    makanan.classList.add("hide");
    kopi.classList.remove("hide");

    jumlah[1].value = "";
    jumlah[2].value = "";
});

bMinuman.addEventListener("click", () => {
    kopi.classList.add("hide");
    makanan.classList.add("hide");
    minuman.classList.remove("hide");

    jumlah[0].value = "";
    jumlah[2].value = "";
});

bMakanan.addEventListener("click", () => {
    kopi.classList.add("hide");
    minuman.classList.add("hide");
    makanan.classList.remove("hide");

    jumlah[0].value = "";
    jumlah[1].value = "";
});

buyButton.addEventListener("click", () => {
    bayar.style.display = "none";
    container.style.display = "flex";
});

bOrder.forEach((order) => {
    order.addEventListener("click", () => {
        let total = 0;

        const harga = parseInt(hargas[id].value);

        for (let i = 0; i < jumlah.length; i++) {
            if (jumlah[i].value != "") {
                total += parseInt(jumlah[i].value);
            }
        }

        pembayaran.innerHTML = total * harga;

        for (let i = 0; i < jumlah.length; i++) {
            jumlah[i].value = "";
        }

        bayar.style.display = "block";
        container.style.display = "none";
    });
});

imgs.forEach((img) => {
    img.addEventListener("click", () => {
        id = img.id;
        imgs.forEach((image) => {
            if (image.id == id) {
                image.classList.add("active");
            } else {
                image.classList.remove("active");
            }
        });
        jumlah.forEach((jumlah) => {
            jumlah.value = "";
        });
    });
});

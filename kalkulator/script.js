const operasi = document.getElementById("operasi");
const hasil = document.getElementById("hasil");
const cek = document.getElementById("cek");
const tes = document.getElementById("tes");

const operan = ["-", "+", "*", "/"];

const acak = () => {
    let angka = Math.floor(Math.random() * 10);
    angka = angka + 1;
    return angka;
};

const banyak = () => {
    let angka = Math.floor(Math.random() * 2);
    angka = angka + 2;
    return angka;
};

const operasiRandom = () => {
    let soal = "";
    const banyakOperasi = banyak();
    for (let i = 1; i <= banyakOperasi; i++) {
        let angka = acak();
        let operator = operan[Math.floor(Math.random() * operan.length)];
        if (i == banyakOperasi) {
            soal = soal + angka;
        } else {
            soal = soal + angka + operator;
        }
    }
    return soal;
};

document.addEventListener("DOMContentLoaded", () => {
    hasil.value = "";
    const soal = operasiRandom();
    operasi.innerHTML = soal;
    let jawab = eval(soal);
    cek.addEventListener("click", () => {
        if (jawab == hasil.value) {
            hasil.classList.add("benar");
        } else {
            hasil.classList.add("salah");
        }
    });
});

tes.addEventListener("click", () => {
    location.reload();
});

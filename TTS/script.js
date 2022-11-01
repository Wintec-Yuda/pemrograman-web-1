const jawaban = ["singapura", "jepang", "prancis", "belanda", "indonesia"];

const clue = [
    ["Terkaya di Asia Tenggara", "Mayoritas China", "Pejalan kaki tercepat didunia", "Budaya mengantri", "Patung Merlion"],
    ["Terbersih di Asia Timur", "Budaya Mengantri", "Samurai", "Negeri Matahari Terbit", "Pohon Sakura"],
    ["Romantis didunia Duina", "Makanan Kroisan", "Pembuat minuman anggur terbaik didunia", "Juara piala dunia 2018", "Menara Eiffel"],
    ["Bunga tulip", "Tidak ada gunung", "Negara Keju", "Negara Kincir angin", "Ibu kota Amsterdam"],
    ["Terluas di Asia Tenggara", "Hutan Bakau terbesar didunia", "Negara yang dilintasi garis khatulistiwa", "Suku bangsa terbanyak didunia", "Calon tuan rumah piala dunia U-20 2023"],
];

const iScore = document.querySelector(".i-score");
const input = document.querySelector(".input");
const list = document.querySelector(".list");
const button = document.querySelector(".button");
const next = document.querySelector(".b-next");
const csk = document.querySelector(".sk");
const container = document.querySelector(".container");
const nilai = document.querySelector(".nilai");
const bNext = document.querySelector(".b-next")

let count = 1;
let score = 0;
let fase = 0;
let sk = 0;

iScore.value = score;

for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    li.innerHTML = `${clue[fase][i]}`;
    list.appendChild(li);
}

button.addEventListener("click", () => {
    if (count < 5) {
        count++;
    }

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    for (let i = 0; i < count; i++) {
        const li = document.createElement("li");
        li.innerHTML = `${clue[fase][i]}`;
        list.appendChild(li);
    }
});

input.addEventListener("keyup", (e) => {
    if (e.target.value == jawaban[fase]) {
        score = (120 - count * 20) / jawaban.length;
        input.style.color = "#00ff00";
        iScore.value = score;
        sk += score;
    } else {
        input.style.color = "#ff0000";
    }
});

next.addEventListener("click", () => {
    if (fase == jawaban.length - 2) {
        bNext.innerHTML = "SELESAI";
    }

    if (fase >= 4) {
        container.style.display = "none";
        nilai.style.width = "100%";
        nilai.style.height = "100vh";
        nilai.style.backgroundColor = "#051367";
        nilai.style.color = "white";
        nilai.innerHTML = `<h1>SCORE AKHIR : ${sk}</h1>`;
    }

    count = 1;
    score = 0;
    iScore.value = score;
    input.value = "";
    fase++;

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    for (let i = 0; i < count; i++) {
        const li = document.createElement("li");
        li.innerHTML = `${clue[fase][i]}`;
        list.appendChild(li);
    }
});

const kalkulasi = document.getElementById("kalkulasi");
const hargaBeli = document.getElementsByName("hargaBeli")[0];
const beratBeli = document.getElementsByName("beratBeli")[0];
const satuanBeratBeli = document.getElementsByName("satuanBeratBeli");
const hargaJual = document.getElementsByName("hargaJual")[0];
const keuntungan = document.getElementsByName("keuntungan")[0];
const satuanBerat = document.getElementsByName("satuanBerat");
const hasil = document.querySelector(".container-hasil");
let string = "";

const submit = (e) => {
    e.preventDefault();
    let vHargaBeli = parseInt(hargaBeli.value);
    let vBeratBeli = parseInt(beratBeli.value);
    let vHargaJual = parseInt(hargaJual.value);
    let vKeuntungan = parseInt(keuntungan.value);
    let vSatuanBeratBeli = "";
    let vSatuanBerat = "";

    for (let i = 0; i < satuanBeratBeli.length; i++) {
        if (satuanBeratBeli[i].checked) {
            vSatuanBeratBeli = satuanBeratBeli[i].value;
        }
    }

    for (let i = 0; i < satuanBerat.length; i++) {
        if (satuanBerat[i].checked) {
            vSatuanBerat = satuanBerat[i].value;
        }
    }

    let rBeratBeli = 0;

    switch (vSatuanBeratBeli) {
        case "gram":
            rBeratBeli = vBeratBeli;
            break;
        case "kilogram":
            rBeratBeli = vBeratBeli * 1000;
            break;
        case "kuintal":
            rBeratBeli = vBeratBeli * 100000;
            break;
        case "ton":
            rBeratBeli = vBeratBeli * 1000000;
    }

    let banyakJual = (vHargaBeli + vKeuntungan) / vHargaJual;
    let beratJual = rBeratBeli / banyakJual;

    let rBeratJual = 0;

    switch (vSatuanBerat) {
        case "gram":
            rBeratJual = beratJual;
            break;
        case "kilogram":
            rBeratJual = beratJual / 1000;
            break;
        case "kuintal":
            rBeratJual = beratJual / 100000;
            break;
        case "ton":
            rBeratJual = beratJual / 1000000;
    }

    string = `<div>
                <p class="pHasil">Hasil Kalkulasi</p>
            </div>
            <div class="hasil">
                <p class="pHasil">banyak : ${banyakJual} biji</p>
                <p class="pHasil">berat / biji : ${rBeratJual} ${vSatuanBerat}</p>
            </div>`;
    hasil.innerHTML = string;
};

kalkulasi.addEventListener("submit", submit);

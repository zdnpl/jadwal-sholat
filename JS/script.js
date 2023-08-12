// realtime tanggal
const getDate = new Date();
const getYear = getDate.getFullYear();
const getMonth = getDate.getMonth() + 1;
const getDay = getDate.getDate();

function bulan() {
  if (getMonth < 10) {
    bulan = `0${getMonth}`;
  } else {
    bulan = getMonth;
  }
  return bulan;
}

function hari() {
  if (getDay < 10) {
    hari = `0${getDay}`;
  } else {
    hari = getDay;
  }
  return hari;
}

const penanggalan = `${getYear}-${bulan()}-${hari()}`;

// get api

function getJadwalSholat() {
  fetch("https://api.banghasan.com/sholat/format/json/jadwal/kota/703/tanggal/" + penanggalan)
    .then((response) => response.json())
    .then((data) => {
      const jadwal = data.jadwal.data;
      document.querySelector(".imsak").textContent = jadwal.imsak;
      document.querySelector(".subuh").textContent = jadwal.subuh;
      document.querySelector(".terbit").textContent = jadwal.terbit;
      document.querySelector(".dzuhur").textContent = jadwal.dzuhur;
      document.querySelector(".ashar").textContent = jadwal.ashar;
      document.querySelector(".maghrib").textContent = jadwal.maghrib;
      document.querySelector(".isya").textContent = jadwal.isya;
      document.querySelector(".tanggal").textContent = jadwal.tanggal;
    });
}

getJadwalSholat();

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById("time").textContent = timeString;

  // imsak
  if (timeString >= "04:34") {
    document.querySelector(".isyaBG").style.background = "#ffff";
    document.querySelector(".imsakBG").style.background = "#f2ee9d";
  }
  // subuh
  if (timeString >= "04:44") {
    document.querySelector(".imsakBG").style.background = "#fff";
    document.querySelector(".subuhBG").style.background = "#f2ee9d";
  }
  // terbit
  if (timeString >= "05:59") {
    document.querySelector(".subuhBG").style.background = "#fff";
    document.querySelector(".terbitBG").style.background = "#f2ee9d";
  }
  // dzuhur
  if (timeString >= "12:01") {
    document.querySelector(".terbitBG").style.background = "#fff";
    document.querySelector(".dzuhurBG").style.background = "#f2ee9d";
  }
  // ashar
  if (timeString >= "15:21") {
    document.querySelector(".dzuhurBG").style.background = "#fff";
    document.querySelector(".asharBG").style.background = "#f2ee9d";
  }
  // maghrib
  if (timeString >= "17:57") {
    document.querySelector(".asharBG").style.background = "#fff";
    document.querySelector(".maghribBG").style.background = "#f2ee9d";
  }
  // isya
  if (timeString >= "19:08") {
    document.querySelector(".maghribBG").style.background = "#fff";
    document.querySelector(".isyaBG").style.background = "#f2ee9d";
  }
}

// Update jam setiap detik
setInterval(updateClock, 1000);

// Panggil fungsi pertama kali untuk menghindari tampilan kosong awal
updateClock();

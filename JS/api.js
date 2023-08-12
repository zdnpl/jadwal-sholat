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

const timeDisplay = document.getElementById("time");
const day = document.getElementById("day");
const now = new Date();
const hour = now.getHours();

function refreshTime() {
  const dateString = new Date().toLocaleString("br-BR", {
    timeZone: "America/Sao_Paulo",
  });
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);

if ((hour >= 6) & (hour <= 12)) {
  day.innerHTML = "Bom Dia !";
} else if ((hour >= 12) & (hour <= 18)) {
  day.innerHTML = "Boa Tarde !";
} else if ((hour >= 19) & (hour <= 24)) {
  day.innerHTML = "Boa Noite !";
} else {
  day.innerHTML = "Boa Madrugada !";
}

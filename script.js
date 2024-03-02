// taking input via prompt as return on page as greeting/welcome
let greetingWelcome = prompt("Enter Your Name");
document.getElementById("greetingWelcome").innerText =
  "Welcome " + greetingWelcome;

  // declaring function for date time and day
function updateTime() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let month = currentTime.getMonth() + 1;
  let day = currentTime.getDate();
  let year = currentTime.getFullYear();
  let dayOfWeek = currentTime.toLocaleDateString("en-US", { weekday: "long" }); // Getting day of the week

  // intializing variable
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;
  month = (month < 10 ? "0" : "") + month;
  day = (day < 10 ? "0" : "") + day;

  // Building the string in desired format
  let dateString = day + "/" + month + "/" + year;
  let timeString = hours + ":" + minutes + ":" + seconds;

  // Displaying the date, day and time
  document.getElementById("date").innerHTML = dateString;
  document.getElementById("day").innerHTML = dayOfWeek;
  document.getElementById("time").innerHTML = timeString;
}

// Update time every second
setInterval(updateTime, 1000);

// check input and give out msg
document.getElementById("check").addEventListener("click", function (event) {
  event.preventDefault(); // Form submission rokna

  let temperature = parseInt(document.getElementById("tem-inp").value);
  let output = document.getElementById("output");

  if (temperature < -50 || temperature > 50 || isNaN(temperature)) {
    output.innerHTML =
      "<p style='padding: 10px;'>Invalid temperature. Please enter a number between -50 and 50.</p>";
  } else if (temperature < 0) {
    output.innerHTML =
      "<p style='padding: 10px;'>Stay Indoors, It's Freezing!</p>";
  } else if (temperature >= 0 && temperature <= 10) {
    output.innerHTML = "<p style='padding: 10px;'>Stay Warm, It's Cold!</p>";
  } else if (temperature >= 11 && temperature <= 25) {
    output.innerHTML = "<p style='padding: 10px;'>It's Chilly Outside!</p>";
  } else if (temperature >= 26 && temperature <= 35) {
    output.innerHTML = "<p style='padding: 10px;'>It's Hot Outside!</p>";
  } else {
    output.innerHTML = "<p style='padding: 10px;'>It's scorching hot!</p>";
  }
});

// check input and give out msg for emojis
document.getElementById("check").addEventListener("click", function (event) {
  event.preventDefault(); // Form submission rokna

  let temperature = parseInt(document.getElementById("tem-inp").value);
  let output = document.getElementById("emoji");

  if (temperature < -50 || temperature > 50 || isNaN(temperature)) {
    emoji.innerHTML = "<p style='padding: 10px; color:'>&#10060;</p>";
  } else if (temperature < 0) {
    emoji.innerHTML = "<p style='padding: 10px;'>&#129398; 🧊 👩🏻‍🦳 </p>";
  } else if (temperature >= 0 && temperature <= 10) {
    emoji.innerHTML = "<p style='padding: 10px;'>&#x26C4; 🏰  🌬️</p>";
  } else if (temperature >= 11 && temperature <= 25) {
    emoji.innerHTML = "<p style='padding: 10px;'>⛰️ ❄️</p>";
  } else if (temperature >= 26 && temperature <= 35) {
    emoji.innerHTML = "<p style='padding: 10px;'>☀️ 🌡️</p>";
  } else {
    emoji.innerHTML = "<p style='padding: 10px;'>🔥  🌞</p>";
  }
});

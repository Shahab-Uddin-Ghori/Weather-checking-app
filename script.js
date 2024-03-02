function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var month = currentTime.getMonth() + 1;
    var day = currentTime.getDate();
    var year = currentTime.getFullYear();
    var dayOfWeek = currentTime.toLocaleDateString('en-US', { weekday: 'long' }); // Getting day of the week
    
    // Adding leading zeros if necessary
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;

    // Building the string in desired format
    var dateString = day + "/" + month + "/" + year;
    var timeString = hours + ":" + minutes + ":" + seconds;
    
    // Displaying the date, day and time
    document.getElementById('date').innerHTML = dateString;
    document.getElementById('day').innerHTML = dayOfWeek;
    document.getElementById('time').innerHTML = timeString;
  }

  // Update time every second
  setInterval(updateTime, 1000);
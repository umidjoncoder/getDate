function getTime() {
    const now = new Date();
    const hours =  now.getHours();
    const minute = now.getMinutes();
    const seconds = now.getSeconds();
    const timeString = `${hours}:${minute}:${seconds}`
    return timeString;
}

function updateClock() {
    const clock = document.getElementById('clock');
    const timeString = getTime();
    clock.innerHTML = timeString;
}
setInterval(updateClock, 1000)

function getCurrentDate() {
    const now = new Date();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-UZ', dateOptions);
    return dateString;
  }
  function updateDate() {
    const dateElement = document.getElementById('date');
    const dateString = getCurrentDate();
    dateElement.innerHTML = dateString;
  }
  
  updateDate();
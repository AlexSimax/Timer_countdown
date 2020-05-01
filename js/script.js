window.addEventListener("DOMContentLoaded", function () {
  // чтобы контент загрузился на странице
  "use strict";

  // Timer

  let deadline = "2020-05-03";
  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()), // ms
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor(t / (1000 * 60 * 60));
    // hours = Math.floor((t/(1000*60*60));  - если надо целые часы
    // days = Math.floor((t/(1000*60*60*24)); - целые дни
    return {
      totals: t,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }
  function setClock(id, endtime) {
    // id of html-block
    let timer = document.getElementById(id),
      hours = timer.querySelector(".hours"),
      minutes = timer.querySelector(".minutes"),
      seconds = timer.querySelector(".seconds"),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaining(endtime);
      hours.textContent = t.hours;
      t.minutes >= 10
        ? (minutes.textContent = t.minutes)
        : (minutes.textContent = "0" + t.minutes);
      t.seconds >= 10
        ? (seconds.textContent = t.seconds)
        : (seconds.textContent = "0" + t.seconds);

      if (t.totals <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setClock("timer", deadline);
});

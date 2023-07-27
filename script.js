const day = document.querySelector(".date-day");
const date = document.querySelector(".date");
const month = document.querySelector(".date-month");
const year = document.querySelector(".date-year");
const digitalClock = document.querySelector(".digital-clock");
const arrowSecond = document.querySelector(".clock-seconds__arrow");
const arrowMinutes = document.querySelector(".clock-minutes__arrow");
const arrowHours = document.querySelector(".clock-hours__arrow");

const arrDay = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П`ятниця",
  "Субота",
];
const namesOfMonth = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];
setInterval(() => {
  const currentTime = new Date();
  const currentDay = arrDay[currentTime.getDay()];
  const currentDate = currentTime.getDate();
  const currentMonth = namesOfMonth[currentTime.getMonth()];
  const currentYear = currentTime.getFullYear();
  const currentHour = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();
  const currentSeconds = currentTime.getSeconds();

  const changeSeconds = (360 / 60) * currentSeconds;
  const changeMinutes = (360 / 60) * currentMinutes;
  const changeHour =
    (360 / 12) * currentHour + (360 / 12 / 60) * currentMinutes;
  const formatDate = `${currentHour.toString().padStart(2, 0)}:${currentMinutes
    .toString()
    .padStart(2, 0)}:${currentSeconds.toString().padStart(2, 0)}`;

  digitalClock.textContent = `Поточний час : ${formatDate}`;

  day.textContent = currentDay;
  date.textContent = currentDate;
  month.textContent = currentMonth;
  year.textContent = currentYear;

  arrowSecond.style.transform = `rotate(${changeSeconds}deg)`;
  arrowMinutes.style.transform = `rotate(${changeMinutes}deg)`;
  arrowHours.style.transform = `rotate(${changeHour}deg)`;
}, 1000);
console.log(year);

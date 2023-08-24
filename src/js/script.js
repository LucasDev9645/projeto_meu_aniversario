const eventDate = new Date("nov 14, 2023 19:30:00");
const eventTimeStamp = eventDate.getTime();

const hours = setInterval(function () {
  const now = new Date();
  const currentTimestamp = now.getTime();
  const distanceEvent = eventTimeStamp - currentTimestamp;

  const msDay = 1000 * 60 * 60 * 24;
  const msHours = 1000 * 60 * 60;
  const msMinutes = 1000 * 60;

  const eventDay = Math.floor(distanceEvent / msDay);
  const eventHours = Math.floor((distanceEvent % msDay) / msHours);
  const eventMinutes = Math.floor((distanceEvent % msHours) / msMinutes);
  const eventSeconds = Math.floor((distanceEvent % msMinutes) / 1000);

  document.querySelector("#daysCounter").innerHTML = `${eventDay} D`;
  document.querySelector("#hoursCounter").innerHTML = `${eventHours} H`;
  document.querySelector("#minutesCounter").innerHTML = `${eventMinutes} M`;
  document.querySelector("#secondsCounter").innerHTML = `${eventSeconds} S`;

  if (distanceEvent < 0) {
    clearInterval(hours);
    document.querySelector("#dayCame").innerHTML = "Hoje é meu Aniversário";
  }
}, 1000);

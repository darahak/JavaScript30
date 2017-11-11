function getAngle(value, base) {
  return value / base * 360 + 90;
}

function rotate(element, angle) {
  if (element) {
    element.style.transform = `rotate(${angle}deg)`;
  } else {
    console.error('Invalid element: cannot apply rotation transform');
  }

  return element;
}

function setSeconds(now) {
  const secondHand = document.querySelector('.second-hand');
  const seconds = now.getSeconds();

  rotate(secondHand, getAngle(seconds, 60));

  return seconds;
}

function setMinutes(now) {
  const minHand = document.querySelector('.min-hand');
  const minutes = now.getMinutes();

  rotate(minHand, getAngle(minutes, 60));

  return minutes;
}

function setHours(now) {
  const hourHand = document.querySelector('.hour-hand');
  const hours = now.getHours();

  rotate(hourHand, getAngle(hours % 12, 12));

  return hours;
}

function setDate() {
  const now = new Date();
  console.log(now);

  setSeconds(now);
  setMinutes(now);
  setHours(now);
}

setInterval(setDate, 1000);

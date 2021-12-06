const dayNumber = [6, 0, 1, 2, 3, 4, 5];
const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds*milliseconds
const refDate = new Date(2021, 0, 4);
const today = new Date();
const offset = dayNumber[today.getDay()];
// const dayOffset = today.getDay() + 1;
const diffWeeks = () => {
  const dayDiff = Math.round(Math.abs((refDate - today) / oneDay));
  const firstDay = dayDiff - offset;
  const weekDiff = Math.floor(firstDay / 7);

  return weekDiff;
};

const thisWeekend = diffWeeks() % 2 ? 'dad' : 'mum';
const nextWeekend = diffWeeks() % 2 ? 'mum' : 'dad';
const currentWeekContainer = document.getElementById('currentWeek');
const nextWeekContainer = document.getElementById('nextWeek');

currentWeekContainer.innerHTML = document.getElementById(thisWeekend).innerHTML;
nextWeekContainer.innerHTML = document.getElementById(nextWeekend).innerHTML;

const todayDeck = currentWeekContainer.querySelectorAll('.deck')[offset];

todayDeck.classList.add('today');

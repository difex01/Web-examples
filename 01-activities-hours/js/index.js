const URI = 'https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json';
const CARD_LABEL_CLASS = 'activity-card__p';
const BUTTON_CLASS = 'options-list__option';
const BUTTON_ACTIVE_CLASS = 'options-list__option--active';

const DATE_TYPES = {
  DAILY: 'daily',
  WEEKLY: 'weekly',
  MONTHLY: 'monthly',
}

let DATE_TYPE_LABEL = {
  daily: 'day',
  weekly: 'week',
  monthly: 'month'
}

let currentDateType = DATE_TYPES.MONTHLY;

function getData(dateType) {
  return fetch(URI)
  .then((res) => res.json())
  .then((res) => renderData(res, dateType))
}

function renderData(data, dateType) {
  data.forEach(item => {
    let id = item.title.toLowerCase().replace(' ', '-');

    let card = document.getElementById(id);
    let hours = card.getElementsByClassName(CARD_LABEL_CLASS)[1];
    let previous = card.getElementsByClassName(CARD_LABEL_CLASS)[2];

    let dateValues = item.timeframes[dateType];
    hours.innerText = `${dateValues.current}hrs`;
    previous.innerText = `Last ${DATE_TYPE_LABEL[dateType]} - ${dateValues.previous}hrs`;
  });

  changeButtonsState(dateType);
}

function handleClick(e) {
  const id = e.target.id;
  const dateType = id.replace('btn-', '')
  if (dateType === currentDateType) return;
  currentDateType = dateType;
  getData(dateType);
}

function initButtons() {
  const buttons = document.getElementsByClassName(BUTTON_CLASS);
  Array.from(buttons).forEach(button => {
    button.addEventListener('click', handleClick);
  });
}

function changeButtonsState(selectedDateType) {
  const buttons = document.getElementsByClassName(BUTTON_CLASS);
  Array.from(buttons).forEach(button => {
    const id = button.id;
    const dateType = id.replace('btn-', '')
    dateType === selectedDateType
      ? button.classList.add(BUTTON_ACTIVE_CLASS)
      : button.classList.remove(BUTTON_ACTIVE_CLASS);
  });
}

window.onload = function() {
  getData(currentDateType);
  initButtons();  
}

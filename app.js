import { fetchTimeZones,fetchCurrentTime } from "./apiClient.js";
import {getDateFromDate} from "./date.js";

const modal = document.getElementById('tz-modal');
const selectTZButton = document.getElementById('select-tz');
const timeZoneSelection = document.getElementById('selected-time-zone');
const selectedTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Europe/Istanbul';

selectTZButton.innerHTML = selectedTimeZone;

let intervalID = null;

document.querySelector('[data-close-modal]').addEventListener('click', () => {
  modal.close();
});

fetchTimeZones()
.then( (timeZones) => {
  updateSelectionValues(timeZones)
});

fetchCurrentTime(selectedTimeZone).then(currentTime => updateCurrentTimeUI(currentTime));

selectTZButton.innerText = selectedTimeZone;
selectTZButton.addEventListener('click', () => {
  modal.showModal();
});

timeZoneSelection.addEventListener('change', () => {
  fetchCurrentTime(timeZoneSelection.value).then(currentTime => {
    if(intervalID != null) {
      clearInterval(intervalID);
    } 
    updateCurrentTimeUI(currentTime);
  }) 
  selectTZButton.innerText = timeZoneSelection.value;
});

function updateSelectionValues(timeZones) {
  timeZones.forEach((timeZone) => {
    const option = document.createElement('option');
    option.innerText = timeZone;

    timeZoneSelection.appendChild(option);
  });
  timeZoneSelection.value = selectedTimeZone;
}

function updateCurrentTimeUI(currentTime)  {
  const timeHeader = document.getElementById('time-header');
  const timeString = currentTime.datetime.slice(11,19);
  timeHeader.innerText = timeString;

  const date = new Date(currentTime.datetime);

  document.getElementById('current-date').innerText = getDateFromDate(date);

  let [hours, minutes, seconds] = timeString.split(':').map(Number);

  intervalID = setInterval(() => {
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;

      if (minutes === 60) {
        minutes = 0;
        hours++;

        if (hours === 24) {
          hours = 0;
        }
      }
    }

    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    timeHeader.innerText = formattedTime;
  }, 1000);

}



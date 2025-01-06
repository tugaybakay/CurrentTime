export function getDateFromDate(date) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthsOfYear = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  const day = daysOfWeek[date.getDay()];
  const month = monthsOfYear[date.getMonth()];
  const year = date.getFullYear();
  const dayOfMonth = date.getDate();

  const dateString = day + ", " + dayOfMonth + " " + month + " " + year;
  return dateString;
}

/*
export function getTime(date) {

  const hours = date.getHours().toString().padStart(2,'0');
  const minutes = date.getMinutes().toString().padStart(2,'0');
  const seconds = date.getSeconds().toString().padStart(2,'0');
  return hours + ':' + minutes + ':' + seconds;
}
*/
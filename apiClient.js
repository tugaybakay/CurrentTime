export function fetchTimeZones() {
  const baseURL = "http://worldtimeapi.org/api/timezone";
  return fetch(baseURL)
  .then(response => response.json())

}

export function fetchCurrentTime(timeZone) {
  const baseURL = "http://worldtimeapi.org/api/timezone/";
  return fetch(baseURL + timeZone)
  .then(response => response.json());
}


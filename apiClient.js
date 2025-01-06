export function fetchTimeZones() {
  const baseURL = "https://worldtimeapi.org/api/timezone";
  return fetch(baseURL)
  .then(response => response.json())

}

export function fetchCurrentTime(timeZone) {
  const baseURL = "https://worldtimeapi.org/api/timezone/";
  return fetch(baseURL + timeZone)
  .then(response => response.json());
}


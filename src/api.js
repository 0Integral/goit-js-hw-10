export const fetchCountries = countryName => {
  return fetch(
    `https://restcountries.com/v2/name/${countryName}?fields=name,capital,population,flags,languages`
  ).then(response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  });
};

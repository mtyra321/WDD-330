const url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
import { getJSON, getLocation } from 'utilities.js';

// function convertToJson(response) {
//     if (response.ok == true) {
//         return response.json();
//     } else {
//         throw new Error(response.statusText);
//     }
// }

// async function getJSON(url) {
//     let pokemonData = await fetch(url).then(convertToJson);
//     let pokemon = pokemonData.pokemon;
// }





getPokemonAsync(url);
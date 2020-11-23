export const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};

function convertToJson(response) {
    if (response.ok == true) {
        return response.json();
    } else {
        throw new Error(response.statusText);
    }
}

export async function getJSON(url) {
    let pokemonData = await fetch(url).then(convertToJson);
    let pokemon = pokemonData.pokemon;
}
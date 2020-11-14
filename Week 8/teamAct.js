let url = "https://pokeapi.co/api/v2/type/";

function convertToJson(response) {
    if (response.ok == true) {
        return response.json();
    } else {
        throw new Error(response.statusText);
    }
}

async function getPokemonAsync(url) {
    let pokemonData = await fetch(url).then(convertToJson);
    let pokemon = pokemonData.pokemon;
    displayPokemon(pokemon);
}
document.getElementById("getButt").addEventListener('click', constructUrl);

function constructUrl() {
    let type = document.getElementById("type").value;
    url += type;
    getPokemonAsync(url);
}

function displayPokemon(list) {
    // console.log(list);
    const listElement = document.getElementById("theList");

    const newArray = list.map((item) => {
        return `<li data-url = "${item.pokemon.url}">${item.pokemon.name}</li>`;
    });
    listElement.innerHTML = newArray.join("");
    //   console.log(newArray);

}

async function pokemonClicked(event) {
    console.log(event.target.dataset.url);
    const details = await fetch(event.target.dataset.url).then(convertToJson);
    console.log(details);
    //   console.log(currentTarget);
    displayDetails(details);
}

function displayDetails(details) {
    let section = document.getElementById("details");
    document.getElementById("theList").style.transform = 'translatex(-2700px)';
    section.style.transform = 'translatey(-500px)';
    // section.style.transform = 'translatex(500px)';

    let image = document.createElement('img');


    image.src = details.sprites.front_default;
    console.log(image.src);
    section.appendChild(image);
    //    section.innerHTML = image.innerHTML;
    let name = details.name;
    let type1 = details.types[0].type.name;
    section.innerHTML += name + " " + type1;

    if (details.types[1] != null) {
        let type2 = details.types[1].type.name;
        section.innerHTML += " " + type2;
    }


    section.addEventListener('click', transition);

}

function transition() {
    document.getElementById("details").classList.toggle("thesection");
    document.getElementById("theList").style.transform = 'translatex(0px)';
    document.getElementById("details").innerHTML = '';
    document.getElementById("details").style.transform = 'translatey(0px)';
}



//getPokemonAsync(url);
document.getElementById("theList").addEventListener('click', pokemonClicked);
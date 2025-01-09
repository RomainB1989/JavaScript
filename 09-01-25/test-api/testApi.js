const apiDiv = document.querySelector('.apiContainer');
const apiDiv2 = document.querySelector('.apiContainer2');

//de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable.
console.log(apiDiv);
console.log(apiDiv2);

const contactApi =  async () => {
    //Data va récup Toutes les données de l'api
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=43.6043&longitude=1.4437&hourly=temperature_2m');
    console.log(response);
    console.log(response.ok);
    console.log(response.status);
    //Plutôt que de Travailler sur la réponse, on va la transformé en objet JS 
    const dataTransformed = await response.json();
    console.log(dataTransformed);
    apiDiv.innerText = 'Coordonnée Gps de Toulouse :'+'\n'+'Latitude : '+dataTransformed.latitude+'\n'+'Longitude : '+dataTransformed.longitude + '\nElevation : '+ dataTransformed.elevation +'\nA Midi il fera ' + dataTransformed.hourly.temperature_2m[12] + dataTransformed.hourly_units.temperature_2m +'\n';
};

contactApi();

const contactApiSecure =  async () => {
    const rawData = await fetch('https://tyradex.vercel.app/api/v1/gen/9');
    console.log(rawData);
    
    // Vérification du statut de la réponse
    if (!rawData.ok || rawData.status !== 200) { // Vérification du statut 200
        console.error("Erreur lors de la récupération des données : ", rawData.statusText);
        return; // Sortir de la fonction si la réponse n'est pas OK
    }

    const transformedData = await rawData.json();
    console.log(transformedData);
    const tabPokemon = Array.from(transformedData);

    tabPokemon.forEach(function(Pokemon, index){
        // Creation Elements
        const newPokemon = document.createElement("div");
        const imgPokemon = document.createElement("img");
        const pokemonName = document.createElement("p");
        const pokemonType = document.createElement("p");
        const pokemonWeight = document.createElement("p");
        const pokemonSize = document.createElement("p");
        const buttonLink = document.createElement("button");
        
        const nbRow = index / 7 + 1;
        const nbCol = index % 7;

        // Paramétrage style des Elements
        newPokemon.style.width = "200px";
        newPokemon.style.height = "auto";
        newPokemon.style.margin = "10px 0px";
        newPokemon.style.padding = "4px 4px";
        newPokemon.style.backgroundColor = "whitesmoke";
        newPokemon.style.border = "solid";
        newPokemon.style.borderColor = "red";
        newPokemon.style.borderWidth = "4px";
        newPokemon.style.borderRadius = "10px";
        newPokemon.style.gridArea = `${nbRow} / ${nbCol} / ${nbRow + 1} / ${nbCol + 1}`;
        newPokemon.style.display = "flex";
        newPokemon.style.flexDirection = "column";
        newPokemon.style.justifyContent = "space-evenly";

        imgPokemon.style.margin = "auto";   
        imgPokemon.style.width = "150px";
        imgPokemon.style.height = "auto";
        imgPokemon.style.borderRadius = "10px";

        pokemonName.style.textAlign = "center";
        pokemonType.style.textAlign = "center";
        pokemonWeight.style.textAlign = "center";
        pokemonSize.style.textAlign = "center";

        imgPokemon.src = Pokemon.sprites.regular;
        newPokemon.appendChild(imgPokemon);
        pokemonName.innerText = Pokemon.name.fr;
        newPokemon.appendChild(pokemonName);
        pokemonType.innerText = 'Type : '+Pokemon.types[0].name+'.';
        newPokemon.appendChild(pokemonType);
        pokemonWeight.innerText = 'Poids : '+Pokemon.weight+'.';
        newPokemon.appendChild(pokemonWeight);
        pokemonSize.innerText = 'Taille : '+Pokemon.height+'.';
        newPokemon.appendChild(pokemonSize);

        apiDiv2.appendChild(newPokemon);
    });
}

contactApiSecure();
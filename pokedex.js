const pokeCard = document.querySelector('[data-poke-card]');
const pokeName = document.querySelector('[data-poke-name]');
const pokeImg = document.querySelector('[data-poke-img]');
const pokeImgContainer = document.querySelector('[data-poke-img-container]');
const pokeId = document.querySelector('[data-poke-id]');
const pokeTypes = document.querySelector('[data-poke-types]');
const pokeStats = document.querySelector('[data-poke-stats]');
const pokeAbilities = document.querySelector('[data-poke-abilities]');

const typeColors = {
    electric: '#ffea70',
    normal: '#b09398',
    fire: '#ff675c',
    water: '#0596c7',
    ice: '#afeafd',
    rock: '#999799',
    flying: '#7ae7c7',
    grass: '#4a9681',
    psychic: '#ffc6d9',
    ghost: '#561d25',
    bug: '#a2faa3',
    dark: '#0a0a0a',
    poison: '#795663',
    ground: '#d2b074',
    dragon: '#da627d',
    steel: '#1d8a99',
    fighting: '#2f2f2f',
    default: '#2a1a1f',
};


const searchPokemon = event => {
    event.preventDefault();
    const { value } = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
    .then(data => data.json())
    .then(response => renderPokemonData(response))
    .catch(err => renderNot())
}


const renderPokemonData = data => {
    const sprite = data.sprites.front_default;
    const { stats, types, abilities } = data;
    
    pokeName.textContent = data.name;
    pokeImg.setAttribute('src', sprite);
    pokeId.textContent = `Nº ${data.id}`;
    setCardColor(types);
    renderPokemonTypes(types);
    renderPokemonStats(stats);
    renderPokemonAbilities(abilities);
}

const setCardColor = types => {
    const colorOne = typeColors[types[0].type.name];
    const colorTwo = types[1] ? typeColors[types[1].type.name] : typeColors.default;
    pokeImg.style.background = `radial-gradient(${colorTwo} 25%, ${colorOne} 25%)`;
    pokeImg.style.backgroundSize = ` 5px 5px `;
}

const renderPokemonTypes = types => {
    pokeTypes.innerHTML = '' ;
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typeColors[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes.appendChild(typeTextElement);
    });
}

const renderPokemonStats = stats => {
    pokeStats.innerHTML = '';
    stats.forEach(stat => {
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        const statElementAmount = document.createElement("div");
        statElementName.textContent = stat.stat.name;
        statElementAmount.textContent = stat.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        pokeStats.appendChild(statElement);
    })
}

const renderPokemonAbilities = abilities => {
    pokeAbilities.innerHTML = '';
    abilities.forEach(ability => {
        const abilityElement = document.createElement("div");
        abilityElement.textContent = ability.ability.name;
        pokeAbilities.appendChild(abilityElement);
    })
}

const renderNot = () => {
    pokeName.textContent = 'NO ENCONTRADO';
    pokeImg.setAttribute('src', 'pokemon-sad.gif')
    pokeImg.style.background = '#fff';
    pokeTypes.innerHTML = '';
    pokeStats.innerHTML = '';
    pokeId.innerHTML = '';
    pokeAbilities.innerHTML = '';
}

//shiny

const searchPokemon2 = event => {
    event.preventDefault();
    const { value } = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
    .then(data => data.json())
    .then(response => renderPokemonData2(response))
    .catch(err => renderNot())
}


const renderPokemonData2 = data => {
    const sprite = data.sprites.front_shiny;
    const { stats, types, abilities } = data;
    
    pokeName.textContent = data.name;
    pokeImg.setAttribute('src', sprite);
    pokeId.textContent = `Nº ${data.id}`;
    setCardColor2(types);
    renderPokemonTypes2(types);
    renderPokemonStats2(stats);
    renderPokemonAbilities2(abilities);
}

const setCardColor2 = types => {
    const colorOne = typeColors[types[0].type.name];
    const colorTwo = types[1] ? typeColors[types[1].type.name] : typeColors.default;
    pokeImg.style.background = `radial-gradient(${colorTwo} 25%, ${colorOne} 25%)`;
    pokeImg.style.backgroundSize = ` 5px 5px `;
}

const renderPokemonTypes2 = types => {
    pokeTypes.innerHTML = '' ;
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typeColors[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes.appendChild(typeTextElement);
    });
}

const renderPokemonStats2 = stats => {
    pokeStats.innerHTML = '';
    stats.forEach(stat => {
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        const statElementAmount = document.createElement("div");
        statElementName.textContent = stat.stat.name;
        statElementAmount.textContent = stat.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        pokeStats.appendChild(statElement);
    })
}

const renderPokemonAbilities2 = abilities => {
    pokeAbilities.innerHTML = '';
    abilities.forEach(ability => {
        const abilityElement = document.createElement("div");
        abilityElement.textContent = ability.ability.name;
        pokeAbilities.appendChild(abilityElement);
    })
}

const renderNot2 = () => {
    pokeName.textContent = 'NO ENCONTRADO';
    pokeImg.setAttribute('src', 'pokemon-sad.gif')
    pokeImg.style.background = '#fff';
    pokeTypes.innerHTML = '';
    pokeStats.innerHTML = '';
    pokeId.innerHTML = '';
    pokeAbilities.innerHTML = '';
}
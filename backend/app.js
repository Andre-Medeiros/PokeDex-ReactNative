const request = require('request');
const jsdom = require('jsdom');
const fs = require('fs');
const { JSDOM } = jsdom;


function obterConteudo() {
    const url = 'https://pokemondb.net/pokedex/all';
    request(url, function (error, response, body) {
        if (error) {
            console.log(error);
            return;
        }

        const dom = new JSDOM(body);

        const pokemonsRetorno = [];
        const pokemons = dom.window.document.querySelectorAll('#pokedex > tbody > tr');

        for (const pokemon of pokemons) {
            const pokemonRetorno = {

            }
            //NUMERO DA DEX
            let queryPokedex = pokemon.querySelector('.infocard-cell-data');
            if (queryPokedex)
                pokemonRetorno.pokeDex = queryPokedex.textContent;

            //ICONE DO POKEMON
            let icon = pokemon.querySelector(".img-fixed");
            if (icon)
                pokemonRetorno.icon = icon.getAttribute("data-src");

            //NOME DA MEGA-EVOLUÇAO
            let megaEvolution = pokemon.querySelector('.text-muted');
            if (megaEvolution)
                pokemonRetorno.megaEvolution = megaEvolution.textContent;

            //NOME DO POKEMON
            let queryName = pokemon.querySelector('.ent-name');
            if (queryName)
            pokemonRetorno.name = queryName.textContent;

            //TIPOS DO POKEMON
            let queryType = pokemon.querySelectorAll('.type-icon');
            
            if (queryType) {
                pokemonRetorno.types = [];
                for(let type of queryType){
                    type2 = {

                    }
                    if (type){
                        type2.type = type.textContent;
                    }
                    pokemonRetorno.types.push(type2);
                }
            }
            

            //TOTAL DE STATUS
            let queryTotal = pokemon.querySelector('.cell-total');
            if (queryTotal)
                pokemonRetorno.total = queryTotal.textContent;

            // STATUS
            let queryNuns = pokemon.querySelectorAll('.cell-num');
            if (queryNuns) {
                pokemonRetorno.hp = queryNuns[1].textContent;
                pokemonRetorno.attack = queryNuns[2].textContent;
                pokemonRetorno.defense = queryNuns[3].textContent;
                pokemonRetorno.spAtk = queryNuns[4].textContent;
                pokemonRetorno.spDef = queryNuns[5].textContent;
                pokemonRetorno.speed = queryNuns[6].textContent;

            }

            pokemonsRetorno.push(pokemonRetorno);
        }
        fs.writeFileSync('./pokemons.json', JSON.stringify(pokemonsRetorno, null, 2), 'UTF8');
    });
}

obterConteudo();

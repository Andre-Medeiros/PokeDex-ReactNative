import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView, FlatList, View, Button, TouchableOpacity } from 'react-native';
import lerPokemons from '../../api/feed';
import Cabecalho from '../../Components/Cabecalho';
import Tipo from '../../Components/Tipo';
import estilos from './estilos';


const Feed = () => {

  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    lerPokemons(setPokemons);
  }, []);

  const navigation = useNavigation();

  return (
    <ScrollView>
      <FlatList
        data={pokemons}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) =>
          <TouchableOpacity style={estilos.cabecalho} onPress={() => navigation.push('Status', {
            pokeDex: item.pokeDex,
            name: item.name,
            megaEvolucao: item.megaEvolution,
            tipoPokemon: item.types,
            total: item.total,
            hp: item.hp,
            attack: item.attack,
            defense: item.defense,
            spAtk: item.spAtk,
            spDef: item.spDef,
            speed: item.speed,
          })}>
            <Cabecalho numeroPokedex={item.pokeDex} urlIcon={item.icon} nomePokemon={item.name} megaEvolucao={item.megaEvolution} />
            <Tipo tipoPokemon={item.types} />
          </TouchableOpacity>
        }
      />
    </ScrollView>
  );
};

export default Feed;

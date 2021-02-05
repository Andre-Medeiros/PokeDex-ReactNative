import React, { useEffect, useState } from 'react';
import {  StyleSheet, ScrollView, FlatList, View } from 'react-native';
import lerPokemons from '../../api/feed';
import Cabecalho from '../../Components/Cabecalho';
import Tipo from '../../Components/Tipo';
import estilos from './estilos';


const Feed = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    lerPokemons(setPokemons);
  }, []);
  return (
    <ScrollView>
      <FlatList
        data={pokemons}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) =>
          <View style={estilos.cabecalho}>
            <Cabecalho numeroPokedex={item.pokeDex} urlIcon={item.icon} nomePokemon={item.name} megaEvolucao={item.megaEvolution} />
            <Tipo tipoPokemon={item.types} />
          </View>
        }
      />
    </ScrollView>
  );
};

export default Feed;

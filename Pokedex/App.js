import React, { Fragment, useEffect, useState } from 'react';
import { Text, Image, StyleSheet, ScrollView, FlatList, View } from 'react-native';
import Cabecalho from './src/Components/Cabecalho';
import Tipo from './src/Components/Tipo';


const App = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const lerPokemons = async() =>{
      const pokemonsHTTP = await fetch('http://10.0.2.2:3333/pokemons');
      const pokemonsJSON = await pokemonsHTTP.json();
      setPokemons(pokemonsJSON);
    } 

    lerPokemons();
  }, []);
  return (
    <ScrollView>
      <FlatList
        data={pokemons}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) =>
          <View style={estilos.cabecalho} >
            <Cabecalho numeroPokedex={item.pokeDex} urlIcon={item.icon} nomePokemon={item.name} />
            <Tipo tipoPokemon={item.types} />
            
          </View>
        }
      />
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  cabecalho:{
      flexDirection: 'row',
      alignItems: 'center',
      borderStyle: 'solid',
      borderColor: 'black',
      borderWidth: 1
  }
})

export default App;

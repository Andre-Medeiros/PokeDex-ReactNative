import React, { Fragment } from 'react';
import {Text, Image, StyleSheet, Dimensions, View} from 'react-native';

const Status = () => {
  
  return (
    <View style={estilos.view}>
      
      <Image style={estilos.imagem} source={{ uri: 'https://img.pokemondb.net/artwork/large/bulbasaur.jpg' }}/>
      <Text>numeroDex</Text>
      <Text>nomePokemon</Text>
      <Text>MegaEvolução</Text>
      <Text>tipos</Text>
      <Text>estatus</Text>
    </View>
  );
};

const largura = Dimensions.get('screen').width;

const estilos = StyleSheet.create ({
  imagem: {
    width: largura,
    height:360
  }, 

  view:{
  }
})

export default Status;
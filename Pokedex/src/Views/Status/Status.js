import React from 'react';
import { Text, Image, StyleSheet, Dimensions, View , FlatList} from 'react-native';


const Status = ({route}) => {

  const {pokeDex, name, megaEvolucao, tipoPokemon, total, hp, attack, defense, spAtk, spDef, speed} = route.params;

  return (
    <View style={estilos.view}>
      <Image style={estilos.imagem} source={{ uri: `https://img.pokemondb.net/artwork/large/${name.toLowerCase()}.jpg`}} resizeMode='contain' />
      <Text>{pokeDex}</Text>
      <Text>{name}</Text>
      <Text>{megaEvolucao}</Text>
      <FlatList
        data={tipoPokemon}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>
          <View style={estilos.cabecalho}>
            <Text style={estilos.tipo}>{item.type}</Text>
          </View>
        }
      />
      <Text>{total}</Text>
      <Text>{hp}</Text>
      <Text>{attack}</Text>
      <Text>{defense}</Text>
      <Text>{spAtk}</Text>
      <Text>{spDef}</Text>
      <Text>{speed}</Text>
    </View>
  );
};

const largura = Dimensions.get('screen').width;

const estilos = StyleSheet.create({
  imagem: {
    width: largura,
    height: 360
  },

  view: {
  }
})

export default Status;
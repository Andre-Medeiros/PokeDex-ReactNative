import React from 'react';
import { Text, Image, StyleSheet, Dimensions, View, FlatList, Animated } from 'react-native';


const Status = ({ route }) => {

  const { pokeDex, name, megaEvolucao, tipoPokemon, total, hp, attack, defense, spAtk, spDef, speed } = route.params;

  const percentTotal = total / 15.3;
  const percentHp = hp / 2.55;
  const percentAttack = attack / 2.55;
  const percentDefense = defense / 2.55;
  const percentSpAtk = spAtk / 2.55;
  const percentSpDef = spDef / 2.55;
  const percentSpeed = speed / 2.55;

  return (
    <View style={estilos.background}>
      <Image style={estilos.imagem} source={{ uri: `https://img.pokemondb.net/artwork/large/${name.toLowerCase()}.jpg` }} resizeMode='contain' />
      <View style={estilos.status}>
        <View style={estilos.info}>
          <View style={estilos.id}>
            <Text>{pokeDex}</Text>
            <Text> </Text>
          </View>
          <View style={estilos.nome}>
            <Text>{name}</Text>
            <Text>{megaEvolucao}</Text>
          </View>
          <View>
            <FlatList
              data={tipoPokemon}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) =>
                <View style={estilos.cabecalho}>
                  <Text style={estilos.tipo}>{item.type}</Text>
                </View>
              }
            />
          </View>
        </View>
        <View style={estilos.atributos}>
          <View style={estilos.atributo}>
            <Text style={estilos.texto}>Total: </Text>
            <View style={estilos.espaco}>
              <Text style={estilos.texto2}>{total} </Text>
              <View style={estilos.progressBar}>
                <Animated.View style={[StyleSheet.absoluteFill], { backgroundColor: "#8BED4F", width: `${percentTotal}%` }} />
              </View>
            </View>
          </View>

          <View style={estilos.atributo}>
            <Text style={estilos.texto}>HP: </Text>
            <View style={estilos.espaco}>
              <Text style={estilos.texto2}>{hp} </Text>
              <View style={estilos.progressBar}>
                <Animated.View style={[StyleSheet.absoluteFill], { backgroundColor: "#8BED4F", width: `${percentHp}%` }} />
              </View>
            </View>
          </View>

          <View style={estilos.atributo}>
            <Text style={estilos.texto}>Attack: </Text>
            <View style={estilos.espaco}>
              <Text style={estilos.texto2}>{attack} </Text>
              <View style={estilos.progressBar}>
                <Animated.View style={[StyleSheet.absoluteFill], { backgroundColor: "#8BED4F", width: `${percentAttack}%` }} />
              </View>
            </View>
          </View>

          <View style={estilos.atributo}>
            <Text style={estilos.texto}>Defense: </Text>
            <View style={estilos.espaco}>
              <Text style={estilos.texto2}>{defense} </Text>
              <View style={estilos.progressBar}>
                <Animated.View style={[StyleSheet.absoluteFill], { backgroundColor: "#8BED4F", width: `${percentDefense}%` }} />
              </View>
            </View>
          </View>

          <View style={estilos.atributo}>
            <Text style={estilos.texto}>SpAtk: </Text>
            <View style={estilos.espaco}>
              <Text style={estilos.texto2}>{spAtk} </Text>
              <View style={estilos.progressBar}>
                <Animated.View style={[StyleSheet.absoluteFill], { backgroundColor: "#8BED4F", width: `${percentSpAtk}%` }} />
              </View>
            </View>
          </View>

          <View style={estilos.atributo}>
            <Text style={estilos.texto}>SpDef: </Text>
            <View style={estilos.espaco}>
              <Text style={estilos.texto2}>{spDef} </Text>
              <View style={estilos.progressBar}>
                <Animated.View style={[StyleSheet.absoluteFill], { backgroundColor: "#8BED4F", width: `${percentSpDef}%` }} />
              </View>
            </View>
          </View>

          <View style={estilos.atributo}>
            <Text style={estilos.texto}>Speed: </Text>
            <View style={estilos.espaco}>
              <Text style={estilos.texto2}>{speed} </Text>
              <View style={estilos.progressBar}>
                <Animated.View style={[StyleSheet.absoluteFill], { backgroundColor: "#8BED4F", width: `${percentSpeed}%` }} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const largura = Dimensions.get('screen').width;

const estilos = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white'
  },

  imagem: {
    width: largura,
    height: 360,
    marginTop: 30
  },
  texto: {
    width: 60
  },

  texto2: {
    width: 30,
    textAlign: 'right'
  },

  status: {
    backgroundColor: '#f5f5f5',
    width: "100%",
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderWidth: 1,
    textAlign: 'center'
  },

  info: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10
  },

  id: {
    marginLeft: 20
  },

  nome: {
    marginLeft: 20
  },

  tipo: {
    width: 70,
    height: 20,
    borderRadius: 50,
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderWidth: 1,
    textAlign: 'center'
  },

  cabecalho: {
    width: 70,
    marginBottom: 10
  },

  atributos: {
    width: '100%',
    marginTop: 10
  },

  atributo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },

  espaco: {
    flex: 1,
    flexDirection: 'row'
  },

  progressBar: {
    flexDirection: 'row',
    height: 20,
    width: '90%',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5

  }
})

export default Status;
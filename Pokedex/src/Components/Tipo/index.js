import React, { Fragment } from 'react';
import { Text, View, FlatList } from 'react-native';
import estilos from './estilos';

const Tipo = ({ tipoPokemon }) => {

    return (
        <FlatList
            data={tipoPokemon}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) =>
                <View style={estilos.cabecalho}>
                    <Text style={estilos.tipo}>{item.type}</Text>
                </View>
            }
        />
    )
};

export default Tipo;
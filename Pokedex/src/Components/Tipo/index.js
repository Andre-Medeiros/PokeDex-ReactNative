import React, { Fragment } from 'react';
import { Text, View, FlatList } from 'react-native';
import estilo from './estilos';

const Tipo = ({ tipoPokemon }) => {

    return (
        <View style={estilo.cabecalho}>
            <Text>{tipoPokemon[0]}    {tipoPokemon[1]}</Text>
        </View>
    )

};

export default Tipo;
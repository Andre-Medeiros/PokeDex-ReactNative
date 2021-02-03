import React, { Fragment } from 'react';
import { Image, Text, View } from 'react-native';

import estilos from './estilos';

const Cabecalho = ({ numeroPokedex, urlIcon, nomePokemon }) => {
    return (
        <View style={estilos.cabecalho}>
            <Text>{numeroPokedex}</Text>
            <Image style={estilos.icoPokemon} source={{uri: urlIcon}} />
            <Text>{nomePokemon}</Text>
        </View>
    );
}

export default Cabecalho;
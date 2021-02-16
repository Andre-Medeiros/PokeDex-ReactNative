import React, { Fragment } from 'react';
import { Image, Text, View } from 'react-native';

import estilos from './estilos';

const Cabecalho = ({ numeroPokedex, urlIcon, nomePokemon, megaEvolucao }) => {
    return (
        <View style={estilos.cabecalho}>
            <Text>{numeroPokedex}</Text>
            <Image style={estilos.icoPokemon} source={{ uri: urlIcon }} resizeMode='contain'/>
            <View>
                <Text style={estilos.nome}>{nomePokemon}</Text>
                <Text>{megaEvolucao}</Text>
            </View>
        </View>
    );
}

export default Cabecalho;
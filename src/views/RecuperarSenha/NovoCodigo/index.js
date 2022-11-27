import React from "react";
import { View, Text } from "react-native";

import Voltar from "../../../component/voltar";
import ConfirmarCodigo from "../../../component/ConfirmaCodigo"

import styles from "./styles";

export default function NovoCodigo({navigation}){

    function voltar(){
        navigation.navigate('ConfirmarEmail')
    }

    function proximo(){
        navigation.navigate("Atualizar")
    }

    return(
        <View style={styles.container}>
            <View style={styles.caixa}>
                <Voltar onpress={voltar}/>
                <ConfirmarCodigo tituloEmail="Digete o Novo Código enviado!" NomeBotao="Confirmar" link={proximo}/>
            </View>
        </View>
    )
    
}
import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

import Voltar   from '../../component/voltar'
import ConfirmaCodigo from '../../component/ConfirmaCodigo'

export default function ConfirmarCodigo({navigation}){

    const TelaCadastroEmail = ()=>{
        navigation.navigate('TelaCadastroEmail');
    }

    const ola = ()=>{
        alert("oi");
    }

    return(
        <View style={styles.container}>

            <View style={styles.caixa}>
                
                <Voltar onpress={TelaCadastroEmail}/>
                <ConfirmaCodigo tituloEmail="Digete os 6 Digetos" link={ola}  NomeBotao="Confirmar"/>
            </View>

        </View>
    )
}
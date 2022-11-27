import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

import Voltar   from '../../component/voltar'
import ConfirmaCodigo from '../../component/ConfirmaCodigo'

export default function ConfirmarCodigo({navigation}){

    const TelaCadastroEmail = ()=>{
        navigation.navigate('TelaCadastroEmail');
    }

    const cadastro = () =>{
        navigation.navigate('CadastroUsuario');
    }

    return(
        <View style={styles.container}>

            <View style={styles.caixa}>
                
                <Voltar onpress={TelaCadastroEmail}/>
                <ConfirmaCodigo tituloEmail="Digete o código de 6 Digetos!" link={cadastro}  NomeBotao="Confirmar"/>
            </View>

        </View>
    )
}
import React from "react";
import { View, Text } from "react-native";
import Voltar from '../../component/voltar';
import CampoEmail from "../../component/CampoEmail";
import Botao from '../../component/botao';

import styles from "./styles";

export default function TelaCadastroEmail({navigation}){

    function nav(){
        navigation.navigate('Login');
    }

    const ola = ()=>{
        alert("Ola");
    }
    
    return(
        <View style={styles.container}>

            <View style={styles.caixa}>
                
                <Voltar onpress={nav}/>
                <CampoEmail tituloEmail="Digete seu Email" link={ola} NomeBotao="Comfirmar"/>

            </View>

        </View>
    )

}
import React from "react";
import { View, Text } from "react-native";
import Voltar from "../../../component/voltar";
import CampoEmail from "../../../component/CampoEmail";
import styles from "./styles";

export default function ConfirmarEmail({navigation}){

    function login(){
        navigation.navigate('Login')
    }

    function novo(){
        navigation.navigate('NovoCodigo')
    }

    return(
        <View style={styles.container}>
            <View style={styles.caixa}>
                <Voltar onpress={login}/>
                <CampoEmail tituloEmail="Digete o E-mail Cadastrado" NomeBotao="Confirmar" link={novo}/>
            </View>
        </View>
    )
}
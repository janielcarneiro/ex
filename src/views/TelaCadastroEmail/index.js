import React from "react";
import { View, Text } from "react-native";
import Voltar from '../../component/voltar';
import CampoEmail from "../../component/CampoEmail";
import Botao from '../../component/botao';

import styles from "./styles";

export default function TelaCadastroEmail({navigation}){

     const Login = () =>{
        navigation.navigate('Login');
    }
    

    const ConfirmarCodigo = ()=>{
        navigation.navigate('ConfirmarCodigo');
    }
    
    return(
        <View style={styles.container}>

            <View style={styles.caixa}>
                
                <Voltar onpress={Login}/>
                <CampoEmail tituloEmail="Digete o seu Email" link={ConfirmarCodigo} NomeBotao="Comfirmar"/>

            </View>

        </View>
    )

}
import React from "react";
import { View, Text } from "react-native";
import Voltar from '../../component/voltar';

import styles from "./styles";

export default function TelaCadastroEmail({navigation}){

    function nav(){
        navigation.navigate('Login');
    }
    
    return(
        <View style={styles.container}>

            <View style={styles.caixa}>
                
                <Voltar onpress={nav}/>
                
            </View>

        </View>
    )

}
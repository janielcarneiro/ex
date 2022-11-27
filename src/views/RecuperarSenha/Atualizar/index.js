import React from "react";
import { View, Text} from "react-native";

import Voltar from '../../../component/voltar';
import CampoCadastro from "../../../component/CampoCadastro";

import styles from "./styles";

export default function Atualizar({navigation}){

    function voltar(){
        navigation.navigate('NovoCodigo')
    }

    function ola(){
        alert("Safado");
    }

    return(
        <View style={styles.container}>
            <View style={styles.caixa}>
                <Voltar onpress={voltar}/>
                <CampoCadastro NomeBotao="Atualizar" link={ola}/>
            </View>
        </View>

    )
}
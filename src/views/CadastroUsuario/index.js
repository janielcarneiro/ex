import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

import Voltar from "../../component/voltar";
import CampoCadastro from "../../component/CampoCadastro";

export default function CadastroUsuario({navigation}){

    const voltar = ()=>{
        navigation.navigate('ConfirmarCodigo');
    }
    
    const ola = ()=>{
        alert("Você conseguir, parabéns corno")
    }

    return(
       <View style={styles.container}>
            <View style={styles.caixa}>
                <Voltar onpress={voltar}/>
                <CampoCadastro link={ola} NomeBotao="Cadastrar"/>
            
            </View>
       </View>
    )
}
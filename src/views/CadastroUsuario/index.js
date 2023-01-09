import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

import Voltar from "../../component/voltar";
import CampoCadastro from "../../component/CampoCadastro";

export default function CadastroUsuario({navigation}){

    const voltar = ()=>{
        navigation.navigate('Login');
    }
    
    const ola = ()=>{
        alert("Você conseguir, parabéns corno")
    }

    return(
       <View style={styles.container}>
            <View style={styles.caixa}>
                <Voltar onpress={voltar}/>
                <CampoCadastro 
                    link={ola} 
                    NomeBotao="Cadastrar" 
                    campo_um="E-mail"
                    campo_dois="Nome"
                    campo_tres= "Senha"
                    />
            
            </View>
       </View>
    )
}
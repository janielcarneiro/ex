import React from "react";
import {Text, View, TextInput, SafeAreaView} from "react-native";
import Botao from '../../component/botao'
import styles from "./styles";

export default function CampoEmail({tituloEmail, link, NomeBotao,}){

    return(
        <View style={styles.container}>
            <View style={styles.caixa}>
                <Text>{tituloEmail}</Text>

                <View style={styles.CaixaInput}>
                    <SafeAreaView>

                        <TextInput 
                            style={styles.input} 
                            placeholder="Nome Usuario" 
                            keyboardType="text" 
                            placeholderTextColor="gray"
                        />
            
                    </SafeAreaView>

                </View>

                        <Botao  onpress={link} labelButton={NomeBotao}/>

            </View>
        </View>
    )
}
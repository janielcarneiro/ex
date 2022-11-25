import React from "react";
import {Text, View, TextInput, SafeAreaView} from "react-native";
import styles from "./styles";
import Botao from '../../component/botao';

export default function CampoCadastro({link, NomeBotao}){


    return(
        <View style={styles.container}>
            <View style={styles.caixa}>
                <Text style={styles.txt}>Crie uma senha para acessar app!</Text>
                <View style={styles.CaixaInput}>
                    <SafeAreaView>

                        <TextInput 
                            style={styles.input} 
                            placeholder="E-mail" 
                            keyboardType="text" 
                            placeholderTextColor="gray"
                        />
                        <TextInput 
                            style={styles.input} 
                            placeholder="Senha" 
                            keyboardType="text" 
                            placeholderTextColor="gray"
                        />
                        <TextInput 
                            style={styles.input} 
                            placeholder="Confirmar Senha!" 
                            keyboardType="text" 
                            placeholderTextColor="gray"
                        />
            
                    </SafeAreaView>

                </View>

                <View style={styles.btn}>
                    <Botao labelButton={NomeBotao} onpress={link}/>
                </View>
               
            </View>
        </View>
    )
}
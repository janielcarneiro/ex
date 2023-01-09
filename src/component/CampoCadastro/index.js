import React from "react";
import {Text, View, TextInput, SafeAreaView} from "react-native";
import styles from "./styles";
import Botao from '../../component/botao';

export default function CampoCadastro(props){


    return(
        <View style={styles.container}>
            <View style={styles.caixa}>
                <Text style={styles.txt}>Crie uma senha para acessar app!</Text>
                <View style={styles.CaixaInput}>
                    <SafeAreaView>

                        <TextInput 
                            style={styles.input} 
                            placeholder= {props.campo_um} 
                            keyboardType="text" 
                            placeholderTextColor="gray"
                        />
                        <TextInput 
                            style={styles.input} 
                            placeholder={props.campo_dois} 
                            keyboardType="text" 
                            placeholderTextColor="gray"
                        />
                        <TextInput 
                            style={styles.input} 
                            placeholder={props.campo_tres}  
                            keyboardType="text" 
                            placeholderTextColor="gray"
                        />
            
                    </SafeAreaView>

                </View>

                <View style={styles.btn}>
                    <Botao labelButton={props.NomeBotao} onpress={props.link}/>
                </View>
               
            </View>
        </View>
    )
}
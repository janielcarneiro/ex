import React from "react";
import { 
    Text, 
    View, 
    Image, 
    SafeAreaView, 
    TextInput, 
    Button } 
    from "react-native";

import styles from './styles';

import logo from '../../assets/Revenue-bro.png';

export default function Login(){

    return(
        
        <View style={styles.container}>
            <View style={styles.caixa}>

                <View style={styles.marca}>
                    <Image source={logo} style={styles.logo}/>
                    <Text style={styles.login}>Login</Text>
                </View>

                <View style={styles.CaixaInput}>
                    <SafeAreaView>

                        <TextInput 
                            style={styles.input} 
                            placeholder="Nome Usuario" 
                            keyboardType="text" 
                        />

                        <TextInput 
                            style={styles.input} 
                            placeholder="Senha" 
                            keyboardType="text" 
                        />

                    </SafeAreaView>
                </View>

            </View>
            
        </View>
    )
}
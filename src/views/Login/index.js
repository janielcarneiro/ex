import React from "react";
import { 
    Text, 
    View, 
    Image, 
    SafeAreaView, 
    TextInput,
    Linking
    } 
    from "react-native";

import styles from './styles';

import Botao from '../../component/botao';

import logo from '../../assets/Revenue-bro.png';

export default function Login({navigation}){

    const sigIn = ()=>{
        alert("Olá");
    }

    function nav(){
        navigation.navigate('CadastroUsuario');
    }

    function navs(){
        navigation.navigate('ConfirmarEmail');
    }

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
                            placeholderTextColor="gray"
                        />

                        <TextInput 
                            style={styles.input} 
                            placeholder="Senha" 
                            keyboardType="text" 
                            placeholderTextColor="gray"
                        />
            
                    </SafeAreaView>

                </View>


                <View style={styles.botao}>
                    <Botao onpress={sigIn} labelButton="Login" />
                </View>


                <View style={styles.opcao}>

                    <Text style={styles.text} onPress={()=>{
                        nav();
                    }}>
                        Criar Conta!
                    </Text>

                    <Text style={styles.text} onPress={()=>{
                        navs();
                    }}>
                        Recuparar Senha!
                    </Text>

                </View>

            </View>
            
        </View>
    )
}
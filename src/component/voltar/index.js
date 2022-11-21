import React from "react";
import { TouchableOpacity, View, Image } from "react-native";

import styles from './styles';

import seta from '../../assets/seta-esquerda.png';

export default function Voltar({onpress}){

    return(
        <TouchableOpacity style={styles.container}>

            <TouchableOpacity style={styles.caixaImg} onPress={onpress}>

                <Image source={seta} style={styles.logo}/>

            </TouchableOpacity>

        </TouchableOpacity>
    )
}
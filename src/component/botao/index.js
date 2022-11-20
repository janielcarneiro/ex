import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";

 export default function Botao({onpress, labelButton}){
    return(
        <TouchableOpacity style={styles.botao} onPress={onpress} >
            <Text>{labelButton}</Text>
        </TouchableOpacity>
    )
}

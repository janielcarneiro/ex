import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#151515',
        
    },

    caixa: {
        width: '100%',
        height: '70%',
        backgroundColor: '#151515',
        alignItems: 'center',
    },

    CaixaInput: {
        width: '100%',
        height: 100,
        marginTop: 25,
      
    },

    input: {
        height: 60,
        margin: 12,
        borderWidth: 1,
        borderColor: '#FAFAFA',
        backgroundColor: "#252525",
        borderRadius: 5,
        padding: 10,
        fontSize: 17,
        color: 'white',
    },

    titulo: {
        fontSize: 15,
        color: '#fafafa'
    }
})

export default styles;
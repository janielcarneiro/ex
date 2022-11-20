import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#151515',
        alignItems: 'center',
        justifyContent: 'center'
    },

    caixa: {
        width: '90%',
        height: '90%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        
    },

    marca: {
        width: 150,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        width: '100%',
        height: '100%',
        marginTop: 8,
    },
    login:{
        fontSize: 30,
        color: "green",
    },

    CaixaInput: {
        width: '100%',
        height: 200,
        backgroundColor: 'green',
        marginTop: 25,
    },

    input: {
        height: 60,
        margin: 12,
        borderWidth: 1,
        borderColor: '#FAFAFA',
        borderRadius: 5,
        padding: 10,
        fontSize: 17,
    },

    Caixabotao:{
        width: '100%',
        height: 80,
        backgroundColor: 'pink',
    },

    botao:{
        width:100,
        
    }
    
})

export default styles;
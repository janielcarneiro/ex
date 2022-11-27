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
        alignItems: 'center',
        justifyContent: 'flex-start',
        
    },

    marca: {
        width: 150,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        paddingTop: 20
    },

    logo: {
        width: '100%',
        height: '100%',
        marginTop: 8,
    },
    login:{
        fontSize: 30,
        color: "#fafafa",
    },

    CaixaInput: {
        width: '100%',
        height: 170,
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

    Caixabotao:{
        width: '100%',
        height: 80,
        backgroundColor: 'pink',
    },

    botao:{
        width:300,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },

    opcao: {
        height: 100,
        width: 200,
        marginBottom: 16,
        alignItems: 'center',
    },

    text: {
        color: '#30D82D',
        paddingTop: 16,
        fontWeight: "bold",
    }
    
})

export default styles;
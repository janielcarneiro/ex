import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        
        
    },

    caixa: {
        width: '100%',
        height: '85%',
        alignItems: 'center',
    },

    CaixaInput: {
        width: '100%',
        height: 100,
        marginTop: 25,
        paddingTop: 0
      
    },

    input: {
        height: 60,
        margin: 12,
        border: 0,
        borderBottomWidth: 2,
        borderBottomColor: '#30D82D',
        borderRadius: 5,
        padding: 10,
        fontSize: 17,
        color: 'white',
    },

    titulo: {
        fontSize: 15,
        color: '#fafafa'
    },

    btn: {
        width: '100%',
        height: 60,
      
        marginTop: 170,
        alignItems: "center",
    },
    txt: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#FAFAFA',
    }
})

export default styles;
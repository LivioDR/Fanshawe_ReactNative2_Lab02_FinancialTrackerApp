import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    headerContainer: {
        marginVertical: 5,
    },
    title: {
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardsRow: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        marginVertical: 5,
    },
    balance: {
        padding: 10,
        fontSize: 18,
        alignSelf: 'center',
    }
})
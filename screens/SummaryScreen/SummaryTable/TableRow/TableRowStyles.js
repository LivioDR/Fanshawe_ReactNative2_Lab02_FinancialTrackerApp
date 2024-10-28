import { StyleSheet } from "react-native";

export default TableRowStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        width: '90%',
        marginHorizontal: 'auto',
        marginVertical: 1,
        borderRadius: 5,
    },
    textContainer: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },
    icon: {
        padding: 5,
    },
    category: {
        fontSize: 18,
    },
    amount: {
        fontSize: 18,
    },
})
import { StyleSheet } from "react-native";

export default TransactionCardStyles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        width: '95%',
        marginVertical: 4,
        padding: 5,
        marginHorizontal: 'auto',
        backgroundColor: "#fafafa",
        borderRadius: 5,
        justifyContent: "space-between",
    },
    image: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '10%',

    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '85%',
        marginHorizontal: 'auto',
    },
    mainRow: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
    },
    amount: {
        fontWeight: '400',
    },
    detailsRow: {
        width: '100%',
        marginTop: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    date: {
        color: '#3d3d3d',
        fontWeight: 'light',
        fontSize: 14,
    },
    method: {
        color: '#3d3d3d',
        fontWeight: 'light',
    }
})
import { StyleSheet } from "react-native"

export default IOCardStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#007000',
        width: '35%',
        padding: 10,
        borderRadius: 5,
    },
    icon: {
        color: 'white',
    },
    text: {
        fontSize: 18,
        color: 'white',
    }
})
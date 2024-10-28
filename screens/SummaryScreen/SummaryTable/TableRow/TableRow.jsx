import React from "react";
import { View, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import getCategoryIcon from "../../../../utilities/getCategoryIcon";
import styles from "./TableRowStyles";


const TableRow = ({category, amount, color}) => {

    const icon = getCategoryIcon(category)

    return(
        <View style={{...styles.container, backgroundColor: color}}>
            <Ionicons style={styles.icon} name={icon} size={24} />
            <View style={styles.textContainer}>
                <Text style={styles.category}>{category}</Text>
                <Text style={styles.amount}>$ {amount.toFixed(2)}</Text>
            </View>
        </View>
    )
}

export default TableRow
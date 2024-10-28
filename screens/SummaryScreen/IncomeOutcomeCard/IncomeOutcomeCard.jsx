import React from "react";
import { View, Text } from "react-native";
import styles from "./IOCardStyles";
import Ionicons from '@expo/vector-icons/Ionicons';

const IncomeOutcomeCard = ({amount, isIncome}) => {

    return(
        <View style={{ ...styles.container, backgroundColor: isIncome ? "#00A000" : "#A00000" }}>
            <View style={styles.icon}>
                <Ionicons 
                name={isIncome? "trending-up" : "trending-down"} 
                size={24}
                style={styles.icon}
                />
            </View>
            <Text style={styles.text}>
                ${amount}
            </Text>
        </View>
    )
}
export default IncomeOutcomeCard
import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import TableRow from "./TableRow/TableRow";

const styles = StyleSheet.create({
    fontSize: 24,
    margin: 5,
    textAlign: 'center',
})

const SummaryTable = ({ categories }) => {
    return(
        <View>
            <Text style={styles}>Details per category</Text>
            {categories.map(item => 
                <TableRow key={item.category} category={item.category} amount={item.amount} color={item.color} />
            )}
        </View>
    )
}
export default SummaryTable
import React from "react";
import { View, Text } from "react-native";

const PlaceholderScreen = ({text}) => {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{text}</Text>
        </View>
    )
}
export default PlaceholderScreen
import React from "react";
import { View, Text } from "react-native";

const PlaceholderScreen = ({text = "Placeholder screen"}) => {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{text}</Text>
        </View>
    )
}
export default PlaceholderScreen
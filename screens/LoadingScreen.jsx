import { View, Text, ActivityIndicator } from "react-native"

const LoadingScreen = () => {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ padding: 12, }}>Loading</Text>
          <ActivityIndicator/>
        </View>
      )
}
export default LoadingScreen
import { View, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from "./TransactionCardStyles";


const TransactionCard = ({data}) => {

    // defining the icon for the category
    let categoryIcon
    switch(data.category){
        case 'Leisure':
            categoryIcon = "fast-food-outline"
            break
        case 'Education':
            categoryIcon = "school-outline"
            break
        case 'Health':
            categoryIcon = "bandage-outline"
            break
        case 'Groceries':
            categoryIcon = "bag-handle-outline"
            break
        case 'Services & utilities':
            categoryIcon = "bulb-outline"
            break
        case 'Income':
            categoryIcon = "cash-outline"
            break
        default:
            categoryIcon = "bar-chart-outline"
    }

    return(
        <View style={styles.wrapper}>
            <View style={styles.image}>
                <Ionicons 
                    name={categoryIcon}
                    size={24}
                />
            </View>
            <View style={styles.container}>
                <View style={styles.mainRow}>
                    <Text style={styles.title}>
                        {data.desc}
                    </Text>
                    <Text style={{...styles.amount, color: data.category == "Income" ? "green" : "red"}}>
                        $ {data.amount}
                    </Text>
                </View>
                <View style={styles.detailsRow}>
                    <Text style={styles.date}>
                        {data.date.split("T")[0]}
                    </Text>
                    <Text style={styles.method}>
                        {data.paymentMethod}
                    </Text>
                </View>
            </View>
        </View>
    )
}
export default TransactionCard
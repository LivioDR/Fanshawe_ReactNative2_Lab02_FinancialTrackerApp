import React from 'react'
import { Text, View } from 'react-native'
import IncomeOutcomeCard from '../IncomeOutcomeCard/IncomeOutcomeCard'
import styles from './SummaryHeaderStyles'

const SummaryHeader = ({incomeAmount, outcomeAmount}) => {
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.title}>Last 30 days</Text>
            <View style={styles.cardsRow}>
                <IncomeOutcomeCard amount={incomeAmount}/>
                <IncomeOutcomeCard amount={outcomeAmount} isIncome={false}/>
            </View>
            <Text style={styles.balance}>Your balance for the period: ${(incomeAmount-outcomeAmount).toFixed(2)}</Text>
        </View>
    )
}
export default SummaryHeader
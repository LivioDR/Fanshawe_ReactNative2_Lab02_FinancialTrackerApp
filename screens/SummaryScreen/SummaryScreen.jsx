import React from 'react'
import { ScrollView } from 'react-native'
import PieChartComponent from './PieChart/PieChartComponent'
import SummaryHeader from './SummaryHeader/SummaryHeader'


export default SummaryScreen = ({transactions}) => {

    // calculating the income and outcome for the period
    let incomeAmount = parseFloat(transactions.filter(item => item.category == "Income").map(item => item.amount).reduce((acc, cur) => acc + cur, 0)).toFixed(2)
    let outcomeAmount = parseFloat(transactions.filter(item => item.category != "Income").map(item => item.amount).reduce((acc, cur) => acc + cur, 0)).toFixed(2)


    return (
        <>
            <SummaryHeader incomeAmount={incomeAmount} outcomeAmount={outcomeAmount}/>
            <ScrollView style={{ flex: 1 }}>
                <PieChartComponent transactions={transactions}/>
            </ScrollView>
        </>
    )
}
import React from 'react'
import { ScrollView } from 'react-native'
import PieChartComponent from './PieChart/PieChartComponent'

export default SummaryScreen = ({transactions}) => {

    return (
      <ScrollView style={{ flex: 1 }}>
        <PieChartComponent transactions={transactions}/>
      </ScrollView>
    )
}
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PieChart from 'react-native-pie-chart'

// Colors idea based on the website: https://www.patternfly.org/charts/colors-for-charts/
const availableColors = [
  '#519DE9', '#7CC674', '#73C5C5', '#8481DD', '#F6D173', '#EF9234',
  '#A30000', '#D2D2D2', '#004B95', '#38812F', '#005F60', '#3C3D99',
  '#F0AB00', '#C46100', '#470000'
]

// This screen was created with the following component, by following the instructions in the documentation page
// https://www.npmjs.com/package/react-native-pie-chart

export default PieChartComponent = ({transactions}) => {

  // getting the categories
  const categories = [...new Set(transactions.map(item => item.category))]

  // getting then the amount per category
  let amounts = {}
  for(let i=0; i<transactions.length; i++){
    if(amounts.hasOwnProperty(transactions[i].category)){
      amounts[transactions[i].category] += transactions[i].amount
    }
    else{
      amounts = {
        ...amounts,
        [transactions[i].category]: transactions[i].amount,
      }
    }
  }

  // filtering out the income to show only the amounts per category
  const series = Object.values(amounts)

  // settign the chart properties
  const widthAndHeight = 250
  let sliceColor = []
  for(let i=0; i<series.length; i++){
    sliceColor.push(availableColors[i])
  }

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Transactions per category</Text>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          coverRadius={0.65}
          coverFill={'#fafafa'}
        />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
})
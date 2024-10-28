import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PieChart from 'react-native-pie-chart'

// This screen was created with the following component, by following the instructions in the documentation page
// https://www.npmjs.com/package/react-native-pie-chart

export default PieChartComponent = ({amounts, colorsArray}) => {

  // filtering out the income to show only the amounts per category
  const series = Object.values(amounts)

  // settign the chart size
  const widthAndHeight = 250

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Transactions per category</Text>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={colorsArray}
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
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
})
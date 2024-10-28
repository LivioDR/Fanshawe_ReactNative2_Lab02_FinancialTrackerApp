import React from 'react'
import { ScrollView } from 'react-native'
import PieChartComponent from './PieChart/PieChartComponent'
import SummaryHeader from './SummaryHeader/SummaryHeader'
import getColorsArray from '../../utilities/getColorsArray'
import SummaryTable from './SummaryTable/SummaryTable'


export default SummaryScreen = ({transactions}) => {

    // calculating the income and outcome for the period
    let incomeAmount = parseFloat(transactions.filter(item => item.category == "Income").map(item => item.amount).reduce((acc, cur) => acc + cur, 0)).toFixed(2)
    let outcomeAmount = parseFloat(transactions.filter(item => item.category != "Income").map(item => item.amount).reduce((acc, cur) => acc + cur, 0)).toFixed(2)

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

    // moving the data into an array for easier mapping
    let arrayOfCategories = []
    for(const [key, val] of Object.entries(amounts)){
        arrayOfCategories.push({
            category: key,
            amount: val
        })
    }

    const arrayOfColors = getColorsArray(arrayOfCategories.length)
    for(let i=0; i<arrayOfCategories.length; i++){
        arrayOfCategories[i].color = arrayOfColors[i]
    }

    return (
        <>
            <SummaryHeader incomeAmount={incomeAmount} outcomeAmount={outcomeAmount}/>
            <ScrollView style={{ flex: 1 }}>
                <PieChartComponent amounts={amounts} colorsArray={arrayOfColors}/>
                <SummaryTable categories={arrayOfCategories}/>
            </ScrollView>
        </>
    )
}
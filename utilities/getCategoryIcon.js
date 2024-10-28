export default getCategoryIcon = (category) => {
    let categoryIcon
    switch(category){
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
    return categoryIcon
}
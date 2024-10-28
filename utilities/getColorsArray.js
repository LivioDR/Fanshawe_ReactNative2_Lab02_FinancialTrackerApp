// Colors idea based on the website: https://www.patternfly.org/charts/colors-for-charts/
const availableColors = [
    '#519DE9', '#7CC674', '#73C5C5', '#8481DD', '#F6D173', '#EF9234',
    '#A30000', '#D2D2D2', '#004B95', '#38812F', '#005F60', '#3C3D99',
    '#F0AB00', '#C46100', '#470000'
  ]

export default getColorsArray = (n) => {
    return availableColors.slice(0,n)
}
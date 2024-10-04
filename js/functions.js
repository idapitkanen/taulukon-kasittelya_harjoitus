const input = document.querySelector('#newNumber')
const list = document.querySelector('table')

const numbers = []

const addRow = () => {
    const newNumber = Number(input.value) 
    numbers.push(newNumber)
    addTableRow(newNumber)
    input.value = ''
}

const addTableRow = (number) => {
    const row = list.insertRow()
    const col1 = row.insertCell(0)
    col1.innerHTML = number
}

const updateTable = () => {
    list.innerHTML = ''
    numbers.forEach((number) => {
        addTableRow(number)
    })
}

document.querySelector('#addButton').addEventListener('click', () => {
    addRow()
})

document.querySelector('#minButton').addEventListener('click', () => {
    const min = Math.min(...numbers)
    alert('Min number is ' + min)
})

document.querySelector('#maxButton').addEventListener('click', () => {
    const max = Math.max(...numbers)
    alert('Max number is ' + max)
})

document.querySelector('#averageButton').addEventListener('click', () => {
    let sum = 0
    numbers.forEach((number) => {
        sum += number
    })
    const average = sum/numbers.length
    alert('Average is ' + average.toFixed(1))
})

document.querySelector('#sortButton').addEventListener('click', () => {
    numbers.sort((a,b) => a - b)
    updateTable()
})
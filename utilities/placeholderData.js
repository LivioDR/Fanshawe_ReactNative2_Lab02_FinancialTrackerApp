import uuid from 'react-native-uuid';

// definition of the payment methods
const method = {
    credit: "Card - ****4321",
    debit: "Card - ****2233",
    bank: "Wire - ****1122",
    transfer: "Interac a***@g***l.com",
    cash: "Cash",
}

// function to get a random date for the placeholder transaction
const getRandomDate = () => {
    return new Date(new Date().getTime() - (1000 * 60 * 60 * (Math.random() * 24 * 30))).toISOString()
}

export default placeholderData = [
    {
        id: uuid.v4(),
        desc: "Starbucks",
        category: "Leisure",
        amount: 3.45,
        date: getRandomDate(),
        paymentMethod: method.transfer,
    },
    {
        id: uuid.v4(),
        desc: "Fanshawe - Tuition",
        category: "Education",
        amount: 8549.99,
        date: getRandomDate(),
        paymentMethod: method.bank,
    },
    {
        id: uuid.v4(),
        desc: "Uber",
        category: "Services & utilities",
        amount: 12.34,
        date: getRandomDate(),
        paymentMethod: method.credit,
    },
    {
        id: uuid.v4(),
        desc: "Real Canadian Superstore",
        category: "Groceries",
        amount: 420.69,
        date: getRandomDate(),
        paymentMethod: method.debit
    },
    {
        id: uuid.v4(),
        desc: "Payroll - Apple Canada",
        category: "Income",
        amount: 4780.23,
        date: getRandomDate(),
        paymentMethod: method.bank
    },
    {
        id: uuid.v4(),
        desc: "CRA",
        category: "Services & utilities",
        amount: 1234.07,
        date: getRandomDate(),
        paymentMethod: method.bank
    },
    {
        id: uuid.v4(),
        desc: "Insurance - Family opt-in",
        category: "Health",
        amount: 987.65,
        date: getRandomDate(),
        paymentMethod: method.debit
    },
    {
        id: uuid.v4(),
        desc: "Halloween treats",
        category: "Leisure",
        amount: 7.12,
        date: getRandomDate(),
        paymentMethod: method.cash
    },
    {
        id: uuid.v4(),
        desc: "Investment account",
        category: "Income",
        amount: 6723.12,
        date: getRandomDate(),
        paymentMethod: method.bank
    },
]
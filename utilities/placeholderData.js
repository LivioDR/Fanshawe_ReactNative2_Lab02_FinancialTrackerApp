const method = {
    credit: "Card - ****4321",
    debit: "Card - ****2233",
    bank: "Wire - ****1122",
    transfer: "Interac a***@g***l.com",
    cash: "Cash",
}


export default placeholderData = [
    {
        id: 1,
        desc: "Starbucks",
        category: "Leisure",
        amount: 3.45,
        date: new Date() - (1000 * 60 * 60 * (Math.random() * 24 * 30)),
        paymentMethod: method.transfer,
    },
    {
        id: 2,
        desc: "Fanshawe - Tuition",
        category: "Education",
        amount: 8549.99,
        date: new Date() - (1000 * 60 * 60 * (Math.random() * 24 * 30)),
        paymentMethod: method.bank,
    },
    {
        id: 3,
        desc: "Uber",
        category: "Services & utilities",
        amount: 12.34,
        date: new Date() - (1000 * 60 * 60 * (Math.random() * 24 * 30)),
        paymentMethod: method.credit,
    },
    {
        id: 4,
        desc: "Real Canadian Superstore",
        category: "Groceries",
        amount: 420.69,
        date: new Date() - (1000 * 60 * 60 * (Math.random() * 24 * 30)),
        paymentMethod: method.debit
    },
    {
        id: 5,
        desc: "Apple Canada",
        category: "Income",
        amount: 4780.23,
        date: new Date() - (1000 * 60 * 60 * (Math.random() * 24 * 30)),
        paymentMethod: method.bank
    },
    {
        id: 6,
        desc: "CRA",
        category: "Services & utilities",
        amount: 1234.07,
        date: new Date() - (1000 * 60 * 60 * (Math.random() * 24 * 30)),
        paymentMethod: method.bank
    },
]
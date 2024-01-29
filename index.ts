import inquirer from "inquirer";

let conversion:any = {
    "PKR": {
        "EURO": 0.0033,
        "USD": 0.0036,
        "GBP": 0.0028,
        "Yuan": 0.026,
        "Riyal":0.014,
        "PKR": 1

    },
    "EURO": {
        "PKR" : 304.39,
        "USD": 1.09,
        "GBP": 0.86,
        "Yuan": 7.75,
        "Riyal":4.08,
        "EURO": 1

    },
    "USD": {
        "EURO": 0.92,
        "PKR": 279.55,
        "GBP": 0.79,
        "Yuan": 7.12,
        "Riyal":3.75,
        "USD": 1

    },
    "GBP": {
        "EURO": 1.16,
        "USD": 1.27,
        "PKR": 354.55,
        "Yuan": 9.03,
        "Riyal":4.75,
        "GPB": 1

    },
    "Yuan": {
        "EURO": 0.13,
        "USD": 0.14,
        "GBP": 0.11,
        "PKR": 39.24,
        "Riyal":0.53,
        "Yuan": 1

    },
    "Riyal": {
        "EURO": 0.24,
        "USD": 0.27,
        "GBP": 0.21,
        "Yuan": 1.90,
        "PKR":74.53,
        "Riyal": 1

    },

}
const answer: {
    from: "PKR" | "EURO"| "USD" | "GBP" | "Yuan" | "Riyal",
    to: "PKR" | "EURO"| "USD" | "GBP" | "Yuan" | "Riyal",
    amount: number
} = await inquirer.prompt([
{
    type: "list",
    name: "from",
    choices: ["PKR", "EURO", "USD", "GBP", "Yuan", "Riyal"],
    message: "Select your currency:"
},

{
    type: "list",
    name: "to",
    choices: ["PKR", "EURO", "USD", "GBP", "Yuan", "Riyal"],
    message: "Select your conversion currency:"
},

{
    type: "number",
    name: "amount",
    message: "Enter your conversion amount:"
}

]);

const {from, to, amount} = answer // spreading
if (from && to && amount) {
    let result = conversion[from][to]
    console.log(`your conversion from ${from} to ${to} is ${result}`)
} else {
    console.log("Invalid input")
}
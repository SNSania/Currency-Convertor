import chalk from "chalk";
import inquirer from "inquirer";
let apiLink = "https://v6.exchangerate-api.com/v6/ed939949d4fa6f972bc09503/latest/USD";
let fetchData = async (data) => {
    let fetchData = await fetch(data);
    let res = await fetchData.json();
    return res.conversion_rates;
};
let data = await fetchData(apiLink);
let countries = Object.keys(data);
let firstCountry = await inquirer.prompt({
    type: "list",
    name: "name",
    message: "Converting From:",
    choices: countries,
});
let userMoney = await inquirer.prompt({
    type: "number",
    name: "curency",
    message: `please enter the amount in ${chalk.yellowBright.bold(firstCountry.name)}:`,
});
let secondCountry = await inquirer.prompt({
    type: "list",
    name: "name",
    message: "Converting to:",
    choices: countries,
});
let conv = `https://v6.exchangerate-api.com/v6/ed939949d4fa6f972bc09503/pair/${firstCountry.name}/${secondCountry.name}`;
let convData = async (data) => {
    let convData = await fetch(data);
    let res = await convData.json();
    return res.conversion_rate;
};
let conversionRate = await convData(conv);
let convertedRate = userMoney.curency * conversionRate;
console.log(`your ${firstCountry.name} ${userMoney.curency} in ${secondCountry.name} is ${convertedRate}`);

const chalk = require('chalk');
chalk.level = 2;

/*============================================
                Fruit Bearers
==============================================*/
const orangeHex = chalk.hex('#FFA500');

//Powdered fruit
const banana = (title, body) => console.log(chalk.yellow(title), body ? `: ${body}` : '');
const blueberry = (title, body) => console.log(chalk.blue(title), body ? `: ${body}` : '');
const cherror = (title, body) => console.log(chalk.red(title, 'error:'), body && body);
const cherry = (title, body) => console.log(chalk.red(title), body ? `: ${body}` : '');
const grape = (title, body) => console.log(chalk.magenta(title), body ? `: ${body}` : '');
const lime = (title, body) => console.log(chalk.greenBright(title), body ? `: ${body}` : '');
const orange = (title, body) => console.log(orangeHex(title), body ? `: ${body}` : '');
const pear = (title, body) => console.log(chalk.green(title), body ? `: ${body}` : '');
const plum = (title, body) => console.log(chalk.magentaBright(title), body ? `: ${body}` : '');
const teal = (title, body) => console.log(chalk.cyan(title), body ? `: ${body}` : '');
//Chalky fruit
const bgBanana = (title, body) => console.log(chalk.bgYellow(title), body ? `: ${body}` : '');
const bgBlueberry = (title, body) => console.log(chalk.bgBlue(title), body ? `: ${body}` : '');
const bgCherror = (title, body) => console.log(chalk.bgRed(title, 'error:'), body ? `: ${body}` : '');
const bgCherry = (title, body) => console.log(chalk.bgRed(title), body ? `: ${body}` : '');
const bgGrape = (title, body) => console.log(chalk.bgMagenta(title), body ? `: ${body}` : '');
const bgLime = (title, body) => console.log(chalk.bgGreenBright(title), body ? `: ${body}` : '');
const bgOrange = (title, body) => console.log(orangeHex(title), body ? `: ${body}` : '');
const bgPear = (title, body) => console.log(chalk.bgGreen(title), body ? `: ${body}` : '');
const bgPlum = (title, body) => console.log(chalk.bgMagentaBright(title), body ? `: ${body}` : '');
const bgTeal = (title, body) => console.log(chalk.bgCyan(title), body ? `: ${body}` : '');

module.exports = {
    //Chalks
    banana,
    blueberry,
    cherror,
    cherry,
    grape,
    lime,
    orange,
    pear,
    plum,
    teal,
    bgBanana,
    bgBlueberry,
    bgCherror,
    bgCherry,
    bgGrape,
    bgLime,
    bgOrange,
    bgPear,
    bgPlum,
    bgTeal,
};

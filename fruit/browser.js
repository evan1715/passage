/*============================================
                Fruit Bearers
==============================================*/

//Powdered fruit
const banana = (title, body) => console.log(`%c${title}`, 'color: yellow', body && `: ${body}`);
const blueberry = (title, body) => console.log(`%c${title}`, 'color: blue', body && `: ${body}`);
const cherror = (title, body) => console.log(`%c${title} error:`, 'color: red', body && body.toString());
const cherry = (title, body) => console.log(`%c${title}`, 'color: red', body && `: ${body}`);
const grape = (title, body) => console.log(`%c${title}`, 'color: magenta', body && `: ${body}`);
const lime = (title, body) => console.log(`%c${title}`, 'color: lime', body && `: ${body}`);
const orange = (title, body) => console.log(`%c${title}`, 'color: orange', body && `: ${body}`);
const pear = (title, body) => console.log(`%c${title}`, 'color: green', body && `: ${body}`);
const plum = (title, body) => console.log(`%c${title}`, 'color: purple', body && `: ${body}`);
const teal = (title, body) => console.log(`%c${title}`, 'color: cyan', body && `: ${body}`);
//Chalky fruit
const bgBanana = (title, body) => console.log(`%c${title}`, 'background-color: yellow', body && `: ${body}`);
const bgBlueberry = (title, body) => console.log(`%c${title}`, 'background-color: blue', body && `: ${body}`);
const bgCherror = (title, body) =>
    console.log(`%c${title} error:`, 'background-color: red', body && `${body}`);
const bgCherry = (title, body) => console.log(`%c${title}`, 'background-color: red', body && `: ${body}`);
const bgGrape = (title, body) =>
    console.log(`%c${title}%c`, 'background-color: magenta', body && `: ${body}`);
const bgLime = (title, body) => console.log(`%c${title}`, 'background-color: lime', body && `: ${body}`);
const bgOrange = (title, body) =>
    console.log(`%c${title}%c`, 'background-color: orange', body && `: ${body}`);
const bgPear = (title, body) => console.log(`%c${title}`, 'background-color: green', body && `: ${body}`);
const bgPlum = (title, body) => console.log(`%c${title}`, 'background-color: purple', body && `: ${body}`);
const bgTeal = (title, body) => console.log(`%c${title}`, 'background-color: cyan', body && `: ${body}`);

module.exports = {
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

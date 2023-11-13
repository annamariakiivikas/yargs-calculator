const yargs = require('yargs');

const argv = yargs
  .option('value1', {
    describe: 'Esimene väärtus',
    demandOption: true,
    type: 'number',
  })
  .option('value2', {
    describe: 'Teine väärtus',
    demandOption: true,
    type: 'number',
  })
  .option('sign', {
    describe: 'Tehe',
    demandOption: true,
    choices: ['+', '-', '*', '/'],
  })
  .help()
  .argv;

const value1 = argv.value1;
const value2 = argv.value2;
const sign = argv.sign;

let result;
switch (sign) {
  case '+':
    result = value1 + value2;
    break;
  case '-':
    result = value1 - value2;
    break;
  case '*':
    result = value1 * value2;
    break;
  case '/':
    result = value1 / value2;
    break;
  default:
    console.log('Vigane tehe');
    process.exit(1);
}

console.log(`${value1} ${sign} ${value2} = ${result}`);
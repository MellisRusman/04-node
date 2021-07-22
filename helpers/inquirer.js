const inquirer = require('inquirer');
require('colors');





const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
           
        ]
    }
];
const inquirerMenu = async() =>{
    console.clear();
    console.log("===============a=======".red);
    console.log("===Elija unadas opcqweion===".red);
    console.log("=============a======das===\n".red);
    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;
}

const pausa = async()=>{
const questions = [
    {
        type: 'input',
        name: 'pausa',
        message: `Presione ${'ENTER'.red} para continuar`,
    }
]
    console.log('\n')
    await inquirer.prompt(questions)

}

const leerInput = async(message) =>{
    const question = [
        {
            type: "input",
            name: 'description',
            message: message,
            validate(value){
                if (value.length === 0) {
                    return 'Ingrese otro valor'
                }
                return true;
            }
        }
    ]
    const {description} = await inquirer.prompt(question);
    return(description);
}

module.exports = {inquirerMenu,pausa, leerInput};
































// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// readline.question("Seleccione una opcion:", (opt) =>{
//     readline.close()
//     resolve(opt)
// })

    





const inquirer = require('inquirer');
require('colors');





const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: "1",
                name: `${'1.'.red} Crear tarea`
            },
            {
                value: "2",
                name:`${'2.'.red} Mostrar tareas`
            },
            {
                value: "3",
                name:`${'3.'.red} Mostrar tareas pendientes`
            },
            {
                value: "4",
                name:`${'4.'.red} Mostrar tareas completadas`
            },
            {
                value: "5",
                name:`${'5.'.red} Completar tarea`
            },
            {
                value: "6",
                name:`${'6.'.red} Borrar tarea`
            },
            {
                value: "0",
                name:`${'0.'.red} Salir`
            }
        ]
    }
];
const inquirerMenu = async() =>{
    console.clear();
    console.log("======================".red);
    console.log("===Elija una opcion===".red);
    console.log("======================\n".red);
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

    





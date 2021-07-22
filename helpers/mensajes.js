const colors = require('colors')
const mostrarMenu = (() =>{
    return new Promise(resolve =>{
        console.clear()
        console.log("======================".red)
        console.log("===Elija una opcion===".red)
        console.log("======================\n".red)
        console.log(`${"1.".red} Crear tarea`)
        console.log(`${"2.".red} Mostrar tareas`)
        console.log(`${"3.".red} Mostrar tareas pendientes`)
        console.log(`${"4.".red} Mostrar tareas completadas`)
        console.log(`${"5.".red} Completar tarea`)
        console.log(`${"6.".red} Borrar tarea`)
        console.log(`${"0.".red} Salir\n`)
        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout
        })
        readline.question("Seleccione una opcion:", (opt) =>{
            readline.close()
            resolve(opt)
        })
    })
})
const pausa = ()=>{
    return new Promise (resolve =>{
        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question(`Presione ${'ENTER'.red} para continuar`, (opt) =>{
            readline.close()
            resolve()
        })
    })
}
module.exports = { pausa}
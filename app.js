require('colors');
const { guardarDB, leerDB } = require('./helpers/guardado');
const { inquirerMenu,pausa, leerInput, tareasBorrar, confimacion, completarTareas } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

console.clear()

const main = async() =>{
    let opt = '';
    const tareas = new Tareas();
    const lectura = leerDB()
    if (lectura){
        tareas.cargarArchivo(lectura)
    }

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case "1":
                const description = await leerInput('Descripcion:');
                tareas.crearTarea(description);
            break;
            case "2":
                //console.log(tareas.listadoArr);
                tareas.listadoCompleto(lectura)
            break;
            case "3":
                tareas.listadoDeCompletadas(false)
            break;
            case "4":
                tareas.listadoDeCompletadas(true)
            break;
            case "5":
                const ids = await completarTareas(tareas.listadoArr)
                tareas.toggleCompletadas(ids)
            break;
            case "6":
                const id = await tareasBorrar(tareas.listadoArr)
                if ( id !== '0'){
                    const ok =  await confimacion('¿Desea borrar la tarea?')
                    if (ok){
                        tareas.borrarTarea(id)
                        console.log(`La tarea ha sido borrado`)
                    }
                }
            break;



        }
        guardarDB(tareas.listadoArr)

        await pausa()

    } while (opt !== "0");

}
main();
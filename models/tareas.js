const Tarea = require('./tarea.js');

class Tareas{
    _listado = {}

    get listadoArr(){
        const lista = []
        Object.keys(this._listado).forEach(key=>{
            const tarea = this._listado[key];
            lista.push(tarea);
        })
        return lista;
    }
    constructor(){
        this._listado = {}
    }

    crearTarea(description = ""){
        const tarea = new Tarea(description);
        this._listado[tarea.id] = tarea;
    }
    
    cargarArchivo (tareas = []) {

        tareas.forEach(tarea =>{
            this._listado[tarea.id] = tarea
        })

    }
    listadoCompleto(){
        this.listadoArr.forEach((tarea, idx) =>{
            const { description, finalizado} = tarea;
            const index = `${idx + 1}.`
            const estado = (finalizado === null)
                            ?`Pendiente`.red
                            :`Completado`.green

            console.log(`${index.red} ${description}: ${estado}`)

        })
    }
    listadoDeCompletadas(completadas){
        let contador = 0
        this.listadoArr.forEach((tarea, idx) =>{
            const {description,finalizado} = tarea;
            const estado = (finalizado)
                            ?`Completado`.green
                            :`Pendiente`.red
            if (completadas){
                if (finalizado){
                    contador +=1
                    console.log(`${contador.toString().red} ${description} ${estado} `)
                }
            }else{
                if (!finalizado){
                    contador +=1
                    console.log(`${contador.toString().red} ${description} ${estado} `)
                }
            }

        })
    }
}
module.exports = Tareas;
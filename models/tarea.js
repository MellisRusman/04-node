const { v4: uuidv4} = require('uuid');


class Tarea{
    id =  '';
    description = '';
    finalizado = null;

    constructor(description){
        this.id = uuidv4();
        this.description = description;
        this.finalizado = null;
    }
}

module.exports = Tarea;
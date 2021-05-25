class Task {
    tarea;
    prioridad;
    urgencia;
    tiempo;
    constructor(_tarea, _prioridad="MINOR", _urgencia="tomorrow", _tiempo="10min"){
        this.tarea=_tarea;
        this.prioridad=_prioridad;
        this.urgencia=_urgencia;
        this.tiempo=_tiempo;
    }
}

class ToDoList {
    tasks=[];
    taskAdd(task){
        this.tasks.push(task);
    }
}
let nombre_tarea = document.getElementById("txt_ingresarTarea");
let anadir_tareas = document.getElementById("btn_agregarTarea");
let tabla_tareas = document.getElementById("tasks");

anadir_tareas.addEventListener("click",function(e) {
    e.preventDefault();    
    if (nombre_tarea.value.trim() !== "") {
        let nueva_tarea = new Task(nombre_tarea.value);
        lista_tareas.taskAdd(nueva_tarea);
        imprimirTareas(lista_tareas.tasks,tabla_tareas);
        nombre_tarea.value = "";
    }
});

let imprimirTareas = function (tasks, table_body_tareas) {
    let htmlTasks = "";
    tasks.forEach(function (task) {
        htmlTasks = htmlTasks +
            `<tr>
                <td><input class="check-input" type="radio"></td>
                <td><b>${task.tarea}</b></td>
                <td>${task.prioridad}</td>
                <td>${task.urgencia}</td>
                <td>${task.tiempo}</td>
            </tr>`
    });
    table_body_tareas.innerHTML = htmlTasks;
}; 

let lista_tareas = new ToDoList();
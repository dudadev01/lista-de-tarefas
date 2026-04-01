let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

function salvarTarefas(){
localStorage.setItem("tarefas", JSON.stringify(tarefas))
}

function mostrarTarefas(){

const lista = document.getElementById("listaTarefas")
lista.innerHTML = ""

tarefas.forEach((tarefa, index)=>{

const li = document.createElement("li")

li.innerHTML = `
${tarefa}
<span class="remover" onclick="removerTarefa(${index})">X</span>
`

lista.appendChild(li)

})

}

function adicionarTarefa(){

const input = document.getElementById("tarefaInput")
const texto = input.value

if(texto === ""){
alert("Digite uma tarefa")
return
}

tarefas.push(texto)

input.value = ""

salvarTarefas()
mostrarTarefas()

}

function removerTarefa(index){

tarefas.splice(index,1)

salvarTarefas()
mostrarTarefas()

}

mostrarTarefas()

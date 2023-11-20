let tarefas = [];
let contador = 0;

function addTarefa() {
    let titulo = document.getElementById('tituloAdd').value;
    let descricao = document.getElementById('descricaoAdd').value;
    if (validarTarefas(titulo, descricao)) {
        let tarefa = {
            id: contador++,
            titulo: titulo,
            descricao: descricao
        }
        tarefas.push(tarefa);
        document.getElementById('tituloAdd').value="";
        document.getElementById('descricaoAdd').value="";
    }

}

function editarTarefa() {
    let titulo = document.getElementById('tituloEditado').value;
    let descricao = document.getElementById('descricaoEditado').value;
    if (validarTarefas(titulo, descricao)){
        let id = Number(document.getElementById('idEditado').value);
        let tarefaAtual = tarefas[tarefas.findIndex(linha => linha.id === id)];
        tarefaAtual.titulo = titulo;
        tarefaAtual.descricao = descricao;
        document.getElementById('tituloEditado').value="";
        document.getElementById('descricaoEditado').value="";
        document.getElementById('idEditado').value="";
    }
}

function removerTarefa() {
    let id = Number(document.getElementById('idRemovido').value);
    let index = tarefas.findIndex(linha => linha.id === id);
    if (index != -1) {
        tarefas.splice(index, 1);
        document.getElementById('idRemovido').value="";
    }
}

function listarTarefas() {
    console.log(tarefas);
}

function obterTarefa() {
    let id = Number(document.getElementById('idObtido').value);
    let index = tarefas.findIndex(linha => linha.id === id);
    console.log(tarefas[index]);
    document.getElementById('idObtido').value="";
}

function validarTarefas(titulo, descricao) {
    try {
        if (!titulo || !descricao) {
            throw new Error('A tarefa não pode ter titulo e descrição vazios.');
        }
        
        if (!isNaN(titulo)){
            throw new Error('O título não deve conter apenas números.');
        }

        if (titulo.length < 4) {
            throw new Error('O titulo deve ter no mínimo 4 caracteres.');
        }

        if (descricao.length < 20) {
            throw new Error('A descrição deve ter no mínimo 20 caracteres.')
        }

        if (tarefas.findIndex(linha => linha.titulo === titulo) != -1) {
            throw new Error('O título já existe.')
        }

    } catch (error) {
        console.log(error);
        return false;
    }
    return true;
}








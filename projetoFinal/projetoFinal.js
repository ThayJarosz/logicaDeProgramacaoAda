let tarefas = [];
let contador = 0;

function addTarefa() {
    let titulo = prompt('Digite um título:');
    let descricao = prompt('Digite uma descrição:');
    if (validarTarefas(titulo, descricao)) {
        let tarefa = {
            id: contador++,
            titulo: titulo,
            descricao: descricao
        }
        tarefas.push(tarefa);
    }

}

function editarTarefa() {
    let titulo = prompt('Digite um título:');
    let descricao = prompt('Digite uma descrição:');
    if (validarTarefas(titulo, descricao)){
        let id = Number(prompt('Digite a id que quer editar:'))
        let tarefaAtual = tarefas[tarefas.findIndex(linha => linha.id === id)];
        tarefaAtual.titulo = titulo;
        tarefaAtual.descricao = descricao;
    }
}

function removerTarefa() {
    let id = Number(prompt('Digite a id que quer remover:'));
    let index = tarefas.findIndex(linha => linha.id === id);
    tarefas.splice(index, 1);
}

function listarTarefas() {
    console.log(tarefas);
}

function obterTarefa() {
    let id = Number(prompt('Digite a id que quer obter:'));
    let index = tarefas.findIndex(linha => linha.id === id);
    console.log(tarefas[index]);
}

//validações

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








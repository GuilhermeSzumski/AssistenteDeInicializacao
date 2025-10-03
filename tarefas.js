import PromptSync from 'prompt-sync';
const prompt = PromptSync();
import fs from 'fs';
import { menuPrincipal } from './app.js';

let tarefas = [];

function salvarTarefas() {
    fs.writeFileSync('tarefas.json', JSON.stringify(tarefas, null, 2));
}

function carregarTarefas() {
    if (fs.existsSync('tarefas.json')) {
        const dados = fs.readFileSync('tarefas.json');
        tarefas = JSON.parse(dados);
    }
}

function adicionarTarefa() {
    const nomeTarefa = prompt("     Digite o nome da tarefa: ");
    const descricaoTarefa = prompt("     Digite a descrição da tarefa: ");
    const dataTarefa = prompt("     Digite a data da tarefa no seguinte formato (DD/MM/AAAA): ");

    const [dia, mes, ano] = dataTarefa.split('/');
    const dataFormatada = new Date(ano, mes - 1, dia);

    const tarefa = {
        nome: nomeTarefa,
        descricao: descricaoTarefa,
        data: dataFormatada
    };
    tarefas.push(tarefa);
    salvarTarefas();
}

function listarTarefas() {
    carregarTarefas();
    if (tarefas.length === 0) {
        console.log("       Não há tarefas cadastradas.");
    } else {
        console.log("       Tarefas cadastradas:");
        tarefas.forEach((tarefa, index) => {
            console.log(`       ${index + 1} - ${tarefa.nome} - ${tarefa.descricao} - ${tarefa.data}`);
        });
    }
}

function editarTarefa() {
    listarTarefas();
    const input = parseInt(prompt("Digite o número da tarefa que deseja editar: ")) - 1;
    if (input >= 0 && input < tarefas.length) {
        const nomeTarefa = prompt("Digite o novo nome da tarefa: ");
        const descricaoTarefa = prompt("Digite a nova descrição da tarefa: ");
        const dataTarefa = prompt("Digite a nova data da tarefa no seguinte formato (DD/MM/AAAA): ");

        const [dia, mes, ano] = dataTarefa.split('/');
        const dataFormatada = new Date(ano, mes - 1, dia);

        tarefas[input] = {
            nome: nomeTarefa,
            descricao: descricaoTarefa,
            data: dataFormatada
        };
        salvarTarefas();
        console.log("       Tarefa editada com sucesso!");
    } else {
        console.log("       Tarefa não encontrada.");
    }
}

function removerTarefa() {
    listarTarefas();
    const input = parseInt(prompt("Digite o número da tarefa que deseja remover: ")) - 1;
    if (input >= 0 && input < tarefas.length) {
        tarefas.splice(input, 1);
        salvarTarefas();
        console.log("       Tarefa removida com sucesso!");
    } else {
        console.log("       Tarefa não encontrada.");
    }
}

function menuTarefas() {
    console.log(`
        Bem-vindo ao menu de tarefas
        Você pode escolher uma das seguintes opções:
        1 - Adicionar tarefa
        2 - Listar tarefas
        3 - Editar tarefa
        4 - Remover tarefa
        5 - Voltar ao menu principal
    `);
    const input = prompt("      Escolha uma das opções entrando o número de sua respectiva ação: ");

    switch (input) {
        case '1':
            adicionarTarefa();
            console.log("       Tarefa adicionada com sucesso!");
            menuTarefas();
            break;

        case '2':
            listarTarefas();
            menuTarefas();
            break;

        case '3':
            editarTarefa();
            menuTarefas();
            break;

        case '4':
            removerTarefa();
            menuTarefas();
            break;

        case '5':
            menuPrincipal();
            break;

        default:
            console.log("       Opção inválida, tente novamente.");
            menuTarefas();
            break;
    }
}

export { menuTarefas };
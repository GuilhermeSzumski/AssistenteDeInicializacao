import PromptSync from 'prompt-sync';
const prompt = PromptSync();

let tarefa = [];

function adicionarTarefa() {
    const nomeTarefa = prompt("Digite o nome da tarefa: ");
    const descricaoTarefa = prompt("Digite a descrição da tarefa: ");
    const dataTarefa = prompt("Digite a data da tarefa, somente os números (AAAA/MM/DD): ");

    tarefa = {
        nome: nomeTarefa,
        descricao: descricaoTarefa,
        data: dataTarefa
    };
}

function menuTarefas() {
    console.log(`
        Bem-vindo ao menu de tarefas
        Você pode escolher uma das seguintes opções:
        1 - Adicionar tarefa
        2 - Listar tarefas
        3 - Remover tarefa
        4 - Voltar ao menu principal
    `);
    const input = prompt("      Escolha uma das opções entrando o número de sua respectiva ação: ");

    switch (input) {
        case '1':
            adicionarTarefa();
            console.log("       Tarefa adicionada com sucesso!");
            menuTarefas();
            break;

        case '4':
            menu();
            break;

        default:
            console.log("       Opção inválida, tente novamente.");
            menuTarefas();
            break;
    }

}
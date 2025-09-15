import PromptSync from 'prompt-sync';
const prompt = PromptSync();
import { menuModos } from './modos.js';
import { menuTarefas } from './tarefas.js';
import { menuEncerramento } from './encerramento.js';

function menuPrincipal() {
    console.log(`
        Bem-vindo ao assistente de inicialização
        O que deseja fazer?
        1 - Iniciar modos
        2 - Gerenciar tarefas
        3 - Gerenciar encerramento do PC
        4 - Sair do programa
    `);
    const input = prompt("      Escolha uma das opções entrando o número de sua respectiva ação: ");

    switch (input) {
        case '1':
            menuModos();
            break;

        case '2':
            menuTarefas();
            break;

        case '3':
            menuEncerramento();
            break;

        case '4':
            console.log("       Saindo do assistente. Tenha um bom dia!");
            break;

        default:
            console.log("       Opção inválida, tente novamente.");
            menuPrincipal();
            break;
    }
}

menuPrincipal();

export { menuPrincipal };
import PromptSync from 'prompt-sync';
const prompt = PromptSync();
import { exec } from 'child_process';
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
        4 - Abrir código fonte
        5 - Sair do programa
    `);
    const input = prompt("      Escolha uma das opções entrando o número de sua respectiva ação: ");

    switch (input) {
        case '1':
            console.clear();
            menuModos();
            break;

        case '2':
            console.clear();
            menuTarefas();
            break;

        case '3':
            console.clear();
            menuEncerramento();
            break;

        case '4':
            console.clear();
            console.log('       Abrindo código no vs code');
            exec('code C:\\Desenvolvimento\\AssistenteDeInicializacao', (err) => {
                if (err) {
                    console.error(`Erro ao abrir o VS Code: ${err}`);
                    return;
                }
            });
            
            menuPrincipal();
            break;

        case '5':
            console.log("       Saindo do assistente. Tenha um bom dia!");
            setTimeout(() => {
                console.clear();
            }, 5000);
            break;

        default:
            console.log("       Opção inválida, tente novamente.");
            menuPrincipal();
            break;
    }
}

menuPrincipal();

export { menuPrincipal };
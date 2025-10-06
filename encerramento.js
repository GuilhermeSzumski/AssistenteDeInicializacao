import PromptSync from 'prompt-sync';
const prompt = PromptSync();
import { exec } from 'child_process';
import { menuPrincipal } from './app.js';

function desligarPC(){
const input = prompt("Tem certeza que deseja desligar o computador? (s/n): ");
    if (input.toLowerCase() === 's') {
        exec('shutdown /s /t 10', (error) => {
            if (error) {
                console.log(`Erro ao desligar o computador: ${error.message}`);
            } else {
                console.log("O computador será desligado em 10 segundos.");
            }
        });
    } else {
        console.log("Operação de desligamento cancelada.");
    }
}

function reiniciarPC(){
const input = prompt("      Tem certeza que deseja reiniciar o computador? (s/n): ");
    if (input.toLowerCase() === 's') {
        exec('shutdown /r /t 10', (error) => {
            if (error) {
                console.log(`Erro ao reiniciar o computador: ${error.message}`);
            } else {
                console.log("O computador será reiniciado em 10 segundos.");
            }
        });
    } else {
        console.log("Operação de reinicialização cancelada.");
    }
}

function menuEncerramento() {
    console.log(`
        Menu de Encerramento
        1 - Desligar o PC
        2 - Reiniciar o PC
        3 - Voltar ao menu principal
    `);

    const input = prompt("      Escolha uma das opções entrando o número de sua respectiva ação: ");

    switch (input) {
        case '1':
            console.clear();
            desligarPC();
            menuEncerramento();
            break;
        
        case '2':
            console.clear();
            reiniciarPC();
            menuEncerramento();
            break;

        case '3':
            console.clear();
            menuPrincipal();
            break;

        default:
            console.clear();
            console.log("       Opção inválida, tente novamente.");
            menuEncerramento();
            break;
    }
}

export { desligarPC, menuEncerramento };
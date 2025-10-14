import PromptSync from 'prompt-sync';
const prompt = PromptSync();
//import { exec } from 'child_process';
import { menuPrincipal } from './app.js';

function menuAtalhos() {
    console.log(`       Atalhos rápidos:
        1 - Firefox
        2 - Spotify
        3 - Discord
        4 - Counter-Strike 2
        5 - Skyrim
        6 - Space Engineers
        7 - Visual Studio Code
        8 - Voltar ao menu principal`);

    const input = prompt("      Escolha os atalhos que deseja iniciar (pode iniciar mais de um): ");

    switch (input) {
        case '8':
            console.clear();
            menuPrincipal();
            break;
    };
}
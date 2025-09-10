const prompt = require('prompt-sync')();
const { exec } = require('child_process');

const atalhosTrabalho = [
    { nome: 'Google Agenda', comando: `start "" "https://calendar.google.com/calendar/u/0/r?pli=1"` },
    { nome: 'Gmail', comando: `start "" "https://mail.google.com/mail/u/0/#inbox"` },
    { nome: 'Google Drive', comando: `start "" "https://drive.google.com/drive/home"` },
    { nome: 'GitHub', comando: `start "" "https://github.com"` },
    { nome: 'ChatGPT', comando: `start "" "https://chat.openai.com"` },
];

atalhosEstudos = [
    { nome: 'Udemy', comando: `start "" "https://www.udemy.com"` },
    { nome: 'Studeo', comando: `start "" "https://studeo.unicesumar.edu.br/#!/access/login"` }
];

atalhosJogos = [
    { nome: 'Steam', comando: 'start "" "C:\\Users\\Admin\\OneDrive\\Área de Trabalho\\Atalhos\\Steam.lnk"' },
    { nome: 'Epic Games', comando: 'start "" "C:\\Users\\Admin\\OneDrive\\Área de Trabalho\\Atalhos\\Epic Games.lnk"' },
    { nome: 'Hydra', comando: 'start "" "C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Hydra.lnk"' },
    { nome: 'Discord', comando: 'start "" "C:\\Users\\Admin\\OneDrive\\Área de Trabalho\\Atalhos\\Discord.lnk"' },
    { nome: 'CurseForge', comando: 'start "" "C:\\Users\\Admin\\OneDrive\\Área de Trabalho\\Atalhos\\CurseForge.lnk"' },
    { nome: 'Roblox Player', comando: 'start "" "C:\\Users\\Admin\\OneDrive\\Área de Trabalho\\Atalhos\\Roblox Player.lnk"' }
]

//Função para iniciar o modo de trabalho
function trabalho() {
    atalhosTrabalho.forEach(atalho => {
        exec(atalho.comando, (error) => {
            if (error) {
                console.log(`Erro ao abrir ${atalho.nome}: ${error.message}`);
            }
        });
    });
}

//Função para iniciar o modo de estudos
function estudos() {
    atalhosEstudos.forEach(atalho => {
        exec(atalho.comando, (error) => {
            if (error) {
                console.log(`Erro ao abrir ${atalho.nome}: ${error.message}`);
            }
        });
    });
}

//Função para iniciar o modo de jogos
function jogos() {
    atalhosJogos.forEach(atalho => {
        exec(atalho.comando, (error) => {
            if (error) {
                console.log(`Erro ao abrir ${atalho.nome}: ${error.message}`);
            }
        })
    })
}

function menu() {
    console.log(`
        Bem-vindo ao assistente de inicialização
        Você pode estar escolhendo dois modos para começar seu dia:

        1 - Modo de trabalho
        2 - Modo de Estudos
        3 - Modo de Jogos
        4 - Sair

    `);
    const input = prompt("      Escolha uma das opões entrando o número de seu respectivo modo: ");

    switch (input) {
        case '1':
            trabalho();
            menu();
            break;

        case '2':
            estudos();
            menu();
            break;

        case '3':
            jogos();
            menu();
            break;

        case '4':
            console.log("       Saindo do assistente. Tenha um bom dia!");
            break;
    
        default:
            console.log("       Opção inválida, tente novamente.");
            menu();
            break;
    }
}

menu();
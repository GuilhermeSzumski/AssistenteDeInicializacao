const prompt = require('prompt-sync')();
const { exec } = require('child_process');

const atalhosTrabalho = [
    { nome: 'Google Agenda', comando: `start "" "https://calendar.google.com"` },
    { nome: 'Gmail', comando: `start "" "https://mail.google.com"` },
    { nome: 'Google Drive', comando: `start "" "https://drive.google.com"` }
];

atalhosJogos = [
    { nome: 'Calculadora', comando: 'start calc' }
]

//Função para abrir os atalhos de trabalho
function trabalho() {
    atalhosTrabalho.forEach(atalho => {
        exec(atalho.comando, (error) => {
            if (error) {
                console.log(`Erro ao abrir ${atalho.nome}: ${error.message}`);
            } else {
                console.log(`${atalho.nome} iniciado.`);
            }
        });
    });
}

//Função para abrir os atalhos de jogos
function jogos() {
    atalhosJogos.forEach(atalho => {
        exec(atalho.comando, (error) => {
            if (error) {
                console.log(`Erro ao abrir ${atalho.nome}: ${error.message}`);
            } else {
                console.log((`${atalho.nome} iniciado.`));
            }
        })
    })
}

function menu() {
    console.log(`
        Bem-vindo ao assistente de inicialização
        Você pode estar escolhendo dois modos para começar seu dia:

        1 - Modo de trabalho
        2 - Modo de Jogos

    `);
    const input = prompt("Escolha uma das opões entrando o número de seu respectivo modo: ");

    switch (input) {
        case '1':
            trabalho();
            break;

        case '2':
            jogos();
            break;

        case 'sair':
            console.log("Saindo do assistente. Tenha um bom dia!");
            break;
    
        default:
            console.log("Opção inválida, tente novamente.");
            menu();
            break;
    }
}

menu();
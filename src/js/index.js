/*

Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa coom os botões de seleção de plataforma

    Passo 1 - pegar o botão de seleção de plataformas no js para verificar quando o usuario clicar em cima dele

    Passo 2 - pegar o elemento do conteudo que precisa ser mostrado

    Passo 3 - pegar o clique do usuario no js

    Passo 4 - quando o usuário clicar, adicionar a classe ativo no conteudo do botaõ para que o conteúdo dele apareça

Objetivo 2 - caso a lista de botões de plataformas já esteja aparecendo e usuário clicar em cima do botão, o conteúdo deve ser escondido

    Passo 1 - verificar se o botão já esta aberto, se sim, devemos remover a classe ativo para que ela esconda o conteudo novamente

*/

// Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa coom os botões de seleção de plataforma

// Passo 1 - pegar o botão de seleção de plataformas no js para verificar quando o usuario clicar em cima dele
const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});
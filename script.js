// Função para mostrar o GIF e ocultar os botões ao clicar em "Sim" 

document.querySelector('.sim').addEventListener('click' , function() {
    document.getElementById('buttons').style.display = 'none'; // Esconde os botões
    document.getElementById('gif').style.display = 'flex'; // Mostra o gif
})

// Função para mover o botão "Não" para posição aleatória

document.querySelector('.nao').addEventListener('mouseover', function() {
    const button = this;
    const randomX = Math.floor(Math.random() * window.innerWidth - button.offsetWidth)
    const randomY = Math.floor(Math.random() * window.innerHeight - button.offsetHeight)

    // Definindo nova posição do botão
    button.style.position = 'absolute'
    button.style.left = `${randomX}px`
    button.style.top = `${randomY}px`
})


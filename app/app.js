let progress = 0;
const circle = document.getElementById('progress-circle');
const percentageText = document.getElementById('percentage');
const mainContent = document.getElementById('main-content');  // Referência ao conteúdo principal

function updateProgress() {
    if (progress < 100) {
        progress++;
        percentageText.textContent = `${progress}%`;
        const angle = (progress / 100) * 360;

        // Mudar a cor do círculo de azul para vermelho conforme o progresso
        circle.style.background = `conic-gradient(
            #00bcd4 0deg ${angle}deg,  /* cor azul */
            #ff0000 ${angle}deg 360deg  /* cor vermelha após o azul */
        )`;
    } else {
        clearInterval(progressInterval);
        // Quando atingir 100%, esconder o círculo e mostrar o conteúdo
        setTimeout(() => {
            circle.style.display = 'none';  // Esconde o círculo
            mainContent.style.display = 'block';  // Exibe o conteúdo principal
            document.body.style.backgroundColor = '#fff';  // Altere o fundo para indicar que a página carregou
        }, 500);  // Atraso para a animação de desaparecimento do círculo
    }
}

// Iniciar a animação de progresso
const progressInterval = setInterval(updateProgress, 30);  // Aumenta a porcentagem a cada 30ms

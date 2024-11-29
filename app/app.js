let progress = 0;
const circle = document.getElementById('progress-circle');
const percentageText = document.getElementById('percentage');
const mainContent = document.getElementById('main-content');  // Referência ao conteúdo principal

function updateProgress() {
    if (progress < 100) {
        progress++;
        percentageText.textContent = `${progress}%`;
        const angle = (progress / 100) * 360;
        circle.style.background = `conic-gradient(#00bcd4 ${angle}deg, transparent ${angle}deg)`;
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

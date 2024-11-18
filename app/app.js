let progress = 0;
const circle = document.getElementById('progress-circle');
const percentageText = document.getElementById('percentage');
const body = document.body;  // Referência ao body para manipulação após o carregamento

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
            body.style.backgroundColor = '#fff';  // Opcional: mude o fundo da página
            body.style.transition = 'background-color 1s';  // Transição suave de fundo
            // Aqui você pode fazer mais ajustes, como exibir uma mensagem ou redirecionar para outra página.
        }, 500);  // Atraso para a animação de desaparecimento do círculo
    }
}

// Iniciar a animação de progresso
const progressInterval = setInterval(updateProgress, 30);  // Aumenta a porcentagem a cada 30ms

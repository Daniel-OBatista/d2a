let progress = 0;
const circle = document.getElementById('progress-circle');
const percentageText = document.getElementById('percentage');
const mainContent = document.getElementById('main-content'); // Referência ao conteúdo principal

// Define o fundo da página como preto
document.body.style.backgroundColor = '#1a1f20'; // Cinza escuro

function updateProgress() {
    if (progress < 100) {
        progress++;
        percentageText.textContent = `${progress}%`;
        const angle = (progress / 100) * 360;
        circle.style.background = `conic-gradient(#00bcd4 ${angle}deg, transparent ${angle}deg)`;
    } else {
        clearInterval(progressInterval);
        // Quando atingir 100%, redirecione para outra página
        setTimeout(() => {
            window.location.href = 'home.html'; // Redireciona para a página principal
        }, 500); // Atraso para uma melhor transição
    }
}

// Iniciar a animação de progresso
const progressInterval = setInterval(updateProgress, 30); // Aumenta a porcentagem a cada 30ms

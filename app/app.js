let progress = 0;
const circle = document.getElementById('progress-circle');
const percentageText = document.getElementById('percentage');

function updateProgress() {
    if (progress < 100) {
        progress++;
        percentageText.textContent = `${progress}%`;
        const angle = (progress / 100) * 360;
        circle.style.background = `conic-gradient(#00bcd4 ${angle}deg, transparent ${angle}deg)`;
    } else {
        clearInterval(progressInterval);
    }
}

// Iniciar a animação de progresso
const progressInterval = setInterval(updateProgress, 30); // Aumenta a porcentagem a cada 30ms

let progress = 0;
const circle = document.getElementById('progress-circle');
const percentageText = document.getElementById('percentage');

function updateProgress() {
    if (progress < 100) {
        progress++;
        percentageText.textContent = `${progress}%`;
        const angle = (progress / 100) * 360;
        circle.style.background = `conic-gradient(#4caf50 ${angle}deg, #333 ${angle}deg)`;
    } else {
        clearInterval(progressInterval);
        // Redirecionar para o site após o carregamento (opcional)
        // window.location.href = "index.html";
    }
}

// Iniciar a animação
const progressInterval = setInterval(updateProgress, 30); // Aumenta a porcentagem a cada 30ms

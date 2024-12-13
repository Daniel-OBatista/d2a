//Script para voltar a página de carregaemento quando a página for atualizada.

// Verifica se a página foi recarregada
if (sessionStorage.getItem('reloaded')) {
    // Se a página já foi recarregada, remove o estado do sessionStorage
    sessionStorage.removeItem('reloaded'); 
    
    // Redireciona para a página inicial (index.html)
    window.location.href = 'index.html'; 
} else {
    // Se for o primeiro carregamento, define um estado no sessionStorage
    sessionStorage.setItem('reloaded', true); 
}

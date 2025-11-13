document.addEventListener('DOMContentLoaded', function() {
    // 1. Atualiza o ano de Copyright no Rodapé
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // 2. Exemplo de como pegar a data atual (Opcional)
    // Se você quiser mostrar a data de hoje onde está o placeholder:
    /*
    const dataAtualizacaoSpan = document.getElementById('data-atualizacao');
    if (dataAtualizacaoSpan) {
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        dataAtualizacaoSpan.textContent = today.toLocaleDateString('pt-BR', options);
    }
    */
});
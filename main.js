document.addEventListener('DOMContentLoaded', () => {
    const discordLink =  'helenaantoni'; 
    const discordIcon = document.getElementById ('discord-icon');

    if (discordIcon) {
        discordIcon.addEventListener('click', (event) => {
            event.preventDefault(); 
            
            navigator.clipboard.writeText(discordLink)
                .then(() => {
                    alert(`Nickname copiado para a área de transferência!`); 
                })
                .catch(err =>{
                    //console.error('Erro ao copiar o link: ', err);
                    alert(`Não foi possível copiar. Por favor, copie manualmente: ${discordLink}` );
                });
        });
    }
});
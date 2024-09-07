function searchCandidato() {
    
    const searchTerm = document.getElementById('search').value.toLowerCase().trim();
    
    
    const originalText = document.getElementById('texto-original');
    const tituloOriginal = document.getElementById('titulo-original');
    
    
    const candidatos = [
        { id: 'texto-pablo', name: 'pablo marçal', title: 'Pablo Marçal' },
        { id: 'texto-GuilhermeBoulos', name: 'guilherme boulos', title: 'Guilherme Boulos' },
        { id: 'texto-TabataAmaral', name: 'tabata amaral', title: 'Tabata Amaral' },
        { id: 'texto-RicardoNunes', name: 'ricardo nunes', title: 'Ricardo Nunes' },
        { id: 'texto-Datena', name: 'datena', title: 'Datena' }
    ];
    
    
    const listaProcessos = document.querySelectorAll('ul[id^="lista-processos"]');
    listaProcessos.forEach(lista => lista.style.display = 'none');
    
    
    let found = false;
    
    
    candidatos.forEach(candidato => {
        const candidatoParaMostrar = document.getElementById(candidato.id);
        if (candidato.name.includes(searchTerm)) {
            candidatoParaMostrar.style.display = 'block';
            
            if (candidato.id === 'texto-pablo') {
                document.getElementById('lista-processos').style.display = 'block';
            } else if (candidato.id === 'texto-RicardoNunes') {
                document.getElementById('lista-processos-RicardoNunes').style.display = 'block';
            }
            document.title = `Informações sobre ${candidato.title}`;
            tituloOriginal.innerText = candidato.title;
            tituloOriginal.style.display = 'block';
            originalText.style.display = 'none';
            found = true;
        } else {
            candidatoParaMostrar.style.display = 'none';
        }
    });
    
    
    if (!found && searchTerm) {
        document.title = 'Mapa dos Candidatos';
        tituloOriginal.innerText = 'Nenhum candidato encontrado';
        tituloOriginal.style.display = 'block';
        originalText.style.display = 'none';
    } else if (!searchTerm) {
        
        document.title = 'Mapa dos Candidatos';
        tituloOriginal.innerText = 'Conheça a Verdadeira Face dos Candidatos';
        tituloOriginal.style.display = 'block';
        originalText.style.display = 'block';
       
        candidatos.forEach(candidato => {
            const candidatoParaMostrar = document.getElementById(candidato.id);
            candidatoParaMostrar.style.display = 'none';
        });
        
        listaProcessos.forEach(lista => lista.style.display = 'none');
    }
}


window.onload = function() {
    alert('Só consegui colocar os candidatos de São Paulo :( a ideia inicial era colocar mais candidatos');
}


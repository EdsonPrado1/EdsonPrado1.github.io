document.addEventListener('DOMContentLoaded', () => {
    // Recupera dados do localStorage ou inicializa arrays vazios
    let data = {
        juizes: JSON.parse(localStorage.getItem('juizes')) || [],
        modalidades: JSON.parse(localStorage.getItem('modalidades')) || [],
        atletas: JSON.parse(localStorage.getItem('atletas')) || [],
        delegacoes: JSON.parse(localStorage.getItem('delegacoes')) || []
    };

    // Referências dos formulários e selects
    const forms = {
        juiz: document.getElementById('formJuiz'),
        modalidade: document.getElementById('formModalidade'),
        atleta: document.getElementById('formAtleta'),
        delegacao: document.getElementById('formDelegacao')
    };
    
    const selects = {
        juizModalidade: document.getElementById('juizModalidade'),
        modalidadeAtleta: document.getElementById('modalidadeAtleta'),
        delegacaoAtleta: document.getElementById('delegacaoAtleta')
    };

    // Função para atualizar tabelas e selects
    function updateUI() {
        // Atualizar tabela de juízes
        document.getElementById('tabelaJuizes').getElementsByTagName('tbody')[0].innerHTML = 
            data.juizes.map((juiz, index) => `<tr><td>${juiz.nome || ''}</td><td><button onclick="deleteItem('juizes', ${index})">Excluir</button></td></tr>`).join('');

        // Atualizar tabela de modalidades
        document.getElementById('tabelaModalidades').getElementsByTagName('tbody')[0].innerHTML = 
            data.modalidades.map((modalidade, index) => `<tr><td>${modalidade.nome || ''}</td><td>${modalidade.juiz || ''}</td><td><button onclick="deleteItem('modalidades', ${index})">Excluir</button></td></tr>`).join('');

        // Atualizar tabela de atletas
        document.getElementById('tabelaAtletas').getElementsByTagName('tbody')[0].innerHTML = 
            data.atletas.map((atleta, index) => `<tr><td>${atleta.nome || ''}</td><td>${atleta.modalidade || ''}</td><td>${atleta.delegacao || ''}</td><td><button onclick="deleteItem('atletas', ${index})">Excluir</button></td></tr>`).join('');

        // Atualizar tabela de delegações
        document.getElementById('tabelaDelegacoes').getElementsByTagName('tbody')[0].innerHTML = 
            data.delegacoes.map((delegacao, index) => `<tr><td>${delegacao.nome || ''}</td><td><button onclick="deleteItem('delegacoes', ${index})">Excluir</button></td></tr>`).join('');

        // Atualizar opções dos selects
        selects.juizModalidade.innerHTML = data.juizes.map(j => `<option value="${j.nome}">${j.nome}</option>`).join('');
        selects.modalidadeAtleta.innerHTML = data.modalidades.map(m => `<option value="${m.nome}">${m.nome}</option>`).join('');
        selects.delegacaoAtleta.innerHTML = data.delegacoes.map(d => `<option value="${d.nome}">${d.nome}</option>`).join('');
    }

    // Função para salvar no localStorage
    function saveData() {
        for (const key in data) localStorage.setItem(key, JSON.stringify(data[key]));
    }

    // Função genérica para adicionar item
    function addItem(type, item) {
        data[type].push(item);
        saveData();
        updateUI();
    }

    // Função genérica para deletar item
    window.deleteItem = function(type, index) {
        data[type].splice(index, 1);
        saveData();
        updateUI();
    }

    // Eventos dos formulários
    forms.juiz.addEventListener('submit', e => {
        e.preventDefault();
        const nome = document.getElementById('nomeJuiz').value;
        if (nome) addItem('juizes', { nome });
        forms.juiz.reset();
    });

    forms.modalidade.addEventListener('submit', e => {
        e.preventDefault();
        const nome = document.getElementById('nomeModalidade').value;
        const juiz = selects.juizModalidade.value;
        if (nome && juiz) addItem('modalidades', { nome, juiz });
        forms.modalidade.reset();
    });

    forms.atleta.addEventListener('submit', e => {
        e.preventDefault();
        const nome = document.getElementById('nomeAtleta').value;
        const modalidade = selects.modalidadeAtleta.value;
        const delegacao = selects.delegacaoAtleta.value;
        if (nome && modalidade && delegacao) addItem('atletas', { nome, modalidade, delegacao });
        forms.atleta.reset();
    });

    forms.delegacao.addEventListener('submit', e => {
        e.preventDefault();
        const nome = document.getElementById('nomeDelegacao').value;
        if (nome) addItem('delegacoes', { nome });
        forms.delegacao.reset();
    });

    // Inicializar a UI com os dados existentes
    updateUI();
});

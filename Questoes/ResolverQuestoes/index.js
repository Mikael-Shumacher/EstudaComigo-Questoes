const bancaSelect = document.getElementById('num-banca');
const disciplinaSelect = document.getElementById('num-disciplina');
const conteudoSelect = document.getElementById('num-conteudo');
const topicoSelect = document.getElementById('topico');
const dificuldadeSelect = document.getElementById('num-tipologia');
let questoesFiltradas = []; // Armazena as questões filtradas
let questaoAtualIndex = 0;

const data = {
    mat: {
        conteudos: ["Lógica", "Algebra", "Geometria", "Trigonometria", "Calculo"],
    },
    fisica: {
        conteudos: ["Mecânica", "Termodinâmica", "Eletricidade"],
    },
    qui: {
        conteudos: ["Fundamentos", "Química Orgânica", "Química Inorgânica"],
    }
}

const topicosPorConteudo = {
    lógica: ["Proposições", "Operadores Lógicos", ""],
    algebra: ["basico", "Eq.1Grau", "Equações do 2º Grau", "Logaritmos"],
    geometria: ["Triângulos", "Circunferência", "Prismas"],
    calculo: ["Derivadas", "Integrais", "Limites"],
    mecânica: ["MRU", "MRUV", "Velocidade Escalar"],
    fundamentos: ["Matéria", "Energia", "Fases de Agregação"]
};

bancaSelect.addEventListener('change', () => {
    const selectedValue = bancaSelect.value;
    if (data[selectedValue] == 'Nenhum') {
        disciplinaSelect.innerHTML = '<option value="default">Nenhum</option>';
    }
});

disciplinaSelect.addEventListener('change', () => {
    const selectedValue = disciplinaSelect.value;
    topicoSelect.innerHTML = '<option value="default">Selecione um tópico</option>';
    // Limpar opções atuais
    conteudoSelect.innerHTML = '';
    topicoSelect.innerHTML = '';
    // Preencher novas opções se existir no objeto data
    if (data[selectedValue]) {
        // Preencher Conteúdo
        data[selectedValue].conteudos.forEach(conteudo => {
            const option = document.createElement('option');
            option.value = conteudo.toLowerCase();
            option.textContent = conteudo;
            conteudoSelect.appendChild(option);
        });
    }
    // Obtém o valor selecionado no campo de conteúdo
    const conteudoSelecionado = conteudoSelect.value;
    // Adiciona os tópicos correspondentes, se existirem
    if (topicosPorConteudo[conteudoSelecionado]) {
        // Adicionar os tópicos ao campo de seleção
        topicosPorConteudo[conteudoSelecionado].forEach((topico) => {
            const option = document.createElement("option");
            option.value = topico.toLowerCase().replace(/\s+/g, "-"); // Formata o valor
            option.textContent = topico; // Define o texto visível
            topicoSelect.appendChild(option);
        });
    }
});

conteudoSelect.addEventListener("change", () => {
    // Limpa os tópicos anteriores

    // Obtém o valor selecionado no campo de conteúdo
    const conteudoSelecionado = conteudoSelect.value;
    topicoSelect.innerHTML = '';
    // Adiciona os tópicos correspondentes, se existirem
    if (topicosPorConteudo[conteudoSelecionado]) {
        // Adicionar os tópicos ao campo de seleção
        topicosPorConteudo[conteudoSelecionado].forEach((topico) => {
            const option = document.createElement("option");
            option.value = topico.toLowerCase().replace(/\s+/g, "-"); // Formata o valor
            option.textContent = topico; // Define o texto visível
            topicoSelect.appendChild(option);
        });
    }
});


// Renderiza a questão na tela
function renderizarQuestao(questao) {
    const enunciadoParagrafo = document.querySelector(".enunciado");
    enunciadoParagrafo.innerHTML = questao.enunciado; // Permite HTML no enunciado
    const alternativasDiv = document.querySelector(".alternativas");
    const alternativa = document.querySelectorAll(".alternativa label[for]");
    const enviarButtonContainer = document.querySelector(".enviar");

    document.querySelector(".questao-id").textContent = `${questao.id}`;
    document.querySelector(".banca").textContent = `${questao.banca}`;
    document.querySelector(".ano").textContent = `${questao.ano}`;

    // Renderiza alternativas
    alternativasDiv.innerHTML = ""; // Limpa alternativas anteriores
    questao.alternativas.forEach((alternativa, index) => {
        alternativasDiv.innerHTML += `
            <div class="alternativa">
                <input type="radio" id="alt-${index}" name="radiobutton" value="${String.fromCharCode(65 + index)}">
                <label for="alt-${index}">${alternativa}</label>
            </div>
        `;
    });

    // Mostra a seção da questão
    document.querySelector(".section-question").classList.remove("hide");

    // Garante que o botão "Enviar" fique oculto inicialmente
    enviarButtonContainer.classList.add("hide");

    // Adiciona evento para alternar o botão "Enviar"
    const alternativas = document.querySelectorAll(".alternativa input");
    alternativas.forEach(input => {
        input.addEventListener("change", () => {
            enviarButtonContainer.classList.remove("hide");
        });
    });

    alternativa.forEach((alternative, index) => {
        const input = alternative.previousElementSibling;
        alternative.textContent = questao.alternativa[index];
        input.value = questao.alternativa[index];
        input.checked = false; // Limpa seleção anterior
        input.disabled = false; // Reabilita a seleção
        input.closest(".alternativa").style.backgroundColor = ""; // Reseta estilos
    });

    atualizarBotoesNavegacao();
}

document.addEventListener('DOMContentLoaded', function () {
    const alternativas = document.querySelectorAll('.alternativa');
    const enviarButtonContainer = document.querySelector('.enviar'); // Referência ao botão de envio

    // Adiciona evento de clique para cada alternativa
    alternativas.forEach(alternativa => {
        alternativa.addEventListener('click', function () {
            const input = this.querySelector('input[type="radio"]');
            if (input) {
                input.checked = true; // Marca o input correspondente
                enviarButtonContainer.classList.remove('hide'); // Mostra o botão "Enviar"
            }
        });
    });
});

document.getElementById("envia").addEventListener("click", function () {
    const alternativas = document.querySelectorAll('input[name="radiobutton"]');
    const questaoAtual = questoesFiltradas[questaoAtualIndex];
    let alternativaSelecionada = null;

    // Identifica a alternativa selecionada
    alternativas.forEach((alternativa) => {
        if (alternativa.checked) {
            alternativaSelecionada = alternativa.value;
        }
    });

    if (alternativaSelecionada === null) {
        alert("Por favor, selecione uma alternativa antes de enviar.");
        return;
    }

    // Aplica estilos com base na correção
    alternativas.forEach((alternativa) => {
        const alternativaDiv = alternativa.closest(".alternativa");

        if (alternativa.value === questaoAtual.respostaCorreta) {
            // Se a alternativa for a correta, marca como verde
            alternativaDiv.style.backgroundColor = "green";
        } else if (alternativa.value === alternativaSelecionada) {
            // Se a alternativa marcada for errada, marca como vermelha
            alternativaDiv.style.backgroundColor = "red";
        }
        alternativa.disabled = true; // Bloqueia a interação
    });

    // Oculta o botão "Enviar" após a correção
    document.querySelector(".enviar").classList.add("hide");
});

function filtrarQuestoes() {
    const banca = document.getElementById("num-banca").value.trim();
    const disciplina = document.getElementById("num-disciplina").value.trim();
    const conteudo = document.getElementById("num-conteudo").value.trim();
    const topico = document.getElementById("topico").value.trim();
    const dificuldade = document.getElementById("num-tipologia").value.trim();

    // Verifica se todos os campos estão preenchidos, exceto dificuldade
    if (!banca || !disciplina || !conteudo || !topico) {
        alert("Por favor, preencha todos os filtros corretamente.");
        return;
    }

    // Filtra as questões com base nos critérios
    questoesFiltradas = questoes.filter(questao =>
        (banca === "todos" || questao.banca === banca) &&
        questao.disciplina === disciplina &&
        questao.conteudo === conteudo &&
        questao.topico === topico &&
        (dificuldade === "normal" || questao.dificuldade === dificuldade) // "Todas" inclui qualquer dificuldade
    );

    // Reinicia o índice para a primeira questão filtrada
    questaoAtualIndex = 0;

    if (questoesFiltradas.length > 0) {
        renderizarQuestao(questoesFiltradas[questaoAtualIndex]);
        document.querySelector(".section-question").classList.remove("hide"); // Mostra a seção
    } else {
        alert("Nenhuma questão encontrada com os filtros aplicados.");
        document.querySelector(".section-question").classList.add("hide"); // Oculta a seção
    }

    // Atualiza os botões de navegação
    atualizarBotoesNavegacao();
}


// Atualizar os botões de navegação com base no índice da questão
function atualizarBotoesNavegacao() {
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    // Oculta ou exibe os botões dependendo da posição atual no array filtrado
    prevButton.classList.toggle("hide", questaoAtualIndex === 0);
    nextButton.classList.toggle("hide", questaoAtualIndex === questoesFiltradas.length - 1);
}

document.getElementById("next").addEventListener("click", function () {
    if (questaoAtualIndex < questoesFiltradas.length - 1) {
        questaoAtualIndex++;
        renderizarQuestao(questoesFiltradas[questaoAtualIndex]);
    }
    atualizarBotoesNavegacao();
});

// Função para voltar para a questão anterior filtrada
document.getElementById("prev").addEventListener("click", function () {
    if (questaoAtualIndex > 0) {
        questaoAtualIndex--;
        renderizarQuestao(questoesFiltradas[questaoAtualIndex]);
    }
    atualizarBotoesNavegacao();
});

// Função para exibir a primeira questão
function exibirPrimeiraQuestao() {
    renderizarQuestao(questoes[questaoAtualIndex]);
}

document.getElementById("filtrar").addEventListener("click", filtrarQuestoes);

// Disparar o evento para a seleção inicial
disciplinaSelect.dispatchEvent(new Event('change'));
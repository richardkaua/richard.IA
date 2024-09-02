onst caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é um jovem inventor que sempre sonhou em criar algo que mudasse o mundo. Um dia, enquanto mexe em seu laboratório improvisado em casa, você descobre uma nova forma de energia limpa e barata. Qual é sua primeira reação?",
        alternativas: [
            {
                texto: "Você decide testar a nova tecnologia em sua comunidade para ver como ela pode melhorar a vida das pessoas.",
                afirmacao: "Decidiu agir imediatamente, testando a tecnologia em pequena escala para avaliar seu impacto."
            },
            {
                texto: "Você documenta sua descoberta e começa a pesquisar como pode aprimorá-la antes de apresentá-la ao mundo.",
                afirmacao: "Decidiu aprofundar seus estudos para garantir que a tecnologia fosse o mais eficiente possível antes de divulgá-la."
            }
        ]
    },
    {
        enunciado: "Após os primeiros testes bem-sucedidos, você percebe que a nova fonte de energia tem potencial para revolucionar o mercado. Como você decide avançar com sua invenção?",
        alternativas: [
            {
                texto: "Você forma uma equipe de especialistas para ajudar a desenvolver a tecnologia e torná-la acessível a todos.",
                afirmacao: "Buscou colaboração para expandir e melhorar a tecnologia, tornando-a disponível para o maior número de pessoas."
            },
            {
                texto: "Você se inscreve em uma competição internacional de invenções para ganhar visibilidade e atrair investidores.",
                afirmacao: "Decidiu buscar reconhecimento global para impulsionar o desenvolvimento da tecnologia."
            }
        ]
    },
    {
        enunciado: "Sua invenção começa a ganhar atenção internacional, e você recebe uma oferta para vendê-la a uma grande corporação. O que você faz?",
        alternativas: [
            {
                texto: "Você recusa a oferta e decide continuar desenvolvendo a tecnologia de forma independente para garantir que ela permaneça acessível.",
                afirmacao: "Priorizou a acessibilidade e a ética sobre o lucro, mantendo o controle sobre sua invenção."
            },
            {
                texto: "Você aceita a oferta com a condição de que a corporação se comprometa a manter a tecnologia acessível a todos.",
                afirmacao: "Aceitou a oferta com termos que garantissem a continuidade de sua visão de uma tecnologia acessível e sustentável."
            }
        ]
    },
    {
        enunciado: "Com o sucesso da tecnologia, você se depara com desafios éticos e ambientais que surgem com sua popularização. Como você aborda esses desafios?",
        alternativas: [
            {
                texto: "Você promove uma conferência global para discutir o uso responsável da tecnologia e encontrar soluções para os problemas emergentes.",
                afirmacao: "Buscou um diálogo global para garantir o uso responsável e ético da tecnologia."
            },
            {
                texto: "Você cria um conselho de especialistas para monitorar o impacto da tecnologia e sugerir melhorias contínuas.",
                afirmacao: "Estabeleceu um sistema de supervisão para garantir a melhoria contínua e o uso sustentável da tecnologia."
            }
        ]
    },
    {
        enunciado: "Depois de anos de trabalho árduo, sua tecnologia é adotada globalmente e reconhecida como uma das maiores inovações do século. Como você se sente ao olhar para trás?",
        alternativas: [
            {
                texto: "Você se sente realizado por ter contribuído para um futuro melhor e se dedica a inspirar a próxima geração de inventores.",
                afirmacao: "Sentiu-se realizado e focado em inspirar e capacitar futuros inovadores."
            },
            {
                texto: "Você reflete sobre os desafios enfrentados e se motiva a continuar buscando soluções para os problemas globais.",
                afirmacao: "Usou a retrospectiva dos desafios para se motivar a continuar inovando e resolvendo problemas."
            }
        ]
    },
  ];  

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

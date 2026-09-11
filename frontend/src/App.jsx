import { useState } from 'react'
import './App.css'

const caracteristicas = [
  {
    icone: '🛣️',
    titulo: 'É andarilha',
    descricao: 'Pega a estrada sem rumo e conhece lugares improváveis. E tudo só pelo prazer da aventura. "Viajar?" "Para onde?" "Não sei" "Então vamos!"',
  },
  {
    icone: '🏋️',
    titulo: 'Mutio determinada',
    descricao: 'Não troca o treino de musculação por absolutamente nada. Está cursando sua faculdade de jornalismo. Tem uma agenda cheia, então se quiser um tempo, agende com antecedência!',
  },
  {
    icone: '📚',
    titulo: 'Leitora voraz',
    descricao: 'Devora livros, tem bagagem de sobra pra contar histórias. Então um café é sempre bem-vindo para prosear!',
  },
  {
    icone: '☕',
    titulo: 'Ama o presente',
    descricao: 'Bate papo com as amigas, curte a vida e ama os netos.',
  },
]

const categorias = [
  'Viagens',
  'Liberdade',
  'Amadurecimento',
  'Resenhas de livros',
  'Cotidiano',
]

const tiposPublicacao = ['Todas', 'Crônicas', 'Resenhas', 'Cartas', 'Outros']

const publicacoes = [
  {
    tipo: 'Crônicas',
    classe: 'cronica',
    icone: '✒',
    data: '17 de novembro, 2020',
    titulo: 'Agora ou nunca! Parte 1',
    resumo: 'Sobre abrir a janela, escolher um caminho e descobrir que ainda há muito mundo para ver.',
    conteudo: [
      'Minha avó dizia: "Não queira abarcar o mundo com as pernas". Isso em vez de me frear, surtia um efeito inverso. Ela tinha um ditado popular, cheio de sabedoria, para cada hora do dia, e assim, fui crescendo. Aliás, nos últimos anos, cada vez com mais intensidade, me vem à mente os seus "ditados" cheios de sabedoria. Por que será? Será porque estou me aproximando da idade dela naqueles tempos? Os estudiosos dizem que é isso, quando ficamos idosos, nos lembramos mais dos fatos antigos, as lembranças são do tempo da infância. Continua a pergunta: por que será? isso ainda eles não descobriram...',
      'Hoje, papeando com minha amiga, no café da manhã, falamos de nossas mudanças, de desafios, crenças, essas coisas todas, ao mesmo tempo, com tudo se fundindo num mesmo sentido, dentro de um mesmo enfoque. Falamos de sentimentos controversos, razão e coração, falamos de família, dores e amores. Somos diferentes em tudo, mas, ao mesmo tempo, tão iguais. Mulheres idosas (será?), ou apenas mulheres amadurecidas, na casa dos seus 70 anos, cheias de vigor, pretensas sábias, muitos planos, muita determinação e... pensando bem, nenhum apoio à vista.',
      'Minha mãe não queria chegar aos 60 anos, dizia que não queria envelhecer. O que ela diria, agora, olhando a filha dela? Sou uma garota de 70 anos, com algumas marcas no rosto, é fato, mas cheia de gás. Quando comecei a me surpreender descobrindo coisas nas minhas amigas e conhecidas, vi que algo estava mudando. Olhei mains fundo e vi, incrédula, que estamos vivas, mais que isso, estamos batalhando o nosso dia a dia com vontades. Sim, isso mesmo, "vontades", porque são planos imediatos sim, mas repleto de certeza de poder realiza-los.',
      'Essas celebridades que abundam na mídia (adorei a abundância do Presidente), atrizes, divas, muitas delas, passaram dos 70. Imagine! Só que estou descobrindo isso também entre nós, pobres mortais, de cidades ou periferias. Não é privilégio de Susana Vieira ser gostosa na casa dos 70. Minha amiga Tuca é uma beça mulata que causa torcicolos nos marmanjos. Mas não estou falando dos marmanjos de asa arqueada, curvados sob o peso de sua vida, não. Falo dos marmanjos cheios de vida, e de imaginação...',  
      'Minha amiga, Cida, tem um filho, que fez 40 anos que transa com uma sexagenária (forte, não?). Mas é verdade. Afinal, se a sex...agenária sabe fazer bem feito... por que não? O corpo não muda tanto, tudo, ou quase tudo, reside na cabeça. Sim, descobrimos nesta altura da vida, que sexo é na cabeça, pelo menos, no que diz respeito às mulheres.',
      'Vivi tem um namorado. Ela tem 71, ele não sei, mas qualquer coisa como menos 20 que ela. Cada qual na sua casa, ou, mais moderninho, cada qual no seu quadrado. Vivi é bonita, inteligente, sabe se auto dirigir, isso há algumas décadas. Criou filhos, ajudou com os netos, mas, quando percebeu que estes a estavam perturbando, deu um basta. Outra característica das mulheres de hoje, sabe sair de cena (cena de família), quando a coisa começa a ficar preta.',
      'É a idade da urgência. Mas não urgência ansiosa, nada disso. É o saber que não deve adiar. Não tem mais tempo pra deixar pra depois. O tempo urge, sabemos que não dá pra refazer de outro modo. Então, precisamos escrever a estória o melhor que possamos. Não tem retoques. É só isso.',
      'Mas, voltemos a Vivi. É uma mulher magra, qie faz exercícios 5 vezes na semana. Viúva há cinco anos, talvez 6. Foi assim de repente, mas sem traumas. Ele se foi porque estava na hora. Vivi arrumou um namorado que vive na Conchinha, longe... sabe onde é a Conchinha? Nem eu sei, só sei que ele é de lá.',
    ],
  },
  {
    tipo: 'Resenhas',
    classe: 'resenha',
    icone: '▤',
    data: '29 de julho, 2024',
    titulo: 'Um livro para ler sem pressa',
    resumo: 'Impressões de uma leitura que ficou na cabeça e rendeu boas conversas depois da última página.',
    conteudo: [
      'Esse livro me pegou de surpresa. Não foi por causa de um enredo espetacular, mas pela maneira como ele fêz o mundo parecer mais íntimo, mais humano e, ao mesmo tempo, mais misterioso.',
      'Há páginas que me fizeram rir sozinha, outras que me fizeram parar para pensar duas vezes, e algumas que me trouxeram lembranças que eu achava guardadas em lugar seguro.',
      'Leitura boa é aquela que não se esgota logo na última página. Ela continua sendo conversa, lembrança e companhia depois que o livro fecha.',
    ],
  },
  {
    tipo: 'Cartas',
    classe: 'carta',
    icone: '✉',
    data: '15 de julho, 2024',
    titulo: 'Carta para quem acha que já passou da hora',
    resumo: 'Um lembrete carinhoso de que recomeços não obedecem ao calendário.',
    conteudo: [
      'Querida pessoa, se você está lendo isso, talvez tenha achado que a vida já passou sem deixar espaço para outra chance. Mas a verdade é que a vida é muito mais generosa do que a gente imagina.',
      'Não precisa ser tarde para se reinventar. Pode ser sobre o que você quer aprender, o que quer amar mais, ou o que quer finalmente deixar de lado. O que importa é começar, mesmo que seja sem brilho de estreia.',
      'A vida não pede perfeição. Ela pede presença. E presença, no final das contas, é um jeito de dizer que ainda queremos viver de verdade.',
    ],
  },
  {
    tipo: 'Outros',
    classe: 'outros',
    icone: '✦',
    data: '02 de julho, 2024',
    titulo: 'Pequenas cenas do cotidiano',
    resumo: 'Anotações, memórias e ideias que merecem um lugar para continuar existindo.',
    conteudo: [
      'O cotidiano é cheio de pequenos tesouros que passam invisíveis se a gente não parar para enxergá-los. Uma panela de café, uma conversa de corredor, um sol bonito chegando na janela.',
      'Essas cenas parecem sem importância quando acontecem, mas aos poucos se acumulam e formam a nossa memória mais verdadeira. É nelas que mora a vida em sua forma mais simples e mais bonita.',
      'Por isso vale guardar as coisas pequenas: elas são as partes mais sinceras da história de cada pessoa.',
    ],
  },
]

function App() {
  const [tipoSelecionado, setTipoSelecionado] = useState('Todas')
  const [publicacaoSelecionada, setPublicacaoSelecionada] = useState(null)

  const publicacoesVisiveis = tipoSelecionado === 'Todas'
    ? publicacoes
    : publicacoes.filter((publicacao) => publicacao.tipo === tipoSelecionado)

  const publicacaoAtual = publicacoes.find((publicacao) => publicacao.titulo === publicacaoSelecionada?.titulo) ?? null

  return (
    <>
      <header className="cabecalho">
        <span className="logo">Escrito por Silvia Lúcia</span>
        <nav className="nav">
          <a href="#">Início</a>
          <a href="#historias">Histórias</a>
          <a href="#sobre">Sobre</a>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero">
          <h1 className="hero-titulo">
            Agora ou Nunca
          </h1>
          <p className="hero-subtitulo">
            Relatos sinceros, levemente debochados e sem filtro sobre liberdade,<br></br>
            amadurecimento, viagens, livros e as dores e delícias do cotidiano.
          </p>
          <p className="hero-assinatura">— Nunca é tarde! —</p>
        </section>

        {publicacaoAtual ? (
          <section id="historias" className="historias">
            <div className="publicacao-detalhe">
              <button
                type="button"
                className="botao-voltar"
                onClick={() => setPublicacaoSelecionada(null)}
              >
                ← Voltar para histórias
              </button>

              <article className="publicacao-detalhe-card">
                <div className="publicacao-topo">
                  <span className="publicacao-icone" aria-hidden="true">{publicacaoAtual.icone}</span>
                  <span className="publicacao-tipo">{publicacaoAtual.tipo}</span>
                </div>

                <time className="publicacao-data">{publicacaoAtual.data}</time>
                <h2 className="detalhe-titulo">{publicacaoAtual.titulo}</h2>

                {publicacaoAtual.conteudo.map((paragrafo) => (
                  <p key={paragrafo} className="detalhe-texto">{paragrafo}</p>
                ))}
              </article>
            </div>
          </section>
        ) : (
          <section id="historias" className="historias">
            <div className="historias-cabecalho">
              <p className="eyebrow">Sinta-se em casa</p>
              <h2 className="secao-titulo-vintage">Histórias para guardar</h2>
              <p className="secao-subtitulo-cursive">
                Crônicas, cartas, resenhas e outras coisas que pedem para ser escritas.
              </p>
            </div>

            <div className="filtros-publicacoes" aria-label="Filtrar publicações por tipo">
              {tiposPublicacao.map((tipo) => (
                <button
                  key={tipo}
                  type="button"
                  className={`filtro-publicacao ${tipoSelecionado === tipo ? 'filtro-publicacao-ativo' : ''}`}
                  onClick={() => setTipoSelecionado(tipo)}
                  aria-pressed={tipoSelecionado === tipo}
                >
                  {tipo}
                </button>
              ))}
            </div>

            <div className="publicacoes-grid">
              {publicacoesVisiveis.map((publicacao) => (
                <article key={publicacao.titulo} className={`publicacao publicacao-${publicacao.classe}`}>
                  <div className="publicacao-topo">
                    <span className="publicacao-icone" aria-hidden="true">{publicacao.icone}</span>
                    <span className="publicacao-tipo">{publicacao.tipo}</span>
                  </div>
                  <time className="publicacao-data">{publicacao.data}</time>
                  <h3>{publicacao.titulo}</h3>
                  <p>{publicacao.resumo}</p>
                  <button
                    type="button"
                    className="post-link botao-leitura"
                    onClick={() => setPublicacaoSelecionada(publicacao)}
                  >
                    Ler publicação <span aria-hidden="true">→</span>
                  </button>
                </article>
              ))}
            </div>
          </section>
        )}
        <section id="sobre" className="sobre">
          <div className="sobre-caixa">
            <h2>Quem é Silvia Lúcia?</h2>
            <p>
              Uma jovem de 80 anos que decidiu que já está na hora de mostrar
              sua escrita para o mundo. Depois de décadas no anonimato como{' '}
              <em>ghostwriter</em>, a escritora finalmente se apresenta com algo 
              que seja "mais a sua cara."
            </p>
          </div>
        </section>
        <section id="ela" className="ela">
          <h2 className="secao-titulo">Quatro coisas sobre Dona Silu</h2>
          <div className="cards-grid">
            {caracteristicas.map((item) => (
              <div key={item.titulo} className="card">
                <span className="card-icone">{item.icone}</span>
                <h3 className="card-titulo">{item.titulo}</h3>
                <p className="card-texto">{item.descricao}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="temas" className="temas">
          <h2 className="secao-titulo">O que você vai encontrar aqui?</h2>
          <div className="categorias">
            {categorias.map((categoria) => (
              <span key={categoria} className="tag">
                {categoria}
              </span>
            ))}
          </div>
        </section>
      </main>
      <footer className="rodape">
        <p className="hero-assinatura-footer">Agora ou Nunca · Nunca é tarde!</p>
        <br></br>
        <p className="eyebrow">Com carinho para você, vó! </p>
      </footer>
    </>
  )
}

export default App

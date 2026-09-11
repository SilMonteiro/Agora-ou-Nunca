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
    titulo: 'Agora ou nunca! - Parte 1',
    resumo: 'Refletindo sobre o envelhecimento ativo, ressignificando a maturidade feminina longe de estereótipos ultrapassados.',
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
    tipo: 'Crônicas',
    classe: 'cronica',
    icone: '✒',
    data: '18 de novembro, 2020',
    titulo: 'Vintage',
    resumo: 'Assumindo a etiqueta "vintage" e defendendo o direito de envelhecer com autonomia, voz ativa e sem filtros',
    conteudo: [
      'Lembrei meu falecido amigo. Como foi assuastador pra mim, antiga e... quase conservadora, ouvi-lo dizer em alto e bom som: "tem que mandar Fulano pra aquele lugar!" descobri, de uma hora pra outra, como os idosos se dão o direito, numa boa, de dizer o que lhes vem a cabeça, nas horas mais impróprias. Eu disse impróprias? Não tem nada disso, aliás, não tem hora. Como não tem hora para esculhambar gente presunçosa ou simplesmente dar um chute numa latinha no meio da rua. Direito adquirido pelas décadas vividas.',
      'Vi, ouvi, entendi. Naquela época, eu ainda não era o que pode se chamar de idosa. O tempo passou. Eis que aqui estou, neste mesmo lugar, entenda-se por mesmo lugar, a mesma fase da vida, falando uma palavrinha ou outra, com plena consciência, só para desopilar meu fígado. Como faz bem um palavrãozinho em determinados momentos! A gente fica leve, mesmo sendo a palavra pesada. Não temos nossas mães pra nos repreender, nem professor chato para nos punir. Somos nossos próprios juízes. Que bom!',
      'Tem gente por aí que, ainda, não se deu conta que somos uma turma privilegiada. Isso mesmo, temos o privilégio dos guichês bancários e outros, temos a prioridade (nem sempre respeitada), aqui e ali. Muito embora essas filas sejam mais longas e leeentas que as demais. Ora essa, o passo diminui, algumas vezes, aaalguns de nós pensa mais devagar, erra ou esquece a senha, enfim, faz parte do pacote que se faz jus quando as décadas se acumulam, quando chega a segunda adolescência...',
      'E aí? Ficar macambuzio, entrar em depressão? Nãaaoo. Entrar em ação, dizer o que pensa, aquilo que se deixa de dizer quando se é mais jovem, claro, supreender o jovem incauto à espreita. Infelizmente, alguns jovens (quarentões, cinquentões), mal informados acerca dos "novos idosos", se arrogam o direito de nos colocar numa prateleira, aquela, das coisas usadas... segundo plano pra isso, terceiro plano pra aquilo, outro, e por aí vai... hei, espera aí, afinal, pra ele - pré coroa, apavorado, falta menos do que pensa pra chegar aqui!',
      'Veja bem, somos os novos idosos, somos uma classe (?) em transformação, vivendo, amando, produzindo ainda, desbravando esse mundo velho sem porteira, como diria minha avó. A propósito, alguém aí sabe o que é uma porteira? Explico da próxima.',
      'Pois saibam queridos balzaqueanos (sabem o que é?) da era tecnológica, estamos aqui para sermos amados e respeitados. Se não der, podemos negociar: amor passa a ser facultativo mas respeito é obrigatório. Nunca nos chame de velhos. Podemos ser idosos. Na verdade, eu me sinto vintage.',
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
  const [paginaAtual, setPaginaAtual] = useState('inicio')
  const [tipoSelecionado, setTipoSelecionado] = useState('Todas')
  const [publicacaoSelecionada, setPublicacaoSelecionada] = useState(null)

  const publicacoesVisiveis = tipoSelecionado === 'Todas'
    ? publicacoes
    : publicacoes.filter((publicacao) => publicacao.tipo === tipoSelecionado)

  const publicacoesDaPagina = paginaAtual === 'publicacoes'
    ? publicacoesVisiveis
    : publicacoesVisiveis.slice(0, 2)

  const abrirPublicacoes = () => {
    setPaginaAtual('publicacoes')
    setPublicacaoSelecionada(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const voltarParaInicio = () => {
    setPaginaAtual('inicio')
    setPublicacaoSelecionada(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const publicacaoAtual = publicacoes.find((publicacao) => publicacao.titulo === publicacaoSelecionada?.titulo) ?? null

  return (
    <>
      <header className="cabecalho">
        <span className="logo">Escrito por Silvia Lúcia</span>
        <nav className="nav">
          <a href="#hero" onClick={voltarParaInicio}>Início</a>
          <a href="#historias" onClick={abrirPublicacoes}>Histórias</a>
          <a href="#sobre">Sobre</a>
        </nav>
      </header>

      <main>
        {paginaAtual === 'inicio' && !publicacaoAtual && (
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
        )}

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
              <h2 className="secao-titulo-vintage">
                {paginaAtual === 'publicacoes' ? 'Todas as publicações' : 'Histórias para guardar'}
              </h2>
              <p className="secao-subtitulo-cursive">
                {paginaAtual === 'publicacoes'
                  ? 'Leia tudo o que já foi publicado por aqui.'
                  : 'Crônicas, cartas, resenhas e outras coisas que pedem para ser escritas.'}
              </p>
            </div>

            {paginaAtual === 'publicacoes' && (
              <button type="button" className="botao-voltar botao-voltar-lista" onClick={voltarParaInicio}>
                ← Voltar para o início
              </button>
            )}

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
              {publicacoesDaPagina.map((publicacao) => (
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

            {paginaAtual === 'inicio' && publicacoes.length > 2 && (
              <button
                type="button"
                className="botao-todas-publicacoes"
                onClick={abrirPublicacoes}
                aria-label="Ver todas as publicações"
              >
                <span aria-hidden="true">→</span>
              </button>
            )}
          </section>
        )}
        {paginaAtual === 'inicio' && !publicacaoAtual && <section id="sobre" className="sobre">
          <div className="sobre-caixa">
            <h2>Quem é Silvia Lúcia?</h2>
            <p>
              Uma jovem de 80 anos que decidiu que já está na hora de mostrar
              sua escrita para o mundo. Depois de décadas no anonimato como{' '}
              <em>ghostwriter</em>, a escritora finalmente se apresenta com algo 
              que seja "mais a sua cara."
            </p>
          </div>
        </section>}
        {paginaAtual === 'inicio' && !publicacaoAtual && <section id="ela" className="ela">
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
        </section>}
        {paginaAtual === 'inicio' && !publicacaoAtual && <section id="temas" className="temas">
          <h2 className="secao-titulo">O que você vai encontrar aqui?</h2>
          <div className="categorias">
            {categorias.map((categoria) => (
              <span key={categoria} className="tag">
                {categoria}
              </span>
            ))}
          </div>
        </section>}
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

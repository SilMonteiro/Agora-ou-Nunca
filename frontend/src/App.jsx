import { useState } from 'react'
import './App.css'

const caracteristicas = [
  {
    icone: '🛣️',
    titulo: 'É andarilha',
    descricao: 'Pega a estrada sem rumo e conhece lugares improváveis. E tudo só pelo prazer da aventura.',
  },
  {
    icone: '🏋️',
    titulo: 'Mutio determinada',
    descricao: 'Não troca o treino de musculação por absolutamente nada. Tem uma agenda cheia, então se quiser um tempo, agende com antecedência!',
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
    data: '12 de agosto, 2024',
    titulo: 'A vida não espera a gente se decidir',
    resumo: 'Sobre abrir a janela, escolher um caminho e descobrir que ainda há muito mundo para ver.',
  },
  {
    tipo: 'Resenhas',
    classe: 'resenha',
    icone: '▤',
    data: '29 de julho, 2024',
    titulo: 'Um livro para ler sem pressa',
    resumo: 'Impressões de uma leitura que ficou na cabeça e rendeu boas conversas depois da última página.',
  },
  {
    tipo: 'Cartas',
    classe: 'carta',
    icone: '✉',
    data: '15 de julho, 2024',
    titulo: 'Carta para quem acha que já passou da hora',
    resumo: 'Um lembrete carinhoso de que recomeços não obedecem ao calendário.',
  },
  {
    tipo: 'Outros',
    classe: 'outros',
    icone: '✦',
    data: '02 de julho, 2024',
    titulo: 'Pequenas cenas do cotidiano',
    resumo: 'Anotações, memórias e ideias que merecem um lugar para continuar existindo.',
  },
]

function App() {
  const [tipoSelecionado, setTipoSelecionado] = useState('Todas')
  const publicacoesVisiveis = tipoSelecionado === 'Todas'
    ? publicacoes
    : publicacoes.filter((publicacao) => publicacao.tipo === tipoSelecionado)

  return (
    <>
      <header className="cabecalho">
        <span className="logo">Escrito por Silvia Lúcia</span>
        <nav className="nav">
          <a href="#">Início</a>
          <a href="#historias">Histórias</a>
          <a href="#">Livros</a>
          <a href="#">Sobre</a>
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
        <section id="historias" className="historias">
          <div className="historias-cabecalho">
            <p className="eyebrow">Caderno da Silvia Lúcia</p>
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
                <a className="post-link" href={`#${publicacao.classe}`}>
                  Ler publicação <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </section>
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
        <p>Agora ou Nunca · Nunca é tarde!</p>
        <br></br>
        <p className="eyebrow">Com carinho para você, vó! </p>
      </footer>
    </>
  )
}

export default App

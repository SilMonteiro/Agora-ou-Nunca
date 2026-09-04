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

function App() {
  return (
    <>
      <header className="cabecalho">
        <span className="logo">Escrito por Silvia Lúcia</span>
        <nav className="nav">
          <a href="#">Início</a>
          <a href="#">Histórias</a>
          <a href="#">Livros</a>
          <a href="#">Sobre</a>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero">
          <p className="eyebrow">Com carinho para minha, vó! </p>
          <h1 className="hero-titulo">
            Agora ou Nunca
          </h1>
          <p className="hero-subtitulo">
            Relatos sinceros, levemente debochados e sem filtro sobre liberdade,
            amadurecimento, viagens, livros e as dores e delícias do cotidiano.
          </p>
          <p className="hero-assinatura">— Nunca é tarde! —</p>
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
      </footer>
    </>
  )
}

export default App

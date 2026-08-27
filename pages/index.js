import Head from 'next/head';

const cargos = [
  ['Fotógrafo Técnico-Pericial', '157 vagas'],
  ['Auxiliar de Necropsia', '105 vagas'],
  ['Atendente de Necrotério Policial', '84 vagas'],
  ['Desenhista Técnico-Pericial', '51 vagas']
];

const beneficios = [
  ['Apostilas por cargo', 'Conteúdo organizado para cada uma das quatro carreiras da Polícia Científica/SP.'],
  ['Caderno de 500 questões', 'Material complementar para transformar teoria em treino de prova.'],
  ['Plano de estudos', 'Uma trilha simples para distribuir matérias e manter constância.'],
  ['Atualização pós-edital', 'O material poderá ser ajustado ao conteúdo oficial quando o edital for publicado.']
];

export default function Home({ hero, logo }) {
  function enviarContato(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const nome = (fd.get('nome') || '').trim();
    const whats = (fd.get('whats') || '').trim();
    const email = (fd.get('email') || '').trim();
    const assunto = encodeURIComponent(`Interesse no Combo Científica - ${nome}`);
    const corpo = encodeURIComponent(`Nome: ${nome}\nWhatsApp: ${whats}\nE-mail: ${email}\n\nInteresse: Combo Científica 2026`);
    window.location.href = `mailto:sentinela@bibliotecasentinela.shop?subject=${assunto}&body=${corpo}`;
  }

  return <>
    <Head>
      <title>Biblioteca Sentinela | Combo Científica 2026</title>
      <meta name="description" content="Materiais de preparação pré-edital para os cargos da Polícia Científica de São Paulo." />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="theme-color" content="#071014" />
    </Head>

    <header className="header">
      <div className="container nav">
        <a className="brand" href="#inicio" aria-label="Biblioteca Sentinela">
          <img src={logo} alt="" />
          <div><strong>Biblioteca</strong><span>Sentinela</span></div>
        </a>
        <nav>
          <a href="#cargos">Cargos</a>
          <a href="#inclui">O que inclui</a>
          <a href="#faq">Dúvidas</a>
          <a className="navCta" href="#contato">Quero meu acesso</a>
        </nav>
      </div>
    </header>

    <main>
      <section className="hero" id="inicio">
        <img className="heroImage" src={hero} alt="Profissional da área pericial" />
        <div className="heroShade" />
        <div className="container heroContent">
          <div className="heroCopy">
            <span className="eyebrow">Biblioteca Sentinela • Edição 2026</span>
            <h1>Combo<br/><em>Científica</em></h1>
            <p className="lead">Preparação pré-edital para quatro carreiras da Polícia Científica de São Paulo, com conteúdo organizado para estudar sem se perder.</p>
            <div className="stat"><b>397</b><span>vagas previstas<br/>em São Paulo</span></div>
            <div className="heroActions">
              <a className="primary" href="#contato">Quero meu acesso</a>
              <a className="secondary" href="#cargos">Ver os cargos</a>
            </div>
          </div>
          <div className="heroRoles">
            <div className="miniTitle">Cargos incluídos</div>
            {cargos.map(([nome, vagas]) => <div className="roleLine" key={nome}><span>{nome}</span><b>{vagas}</b></div>)}
            <small>Material pré-edital. Informações sujeitas ao edital oficial.</small>
          </div>
        </div>
      </section>

      <section className="section intro" id="cargos">
        <div className="container">
          <div className="sectionHead"><span>ESTUDE POR CARGO</span><h2>Um combo. Quatro caminhos.</h2><p>Em vez de um PDF genérico, o conteúdo é organizado para as funções que concentram as vagas previstas da Científica/SP.</p></div>
          <div className="cargoGrid">
            {cargos.map(([nome, vagas], i) => <article className="cargoCard" key={nome}>
              <div className="cardNo">0{i+1}</div><h3>{nome}</h3><p>{vagas}</p><div className="line" />
              <span>Material direcionado ao cargo</span>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section darkBlock" id="inclui">
        <div className="container split">
          <div className="splitTitle"><span>O QUE VOCÊ RECEBE</span><h2>Mais do que uma apostila solta.</h2><p>O projeto foi pensado para reunir teoria, treino e organização em um único caminho de estudo.</p></div>
          <div className="benefitGrid">
            {beneficios.map(([t,d], i) => <article className="benefit" key={t}><b>{String(i+1).padStart(2,'0')}</b><div><h3>{t}</h3><p>{d}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="section method">
        <div className="container methodGrid">
          <div className="methodVisual"><img src={logo} alt="Símbolo Biblioteca Sentinela" /></div>
          <div className="methodText"><span>PADRÃO SENTINELA</span><h2>Visual limpo. Conteúdo direto. Estudo com direção.</h2><p>O foco é transformar um volume grande de matérias em um material mais claro, com hierarquia visual e organização para revisão.</p>
            <ul><li>Conteúdo técnico em linguagem objetiva</li><li>Separação por cargo e assunto</li><li>Material em PDF para estudo</li><li>Estrutura pensada para revisão</li></ul>
          </div>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="container"><div className="sectionHead compact"><span>DÚVIDAS RÁPIDAS</span><h2>Antes de começar</h2></div>
          <div className="faqGrid">
            <details open><summary>O material já segue um edital de 2026?</summary><p>Não. O projeto é pré-edital. A preparação parte das matérias e referências disponíveis antes da publicação do edital oficial.</p></details>
            <details><summary>Quais cargos fazem parte do combo?</summary><p>Fotógrafo Técnico-Pericial, Auxiliar de Necropsia, Atendente de Necrotério Policial e Desenhista Técnico-Pericial.</p></details>
            <details><summary>O conteúdo será atualizado?</summary><p>A proposta é revisar o material após a publicação do edital, ajustando o que for necessário ao conteúdo oficial.</p></details>
            <details><summary>Como eu recebo as informações de acesso?</summary><p>Preencha o formulário abaixo. A Biblioteca Sentinela retorna com as orientações de compra e acesso ao material.</p></details>
          </div>
        </div>
      </section>

      <section className="contact" id="contato">
        <div className="container contactGrid">
          <div className="contactCopy"><span>COMECE AGORA</span><h2>Quer estudar para a Científica/SP com um material mais organizado?</h2><p>Deixe seus dados e receba as informações do Combo Científica.</p><div className="contactBadge">Biblioteca Sentinela <b>2026</b></div></div>
          <form className="form" onSubmit={enviarContato}>
            <label>Nome<input name="nome" required placeholder="Seu nome" /></label>
            <label>WhatsApp<input name="whats" inputMode="tel" placeholder="(00) 00000-0000" /></label>
            <label>E-mail<input name="email" type="email" required placeholder="voce@email.com" /></label>
            <button type="submit">Quero receber as informações</button>
            <small>Ao enviar, seu aplicativo de e-mail será aberto para concluir o contato.</small>
          </form>
        </div>
      </section>
    </main>

    <footer><div className="container footerInner"><div className="brand footerBrand"><img src={logo} alt=""/><div><strong>Biblioteca</strong><span>Sentinela</span></div></div><p>© 2026 Biblioteca Sentinela • CNPJ 60.643.918/0001-03</p></div></footer>
    <a className="mobileCta" href="#contato">Quero meu acesso</a>
  </>;
}

export async function getStaticProps() {
  const fs = require('fs');
  const path = require('path');
  const read = (name, count) => Array.from({length: count}, (_, i) => fs.readFileSync(path.join(process.cwd(), 'asset-chunks', `${name}-${i}.txt`), 'utf8')).join('');
  return { props: {
    hero: `data:image/jpeg;base64,${read('hero', 4)}`,
    logo: `data:image/png;base64,${read('logo', 3)}`
  }};
}

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import {doctor,publications} from '@/lib/site';

export const metadata={
  title:'Publicações Científicas',
  description:'Publicações científicas e capítulos de livros da Dra. Claudia Stein Gomes nas áreas vascular, linfologia e pesquisa médica.',
  alternates:{canonical:'/publicacoes'}
};

const bookChapters=[
  {
    n:'1.',
    text:'GOMES, C. S.; AZEVEDO JUNIOR, W. F.; COUTO, E. M. CIRURGIA DERIVATIVA NO TRATAMENTO DO LINFEDEMA. LINFOLOGIA DIAGNÓSTICO, CLÍNICA E TRATAMENTO. 1ed. SAO CAETANO DO SUL: YENDIS, 2009, v. 1, p. 193-200.'
  },
  {
    n:'2.',
    text:'PICHETH, F. S.; GOMES, C. S. Classificação dos Linfedemas. In: Thomaz JB; Belczak CEQ. (Org.). Tratado de Flebologia e Linfologia. Rio de Janeiro: Rubio, 2006, v. 1, p. 693-695.'
  }
];

export default function Publicacoes(){
  return <><Header/><main>
    <section className="page-hero">
      <div className="shell narrow">
        <Breadcrumbs items={[{label:'Publicações'}]}/>
        <span className="eyebrow">Produção científica</span>
        <h1>Pesquisa e conhecimento ao longo da trajetória médica.</h1>
        <p>Seleção de artigos publicados em periódicos nacionais e internacionais.</p>
        <p style={{marginTop:'18px'}}>
          Para mais informações, acesse o perfil do{' '}
          <a href={doctor.doctoralia} target="_blank" rel="noreferrer" style={{textDecoration:'underline',textUnderlineOffset:'4px'}}>Doctoralia</a>
          {' '}ou o{' '}
          <a href={doctor.lattes} target="_blank" rel="noreferrer" style={{textDecoration:'underline',textUnderlineOffset:'4px'}}>Currículo Acadêmico Lattes</a>.
        </p>
      </div>
    </section>

    <section className="content-section">
      <div className="shell pub-list">
        {publications.map((p,i)=><article id={`pub-${i+1}`} key={p.title} className="publication">
          <span>{p.year}</span>
          <div><h2>{p.title}</h2><p>{p.authors}</p><strong>{p.journal}</strong></div>
        </article>)}
      </div>

      <div className="shell" style={{marginTop:'64px'}}>
        <div className="section-heading" style={{marginBottom:'24px'}}>
          <div><span className="eyebrow">Livros</span><h2>Capítulos de livros publicados</h2></div>
        </div>
        <div className="pub-list">
          {bookChapters.map((chapter)=><article className="publication" key={chapter.n}>
            <span>{chapter.n}</span>
            <div><p style={{fontSize:'1.02rem',lineHeight:'1.75',margin:0}}>{chapter.text}</p></div>
          </article>)}
        </div>
      </div>
    </section>
  </main><Footer/></>
}

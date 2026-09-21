import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {doctor} from '@/lib/site';

export const metadata={
  title:'Teleconsulta em Cirurgia Vascular',
  description:'Teleconsulta com a Dra. Claudia Stein Gomes para conversa inicial, revisão de exames, acompanhamento e organização de próximos passos quando a modalidade for adequada ao caso.',
  alternates:{canonical:'/teleconsulta'}
};

export default function Page(){
  return <><Header/><main>
    <section className="page-hero editorial">
      <div className="shell treatment-hero-grid">
        <div>
          <span className="eyebrow">Teleconsulta</span>
          <h1>Orientação vascular também à distância, quando o caso permite.</h1>
          <p>A teleconsulta pode ser útil para conversa inicial, revisão de exames, acompanhamento e até para marcar uma cirurgia de varizes à distância. Alguns diagnósticos e decisões, porém, exigem exame físico e devem ser realizados presencialmente.</p>
          <a className="btn primary" href={doctor.whatsappUrl} target="_blank" rel="noreferrer">Solicitar teleconsulta</a>
        </div>
        <div className="tele-visual"><span>ONLINE</span><strong>Consulta médica<br/>com contexto.</strong><p>CRM-PR 16064 · RQE 9991</p></div>
      </div>
    </section>
    <section className="content-section">
      <div className="shell article-grid">
        <article className="article">
          <h2>Quando pode ajudar?</h2>
          <ul>
            <li>Conversa inicial e organização das principais queixas.</li>
            <li>Revisão de exames e acompanhamento da evolução de sintomas já conhecidos.</li>
            <li>Orientações de seguimento e organização dos próximos passos.</li>
            <li>Em situações apropriadas, até para marcar uma cirurgia de varizes à distância.</li>
          </ul>
          <h2>Quando o presencial é necessário?</h2>
          <p>Alguns diagnósticos e decisões exigem exame físico e devem ser realizados presencialmente. Quando houver necessidade de procedimento presencial, a médica pode orientar essa transição durante a teleconsulta.</p>
          <div className="medical-note">
            <strong>Segurança primeiro</strong>
            <p>Teleconsulta não substitui atendimento de urgência. Em caso de sintomas agudos e importantes, procure um Pronto Socorro.</p>
          </div>
        </article>
        <aside className="aside-card">
          <span className="eyebrow">Agendamento</span>
          <h2>Fale com a equipe.</h2>
          <p>Confirme disponibilidade, envio de exames e se a modalidade é adequada à sua necessidade.</p>
          <a className="btn primary" href={doctor.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
        </aside>
      </div>
    </section>
  </main><Footer/></>
}

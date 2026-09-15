import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import {doctor,clinicPhotos} from '@/lib/site';

export const metadata={title:'Contato e Agendamento',description:'Agende sua avaliação com a Dra. Claudia Stein Gomes na Gênese Clínica, em Curitiba, por WhatsApp ou Doctoralia.',alternates:{canonical:'/contato'}};

export default function Contato(){
  return <><Header/><main>
    <section className="page-hero"><div className="shell narrow"><Breadcrumbs items={[{label:'Contato'}]}/><span className="eyebrow">Agendamento</span><h1>Entre em contato com a Gênese Clínica.</h1><p>Atendimentos às terças e quintas, em Curitiba. Agendamentos pelo WhatsApp ou Doctoralia.</p></div></section>
    <section className="content-section"><div className="shell contact-grid">
      <div className="contact-card"><span className="eyebrow">WhatsApp</span><h2>{doctor.whatsapp}</h2><p>Canal direto para solicitar agendamento e informações administrativas.</p><a className="btn primary" href={doctor.whatsappUrl} target="_blank" rel="noreferrer">Abrir WhatsApp</a></div>
      <div className="contact-card"><span className="eyebrow">Doctoralia</span><h2>Agendamento online</h2><p>Consulte o perfil profissional e a disponibilidade de agenda.</p><a className="btn secondary dark" href={doctor.doctoralia} target="_blank" rel="noreferrer">Ver Doctoralia</a></div>
      <div className="contact-card full"><span className="eyebrow">Gênese Clínica</span><h2>Rua Visconde de Nacar, 656 — Mercês</h2><p>Curitiba — Paraná · CEP 80410-200</p><p>Telefone: <a href="tel:+554132249470">{doctor.phone}</a><br/>E-mail: <a href={`mailto:${doctor.email}`}>{doctor.email}</a></p><div style={{display:'flex',gap:'12px',flexWrap:'wrap',margin:'22px 0 20px'}}><a href={doctor.maps} target="_blank" rel="noreferrer" style={{flex:'1 1 260px',overflow:'hidden',borderRadius:'18px',border:'1px solid rgba(39,26,32,.13)'}}><img src={clinicPhotos.exterior} alt="Área externa da Gênese Clínica em Curitiba" style={{width:'100%',height:'220px',objectFit:'cover'}}/></a><a href={doctor.maps} target="_blank" rel="noreferrer" style={{flex:'1 1 260px',overflow:'hidden',borderRadius:'18px',border:'1px solid rgba(39,26,32,.13)'}}><img src={clinicPhotos.reception} alt="Ambiente da Gênese Clínica em Curitiba" style={{width:'100%',height:'220px',objectFit:'cover'}}/></a></div><a className="btn secondary dark" href={doctor.maps} target="_blank" rel="noreferrer">Ver Gênese Clínica no Google Maps</a></div>
    </div></section>
  </main><Footer/></>
}

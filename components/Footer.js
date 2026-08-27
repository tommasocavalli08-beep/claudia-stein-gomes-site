import Link from 'next/link';
import {doctor} from '@/lib/site';

export default function Footer(){return <footer className="footer">
  <div className="shell footer-grid">
    <div>
      <div className="brand footer-brand"><span className="brand-mark">CS</span><span><strong>Dra. Claudia Stein Gomes</strong><small>{doctor.crm} · {doctor.rqe}</small></span></div>
      <p>Cirurgia vascular, flebologia e linfologia em Curitiba.</p>
    </div>
    <div><h3>Navegação</h3><Link href="/sobre">Sobre</Link><Link href="/#tratamentos">Tratamentos</Link><Link href="/publicacoes">Publicações</Link><Link href="/contato">Contato</Link></div>
    <div><h3>Atendimento</h3><p>Gênese Clínica</p><p>Terças e quintas</p><a href={doctor.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp {doctor.whatsapp}</a></div>
    <div><h3>Endereço</h3><p>{doctor.address}</p><a href={doctor.maps} target="_blank" rel="noreferrer">Abrir no Google Maps</a></div>
  </div>
  <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Dra. Claudia Stein Gomes.</span><Link href="/politica-de-privacidade">Política de Privacidade</Link><span>Conteúdo informativo. A indicação de tratamento depende de avaliação médica individualizada.</span></div>
  <div className="shell" style={{display:'flex',justifyContent:'center',padding:'18px 0 2px',borderTop:'1px solid rgba(255,255,255,.08)'}}>
    <a href="https://www.nova-web.it/" target="_blank" rel="noopener noreferrer" aria-label="Site desenvolvido pela NovaWeb" title="NovaWeb" style={{display:'inline-flex',alignItems:'center',gap:'8px',padding:'6px 10px',border:'1px solid rgba(255,255,255,.13)',borderRadius:'999px',fontSize:'9px',letterSpacing:'.12em',textTransform:'uppercase',color:'rgba(255,255,255,.72)'}}>
      <span>Made by</span>
      <span style={{display:'inline-flex',alignItems:'center',background:'#000',borderRadius:'999px',padding:'4px 10px'}}><img src="https://www.nova-web.it/Logo-scritta-vet.png" alt="NovaWeb" width="72" height="20" loading="lazy" decoding="async" style={{display:'block',width:'72px',height:'auto'}} /></span>
    </a>
  </div>
</footer>}

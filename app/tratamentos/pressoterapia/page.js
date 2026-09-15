import TreatmentPage from '@/components/TreatmentPage';

export const metadata={
  title:'Pressoterapia no Linfedema e Lipedema em Curitiba',
  description:'Pressoterapia como recurso complementar no cuidado do linfedema e do lipedema, com avaliação individualizada em Curitiba.',
  alternates:{canonical:'/tratamentos/pressoterapia'}
};

export default function Page(){
  return <TreatmentPage
    slug="pressoterapia"
    title="Pressoterapia no Linfedema e Lipedema"
    kicker="Linfedema e lipedema"
    intro="Compressão pneumática sequencial utilizada como recurso complementar para auxiliar no controle do inchaço e de sintomas em casos selecionados."
    image="/media/pressoterapia.svg"
  >
    <h2>Como funciona no lipedema?</h2>
    <p>No lipedema, condição crônica caracterizada pela distribuição desproporcional de tecido adiposo e frequentemente associada à dor e à hipersensibilidade, é importante esclarecer: a pressoterapia não elimina a gordura do lipedema. Ela pode, porém, ser utilizada como recurso complementar para aliviar sintomas em pacientes selecionadas.</p>
    <ul>
      <li><strong>Alívio da dor e da hipersensibilidade:</strong> pode contribuir para reduzir o desconforto em alguns casos.</li>
      <li><strong>Controle do componente líquido:</strong> quando há edema ou retenção hídrica associada, a compressão pneumática sequencial pode ajudar no deslocamento do excesso de líquido.</li>
      <li><strong>Sensação de leveza e mobilidade:</strong> a redução do inchaço e do desconforto pode favorecer a sensação de pernas mais leves e facilitar as atividades do dia a dia.</li>
    </ul>

    <h2>Como funciona no linfedema?</h2>
    <p>No linfedema, em que há falha ou comprometimento do sistema linfático com acúmulo de líquido e inchaço crônico em uma região do corpo — geralmente pernas ou braços —, a pressoterapia pode integrar o tratamento descongestivo quando houver indicação.</p>
    <ul>
      <li><strong>Mobilização do acúmulo de líquido:</strong> a compressão pneumática sequencial pode favorecer o deslocamento de fluidos ao longo do membro.</li>
      <li><strong>Redução do edema:</strong> pode auxiliar na diminuição do volume e da sensação de peso do membro afetado.</li>
      <li><strong>Cuidado do tecido:</strong> quando integrada a um plano terapêutico completo, pode contribuir para o controle da estase e do endurecimento progressivo dos tecidos.</li>
    </ul>

    <div className="info-box">
      <strong>Tratamento individualizado</strong>
      <p>A pressoterapia não substitui a avaliação médica, a compressão adequada, os exercícios, os cuidados com a pele ou a fisioterapia especializada. Pressão, duração e frequência devem ser definidas conforme o diagnóstico e as condições de cada paciente.</p>
    </div>
  </TreatmentPage>
}

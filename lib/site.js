export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://claudia-stein-gomes-site.vercel.app';

export const doctor = {
  name: 'Dra. Claudia Stein Gomes',
  shortName: 'Claudia Stein Gomes',
  specialty: 'Cirurgia Vascular',
  crm: 'CRM-PR 16064',
  rqe: 'RQE 9991',
  phone: '+55 41 3224-9470',
  whatsapp: '+55 41 99104-1543',
  whatsappUrl: 'https://wa.me/5541991041543?text=Olá%2C%20gostaria%20de%20agendar%20uma%20avaliação%20com%20a%20Dra.%20Claudia%20Stein%20Gomes.',
  email: 'steingomes@hotmail.com',
  doctoralia: 'https://www.doctoralia.com.br/claudia-stein-gomes/cirurgiao-vascular-angiologista/curitiba',
  googleProfile: 'https://share.google/16DQSvJMBLVPk6FyE',
  address: 'Rua Visconde de Nacar, 656 — Mercês, Curitiba — PR, 80410-200',
  maps: 'https://maps.app.goo.gl/b963Fzs4sEMomJtM7',
  instagram: 'https://www.instagram.com/draclaudiastein.vascular/',
  youtube: 'https://www.youtube.com/@draclaudiasteingomes5083',
  facebook: 'https://www.facebook.com/claudiastein',
  tiktok: 'https://www.tiktok.com/@draclaudiasteingomes',
  photo: 'https://s3-sa-east-1.amazonaws.com/doctoralia.com.br/doctor/aff5e9/aff5e9231d94de79d8ea5efc4eeb9408_large.jpg'
};

export const clinicPhotos = {
  exterior: 'https://pixel-p1.s3.sa-east-1.amazonaws.com/doctor/photos/943844bf/943844bf-3041-4313-aaa0-93d2025d5fe9_large.jpg',
  reception: 'https://www.anuncioemfoco.com.br/imagens/anuncios/261216064536/aplicacao-de-botox-facial-em-curitiba-46233.jpg'
};

export const treatments = [
  { slug: 'endolaser', title: 'Endolaser para Varizes', kicker: 'Tratamento minimamente invasivo', summary: 'Tratamento de varizes guiado por ultrassom, com fibra óptica inserida por pequena punção para fechamento controlado da veia doente.' },
  { slug: 'escleroterapia', title: 'Escleroterapia', kicker: 'Glicose e espuma', summary: 'Tratamento de vasinhos e varizes selecionadas com substâncias esclerosantes indicadas conforme calibre, localização e avaliação clínica.' },
  { slug: 'laser-transdermico', title: 'Laser Transdérmico', kicker: 'Tecnologia através da pele', summary: 'Tecnologia não invasiva para telangiectasias e microvarizes, com energia luminosa direcionada ao vaso-alvo.' },
  { slug: 'linfedema', title: 'Tratamento do Linfedema', kicker: 'Abordagem integrada', summary: 'Avaliação vascular, Terapia Física Complexa com fisioterapia especializada e, em casos selecionados, cirurgia linfática.' }
];

export const publications = [
  { year: '2012', title: 'Prevalência de deficiência de vitamina D em pacientes com úlceras de perna de etiologia venosa', journal: 'Revista do Colégio Brasileiro de Cirurgiões, v. 39, p. 60–63', authors: 'Burkievcz, C. J. C.; Skare, T. L.; Malafaia, O.; Nassif, P. A. N.; Ribas, C. S. G.; Santos, L. R. P.' },
  { year: '2007', title: 'Comparative analysis of predictive biomarkers for therapeutical strategies in colorectal cancer', journal: 'Annals of Surgical Oncology, v. 14, p. 1272–1284', authors: 'M., G.; Gerstlauer, C.; Grimm, M.; Gomes, C. S.' },
  { year: '2006', title: 'Lymphangioma circumscriptum of the vulva: case report', journal: 'The European Journal of Lymphology and Related Problems, v. 16, p. 16–19', authors: 'Gomes, C. S.; Binati, F. C. M.; Marques, A. C. L.; Martins, Z. C. L.' },
  { year: '2003', title: 'Demonstração de um protocolo para o estudo anatomopatológico dos vasos linfáticos no linfedema', journal: 'Jornal Vascular Brasileiro, v. 2, n. 4, p. 313–317', authors: 'Gomes, C. S.; Picheth, F. S.; Fulcheri, E.; Campisi, C.; Boccardo, F.' },
  { year: '2001', title: 'Linfedema dos membros superiores secundário ao tratamento do câncer de mama: é possível prevení-lo?', journal: 'Revista Brasileira de Cirurgia Vascular e Angiologia, v. 6, n. 17, p. 188–193', authors: 'Gomes, C. S.; Campisi, C.; Boccardo, F.; Couto, E. M.; Azevedo Junior, W. F.' }
];

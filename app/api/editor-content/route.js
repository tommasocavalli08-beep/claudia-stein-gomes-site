import fallbackPosts from '@/content/posts.json';
import fallbackSettings from '@/content/settings.json';
import {CMS_URL} from '@/lib/cms';

const noStore={'Cache-Control':'no-store','X-Robots-Tag':'noindex, nofollow'};
const trim=(v,n=20000)=>String(v??'').slice(0,n);
const slugify=(v='')=>trim(v,160).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
function videoId(v=''){v=trim(v,500).trim();if(/^[\w-]{11}$/.test(v))return v;const m=v.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([\w-]{11})/);return m?.[1]||''}
function safeCover(v=''){v=trim(v,2200000).trim();return /^(https?:\/\/|\/|data:image\/(?:jpeg|jpg|png|webp);base64,)/i.test(v)?v:''}
function normalizeVideo(v={}){return {youtubeId:videoId(v?.youtubeId),vertical:!!v?.vertical,label:trim(v?.label,120)}}
function normalize(input){
  const posts=Array.isArray(input?.posts)?input.posts.slice(0,150).map((p,i)=>({
    slug:slugify(p.slug||p.title)||`artigo-${i+1}`,title:trim(p.title,240),excerpt:trim(p.excerpt,900),date:/^\d{4}-\d{2}-\d{2}$/.test(p.date||'')?p.date:new Date().toISOString().slice(0,10),readTime:trim(p.readTime||'5 min',40),category:trim(p.category||'Saúde vascular',100),coverImage:safeCover(p.coverImage),youtubeId:videoId(p.youtubeId),sections:(Array.isArray(p.sections)?p.sections:[]).slice(0,40).map((s,j)=>({id:slugify(s.id||s.title)||`secao-${j+1}`,title:trim(s.title,240),body:(Array.isArray(s.body)?s.body:[]).slice(0,80).map(x=>trim(x,20000))})),faqs:(Array.isArray(p.faqs)?p.faqs:[]).slice(0,40).map(f=>({q:trim(f.q,500),a:trim(f.a,6000)}))
  })):fallbackPosts;
  const treatmentVideos={};
  const source=input?.settings?.treatmentVideos||fallbackSettings.treatmentVideos||{};
  for(const [key,v] of Object.entries(source)){
    const cleanKey=slugify(key);
    if(Array.isArray(v?.videos)){
      treatmentVideos[cleanKey]={videos:v.videos.slice(0,6).map(normalizeVideo).filter(x=>x.youtubeId||x.label)};
    }else{
      treatmentVideos[cleanKey]=normalizeVideo(v);
    }
  }
  return {version:1,posts,settings:{treatmentVideos},updatedAt:new Date().toISOString()};
}
export async function GET(){
  try{const r=await fetch(CMS_URL,{cache:'no-store'});if(!r.ok)throw new Error();const data=await r.json();return Response.json(data,{headers:noStore})}
  catch{return Response.json({version:1,posts:fallbackPosts,settings:fallbackSettings,updatedAt:null},{headers:noStore})}
}
export async function PUT(request){
  try{
    const raw=await request.text();if(raw.length>3_500_000)return Response.json({error:'Conteúdo muito grande.'},{status:413,headers:noStore});
    const clean=normalize(JSON.parse(raw));
    const r=await fetch(CMS_URL,{method:'PUT',headers:{'content-type':'application/json'},body:JSON.stringify(clean),cache:'no-store'});
    if(!r.ok)return Response.json({error:'Não foi possível salvar os conteúdos.'},{status:502,headers:noStore});
    return Response.json({ok:true,data:clean},{headers:noStore});
  }catch{return Response.json({error:'Dados inválidos.'},{status:400,headers:noStore})}
}

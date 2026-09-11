import {CMS_URL} from '@/lib/cms';

const headers={'Cache-Control':'no-store','X-Robots-Tag':'noindex, nofollow'};
const treatmentVideos={
  'endolaser':{videos:[{youtubeId:'C0pA12kHPNA',vertical:true,label:'Endolaser / cirurgia de varizes com laser'}]},
  'cirurgia-varizes-local-sedacao':{videos:[{youtubeId:'9tJyZKN7p9k',vertical:true,label:'Cirurgia de varizes com local e sedação'}]},
  'escleroterapia':{videos:[{youtubeId:'OvOSnrjRl78',vertical:true,label:'Escleroterapia com glicose'},{youtubeId:'lAFvaIx0nzk',vertical:true,label:'Escleroterapia com espuma'}]},
  'laser-transdermico':{videos:[{youtubeId:'GdHlI9vbgBs',vertical:true,label:'Laser transdérmico'}]},
  'linfedema':{videos:[{youtubeId:'JL9LD-6bRY4',vertical:false,label:'Linfedema'}]},
  'pressoterapia':{videos:[{youtubeId:'t-zK6aJN_DY',vertical:true,label:'Pressoterapia'}]}
};

export async function GET(){
  try{
    const currentResponse=await fetch(CMS_URL,{cache:'no-store'});
    if(!currentResponse.ok)throw new Error('read failed');
    const current=await currentResponse.json();
    const next={...current,settings:{...(current.settings||{}),treatmentVideos},updatedAt:new Date().toISOString()};
    const writeResponse=await fetch(CMS_URL,{method:'PUT',headers:{'content-type':'application/json'},body:JSON.stringify(next),cache:'no-store'});
    if(!writeResponse.ok)throw new Error('write failed');
    return Response.json({ok:true,treatmentVideos},{headers});
  }catch{
    return Response.json({ok:false},{status:500,headers});
  }
}

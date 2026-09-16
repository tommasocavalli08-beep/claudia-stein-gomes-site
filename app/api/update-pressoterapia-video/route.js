import {CMS_URL} from '@/lib/cms';

export async function GET(){
  try{
    const current=await fetch(CMS_URL,{cache:'no-store'});
    if(!current.ok)return Response.json({ok:false,error:'read failed'},{status:502});
    const data=await current.json();
    const settings={...(data.settings||{}),treatmentVideos:{...(data.settings?.treatmentVideos||{})}};
    settings.treatmentVideos.pressoterapia={videos:[{youtubeId:'VZX-5LYk05U',vertical:true,label:'Pressoterapia'}]};
    const next={...data,version:1,settings,updatedAt:new Date().toISOString()};
    const saved=await fetch(CMS_URL,{method:'PUT',headers:{'content-type':'application/json'},body:JSON.stringify(next),cache:'no-store'});
    const body=await saved.text();
    return Response.json({ok:saved.ok,status:saved.status,body:body.slice(0,500)},{status:saved.ok?200:502});
  }catch(error){return Response.json({ok:false,error:String(error)},{status:500})}
}

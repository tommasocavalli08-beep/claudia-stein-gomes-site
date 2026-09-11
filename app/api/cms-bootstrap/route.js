import posts from '@/content/posts.json';
import settings from '@/content/settings.json';

const PREFERRED_URL='https://api.jsonstorage.net/v1/json/802950b5-8db5-46ff-b512-2f81afe63d4c/bbbef05c-c334-44a9-b29c-488d3efbb51c';

export async function GET(){
  const initial={version:1,posts,settings,updatedAt:new Date().toISOString()};
  try{
    const current=await fetch(PREFERRED_URL,{cache:'no-store'});
    if(current.ok)return Response.json({ok:true,status:'exists',url:PREFERRED_URL});
    const put=await fetch(PREFERRED_URL,{method:'PUT',headers:{'content-type':'application/json'},body:JSON.stringify(initial)});
    if(put.ok)return Response.json({ok:true,status:'created-via-put',url:PREFERRED_URL,response:await put.text()});
    const created=await fetch('https://api.jsonstorage.net/v1/json',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(initial)});
    const body=await created.text();
    let parsed={};try{parsed=JSON.parse(body)}catch{}
    return Response.json({ok:created.ok,status:'created-via-post',url:parsed.uri||null,preferredStatus:put.status,preferredBody:await put.text().catch(()=>''),response:parsed||body},{status:created.ok?200:502});
  }catch(error){return Response.json({ok:false,error:String(error)},{status:500})}
}

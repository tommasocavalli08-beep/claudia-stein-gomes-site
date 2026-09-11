import posts from '@/content/posts.json';
import settings from '@/content/settings.json';

export async function GET(){
  const initial={version:1,posts,settings,updatedAt:new Date().toISOString()};
  try{
    const created=await fetch('https://superjsonblob.com/api/jsonBlob',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(initial),cache:'no-store'});
    const body=await created.text();
    let parsed={};try{parsed=JSON.parse(body)}catch{}
    const location=created.headers.get('location');
    const url=location?new URL(location,'https://superjsonblob.com').toString():null;
    return Response.json({ok:created.ok,status:created.status,url,response:parsed||body},{status:created.ok?200:502});
  }catch(error){return Response.json({ok:false,error:String(error)},{status:500})}
}

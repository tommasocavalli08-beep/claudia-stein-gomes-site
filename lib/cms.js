import fallbackPosts from '@/content/posts.json';
import fallbackSettings from '@/content/settings.json';

export const CMS_URL='https://superjsonblob.com/api/jsonBlob/c11859f8-7260-419e-aa3f-4e572739731a';

export function fallbackCms(){return {version:1,posts:fallbackPosts,settings:fallbackSettings,updatedAt:null}}

export async function getCmsState(){
  try{
    const r=await fetch(CMS_URL,{cache:'no-store'});
    if(!r.ok)throw new Error(`CMS ${r.status}`);
    const data=await r.json();
    if(!data||!Array.isArray(data.posts)||!data.settings)throw new Error('CMS payload non valido');
    return data;
  }catch{return fallbackCms()}
}

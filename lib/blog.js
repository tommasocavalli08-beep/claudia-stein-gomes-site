import {getCmsState} from '@/lib/cms';
export async function getPosts(){const {posts=[]}=await getCmsState();return [...posts].sort((a,b)=>new Date(b.date)-new Date(a.date))}
export async function getPost(slug){return (await getPosts()).find(p=>p.slug===slug)||null}

import data from '@/content/posts.json';
export const posts=[...data].sort((a,b)=>new Date(b.date)-new Date(a.date));
export function getPost(slug){return posts.find(p=>p.slug===slug)}

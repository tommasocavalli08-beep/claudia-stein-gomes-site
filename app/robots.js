import {SITE_URL} from '@/lib/site';
export default function robots(){return {rules:{userAgent:'*',allow:'/',disallow:['/area-editoriale-claudia','/area-editoriale-claudia/']},sitemap:`${SITE_URL}/sitemap.xml`,host:SITE_URL}}

import {getCmsState} from '@/lib/cms';

export async function getTreatmentVideos(slug){
  const {settings}=await getCmsState();
  const value=settings?.treatmentVideos?.[slug];
  if(!value)return [];
  if(Array.isArray(value?.videos))return value.videos.filter(v=>v?.youtubeId);
  return value?.youtubeId?[value]:[];
}

export async function getTreatmentVideo(slug){
  const videos=await getTreatmentVideos(slug);
  return videos[0]||null;
}

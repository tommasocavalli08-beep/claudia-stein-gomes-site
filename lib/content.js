import {getCmsState} from '@/lib/cms';
export async function getTreatmentVideo(slug){const {settings}=await getCmsState();return settings?.treatmentVideos?.[slug]||null}

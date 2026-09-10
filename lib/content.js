import settings from '@/content/settings.json';
export const treatmentVideos=settings.treatmentVideos||{};
export function getTreatmentVideo(slug){return treatmentVideos[slug]||null}

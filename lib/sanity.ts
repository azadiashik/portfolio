import { projects as local, type Project } from "./content";
// If Sanity is configured, projects come from the CMS; otherwise from lib/content.ts.
const id = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export async function getProjects(): Promise<Project[]> {
  if (!id) return local;
  try {
    const q = encodeURIComponent(`*[_type=="project"]|order(order asc){"slug":slug.current,title,category,summary,objective,methodology,outputs,tools,context}`);
    const r = await fetch(`https://${id}.apicdn.sanity.io/v2024-01-01/data/query/production?query=${q}`, { next: { revalidate: 60 } });
    const j = await r.json();
    return j.result?.length ? j.result : local;
  } catch { return local; }
}

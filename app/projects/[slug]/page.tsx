import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjects } from "@/lib/sanity";
type P = { params: { slug: string } };
export async function generateMetadata({ params }: P): Promise<Metadata> {
  const p = (await getProjects()).find(x => x.slug === params.slug);
  return p ? { title: `${p.title} | Md. Ashikul Islam`, description: p.summary } : {};
}
const L = ({ t, items }: { t: string; items: string[] }) => (<section className="mt-10"><h2 className="font-serif text-2xl text-navy">{t}</h2><ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">{items.map(i => <li key={i}>{i}</li>)}</ul></section>);
export default async function Project({ params }: P) {
  const p = (await getProjects()).find(x => x.slug === params.slug);
  if (!p) notFound();
  return (<main className="mx-auto max-w-3xl px-6 py-16">
    <Link href="/#projects" className="text-sm underline">Back to projects</Link>
    <p className="mt-8 text-sm text-steel">{p.category} · {p.context}</p>
    <h1 className="mt-2 font-serif text-4xl text-navy">{p.title}</h1>
    <p className="mt-6 text-lg leading-relaxed">{p.summary}</p>
    <section className="mt-10"><h2 className="font-serif text-2xl text-navy">Objective</h2><p className="mt-3 leading-relaxed">{p.objective}</p></section>
    <L t="Methodology" items={p.methodology} /><L t="Outputs" items={p.outputs} /><L t="Tools" items={p.tools} />
  </main>);
}

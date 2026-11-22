import Link from "next/link";
import { site, experience, skills, education, certifications, achievements, articles } from "@/lib/content";
import { getProjects } from "@/lib/sanity";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
const T = ["FCFF DCF","Dividend discount model","Trading comparables","Venture-capital method","WACC and BGTB yield","IFRS 9 ECL","Green Bond analysis","Scenario and sensitivity analysis","Power BI","Python","CAPM and beta"];
const H = ({ id, children }: { id: string; children: React.ReactNode }) => <h2 id={id} className="font-serif text-3xl text-navy md:text-4xl">{children}</h2>;
const Sec = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section aria-labelledby={id} className="mx-auto max-w-6xl border-t border-rule px-6 py-20"><Reveal><H id={id}>{title}</H><div className="mt-10">{children}</div></Reveal></section>
);
export default async function Home() {
  const projects = await getProjects();
  const cats = Array.from(new Set(projects.map(p => p.category)));
  return (<>
    <header className="sticky top-0 z-10 border-b border-rule bg-paper/90 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 text-sm">
        <a href="#top" className="font-semibold text-navy">{site.name}</a>
        <div className="flex flex-wrap gap-x-5 gap-y-1 text-mute">
          {["Work", "Projects", "Skills", "Insights", "About", "Contact"].map(n => <a key={n} className="hover:text-navy" href={`#${n.toLowerCase()}`}>{n}</a>)}
        </div>
      </nav>
    </header>
    <main id="top">
      <section className="relative overflow-hidden bg-navy text-white"><div className="grid-bg absolute inset-0" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-[1.1fr_1fr] md:py-28">
          <div className="rise">
            <p className="text-sm text-white/70">{site.subtitle}, Dhaka</p>
            <h1 className="mt-4 font-serif text-4xl leading-tight md:text-6xl" aria-label={site.headline}>{site.headline.split(" ").map((w, i) => <span key={i} aria-hidden className="word" style={{ "--i": i } as React.CSSProperties}>{w}&nbsp;</span>)}</h1>
            <p className="mt-6 max-w-xl leading-relaxed text-white/80">{site.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <a href={site.cv} download className="bg-white px-5 py-3 font-medium text-navy">Download CV</a>
              <a href="#projects" className="border border-white/40 px-5 py-3">View projects</a>
              <a href={site.linkedin} className="border border-white/40 px-5 py-3">LinkedIn</a>
              <a href={`mailto:${site.email}`} className="border border-white/40 px-5 py-3">Email me</a>
            </div>
          </div>
          <aside className="rise rise-2" aria-label="Selected engagements">
            <p className="text-sm text-white/70">Selected engagements at BRAC EPL Investments</p>
            <ul className="mt-3 divide-y divide-white/15 border-y border-white/15">
              {projects.filter(p => p.context.startsWith("BRAC EPL")).map(p => (
                <li key={p.slug}><Link href={`/projects/${p.slug}`} className="flex items-baseline justify-between gap-4 py-4 hover:bg-white/5">
                  <span>{p.title}</span><span className="shrink-0 text-sm text-white/60">{p.tools.join(", ")}</span></Link></li>))}
            </ul>
          </aside>
        </div>
      </section>
      <div className="overflow-hidden border-b border-rule bg-white py-4" aria-hidden><div className="marquee text-sm text-mute">{[...T, ...T].map((t, i) => <span key={i} className="whitespace-nowrap pr-12">{t}</span>)}</div></div>
      <section className="mx-auto max-w-6xl px-6 py-16"><Reveal><div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {([[4, "", "valuation methods applied to one startup"], [17, "", "sheets in the Green Bond investor model"], [100, "%", "on-time delivery leading a 5-member team"], [50000, "+", "students engaged across two English Olympiad seasons"]] as [number, string, string][]).map(([n, s, l]) => (
          <div key={l}><p className="num font-serif text-5xl text-navy"><CountUp to={n} suffix={s} /></p><p className="mt-2 text-sm text-mute">{l}</p></div>))}
      </div></Reveal></section>
      <Sec id="work" title="Professional experience">
        <ol className="space-y-12 border-l border-rule pl-6 md:pl-10">
          {experience.map((e, idx) => (<li key={e.org} className="relative">{idx === 0 && <span className="ping absolute -left-[31px] top-2 h-2.5 w-2.5 bg-steel md:-left-[47px]" aria-hidden />}
            <span className="absolute -left-[31px] top-2 h-2.5 w-2.5 bg-navy md:-left-[47px]" aria-hidden />
            <h3 className="font-serif text-2xl">{e.role}</h3>
            <p className="mt-1 text-mute">{e.org} · <span className="num">{e.period}</span></p>
            <ul className="mt-4 max-w-3xl list-disc space-y-3 pl-5 leading-relaxed">{e.points.map(x => <li key={x}>{x}</li>)}</ul>
          </li>))}
        </ol>
      </Sec>
      <Sec id="projects" title="Featured projects">
        {cats.map(c => (<div key={c} className="mb-10"><h3 className="border-b border-rule pb-2 text-sm font-semibold text-steel">{c}</h3>
          <ul className="divide-y divide-rule">{projects.filter(p => p.category === c).map(p => (
            <li key={p.slug}><Link href={`/projects/${p.slug}`} className="group grid gap-1 py-5 transition-all duration-300 hover:bg-white hover:pl-4 md:grid-cols-[1.2fr_1.6fr_auto] md:gap-8">
              <span className="font-serif text-xl text-navy">{p.title}</span><span className="text-mute">{p.summary}</span><span className="text-sm text-mute transition-transform duration-300 group-hover:translate-x-1">{p.context}</span></Link></li>))}</ul></div>))}
      </Sec>
      <Sec id="skills" title="Skills">
        <div className="grid gap-10 md:grid-cols-2">{skills.map(s => (<div key={s.group}><h3 className="font-serif text-xl">{s.group}</h3>
          <p className="mt-3 leading-loose text-mute">{s.items.join(", ")}</p></div>))}</div>
      </Sec>
      <Sec id="education" title="Education and certifications">
        <div className="grid gap-12 md:grid-cols-2">
          <ul className="space-y-5">{education.map(e => <li key={e.school}><p className="font-medium">{e.degree}</p><p className="text-mute">{e.school} · <span className="num">{e.score}</span></p></li>)}</ul>
          <ul className="space-y-2 text-mute">{certifications.map(c => <li key={c}>{c}</li>)}</ul>
        </div>
        <h3 className="mt-14 font-serif text-2xl">Achievements and leadership</h3>
        <div className="mt-6 grid gap-8 md:grid-cols-2">{achievements.map(a => <div key={a.title}><p className="font-medium">{a.title}</p><p className="mt-1 text-mute">{a.text}</p></div>)}</div>
      </Sec>
      <Sec id="insights" title="Insights">
        {articles.length === 0 ? <p className="max-w-xl text-mute">Articles on Bangladesh capital markets, valuation and banking regulation will be published here.</p> :
          <ul className="space-y-6">{articles.map(a => <li key={a.slug}><p className="font-serif text-xl">{a.title}</p><p className="text-sm text-mute">{a.date}</p><p className="mt-1">{a.summary}</p></li>)}</ul>}
      </Sec>
      <Sec id="about" title="About">
        <div className="max-w-2xl space-y-5 font-serif text-lg leading-8">{site.about.map(p => <p key={p}>{p}</p>)}</div>
      </Sec>
      <Sec id="contact" title="Contact">
        <p className="max-w-xl text-lg">I’m open to conversations about investment banking, equity research and valuation work in Bangladesh.</p>
        <dl className="mt-6 space-y-1">
          <div><dt className="inline text-mute">Email: </dt><dd className="inline"><a className="underline" href={`mailto:${site.email}`}>{site.email}</a></dd></div>
          <div><dt className="inline text-mute">LinkedIn: </dt><dd className="inline"><a className="underline" href={site.linkedin}>mdashikul-islam</a></dd></div>
          <div><dt className="inline text-mute">Location: </dt><dd className="inline">{site.location}</dd></div>
        </dl>
        <form action={`mailto:${site.email}`} method="post" encType="text/plain" className="mt-8 grid max-w-xl gap-4">
          <label className="grid gap-1 text-sm">Your name<input name="name" required className="border border-rule bg-white px-3 py-2" /></label>
          <label className="grid gap-1 text-sm">Message<textarea name="message" required rows={4} className="border border-rule bg-white px-3 py-2" /></label>
          <button className="w-fit bg-navy px-5 py-3 text-sm text-white">Send message</button>
        </form>
      </Sec>
    </main>
    <footer className="border-t border-rule px-6 py-8 text-center text-sm text-mute">© {new Date().getFullYear()} {site.name}</footer>
  </>);
}

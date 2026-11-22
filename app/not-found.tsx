import Link from "next/link";
export default function NotFound() {
  return <main className="mx-auto max-w-xl px-6 py-32"><h1 className="font-serif text-4xl">This page doesn’t exist</h1><p className="mt-4 text-mute">The link may be old or mistyped.</p><Link className="mt-8 inline-block underline" href="/">Go to the homepage</Link></main>;
}

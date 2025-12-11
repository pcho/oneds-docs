import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">OneDS Design System</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Documentation for the OneDS design system
      </p>
      <Link
        href="/docs"
        className="rounded-lg bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
      >
        View Documentation
      </Link>
    </main>
  );
}

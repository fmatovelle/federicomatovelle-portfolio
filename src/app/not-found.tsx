import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-zinc-100 font-sans antialiased">
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <h2 className="text-xl mb-6 text-white/70">Page Not Found</h2>
            <p className="text-white/60 mb-8">
              The page you're looking for doesn't exist.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-6 py-3 text-sm hover:border-white/40 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
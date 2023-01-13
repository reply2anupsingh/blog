import '@/styles/globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Search } from '@/components/search';
import { Analytics } from '@/components/analytics';
import { allPosts } from 'contentlayer/generated';
import { Red_Hat_Display, Newsreader } from '@next/font/google';
import { cn } from '@/lib/utils';

const fontSans = Red_Hat_Display({
  subsets: ['latin'],
  variable: '--font-red-hat',
});

const fontSerif = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
});

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={cn(
        'scroll-pt-16 overflow-auto overscroll-none font-sans',
        fontSans.variable,
        fontSerif.variable,
      )}
    >
      <head />
      <body
        className={cn(
          'grid grid-cols-1 grid-rows-layout sm:grid-cols-layout',
          'min-h-screen bg-slate-200 dark:bg-slate-700',
        )}
      >
        <section className="sticky top-0 z-30 col-span-1 row-span-1 row-start-1 h-full self-start sm:col-start-2">
          <Header />
        </section>
        <main className="col-span-1 row-start-2 bg-slate-200 dark:bg-slate-700 sm:col-start-2">
          {children}
        </main>
        <section className="col-span-3 row-span-1 row-start-3 bg-slate-200 dark:bg-slate-700 sm:col-span-1 sm:col-start-2">
          <Footer />
        </section>
        <div // left column
          className={cn(
            'col-span-1 col-start-1 row-span-3 row-start-1 hidden bg-gradient-to-r sm:block',
            'from-slate-300 via-slate-400 to-slate-500',
            'dark:from-slate-800 dark:via-slate-700 dark:to-slate-600',
          )}
        >
          <div className="invisible h-full w-full bg-gradient-to-l from-rose-50 to-slate-700 opacity-25 dark:visible" />
        </div>
        <div // right column
          className={cn(
            'col-span-1 col-start-3 row-span-3 row-start-1 hidden bg-gradient-to-l sm:block',
            'from-slate-300 via-slate-400 to-slate-500',
            'dark:from-slate-800  dark:via-slate-700 dark:to-slate-600',
          )}
        >
          <div className="invisible h-full w-full bg-gradient-to-r from-rose-50 to-slate-700 opacity-25 dark:visible" />
        </div>
        <Search posts={allPosts} />
        <Analytics />
      </body>
    </html>
  );
}

import '@/styles/globals.css';
import '@/styles/storybook.css';

import { Red_Hat_Display, Newsreader } from '@next/font/google';
import clsx from 'clsx';

const fontSans = Red_Hat_Display({
  subsets: ['latin'],
  variable: '--font-red-hat',
});

const fontSerif = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
});

export const parameters = {
  nextjs: {
    appDirectory: true,
  },
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  darkMode: true,
};

export const decorators = [
  (Story) => (
    <div
      className={clsx(fontSans.variable, fontSerif.variable, 'font-sans')}
      style={{
        // temporary fix for Red Hat Display font not loading
        // TODO: remove when it's fixed
        '--font-red-hat': fontSans.style.fontFamily,
      }}
    >
      <div className="grid min-h-screen grid-cols-1 grid-rows-1 bg-slate-200 dark:bg-slate-700 sm:grid-cols-[1fr_minmax(640px,1024px)_1fr]">
        <div className="col-span-1 bg-slate-200 dark:bg-slate-700 sm:col-start-2">
          <Story />
        </div>
        <div // left column
          className="col-span-1 col-start-1 row-start-1 hidden bg-gradient-to-r
            from-slate-400 via-slate-500 to-slate-700 dark:from-slate-300 
            dark:via-slate-400 dark:to-slate-500 sm:block"
        >
          <div className="invisible h-full w-full bg-opacity-5 bg-gradient-to-r from-rose-50 to-transparent dark:visible" />
        </div>
        <div // right column
          className="col-span-1 col-start-3 row-start-1 hidden bg-gradient-to-l
            from-slate-400 via-slate-500 to-slate-700 dark:from-slate-300 
            dark:via-slate-400 dark:to-slate-500 sm:block"
        >
          <div className="invisible h-full w-full bg-opacity-5 bg-gradient-to-l from-rose-50 to-transparent dark:visible" />
        </div>
      </div>
    </div>
  ),
];

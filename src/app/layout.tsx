import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './theme-provider';
import { css, sva } from '@styled-system/css';
import { Header } from '@/components/compositions/header';
import { SideBar } from '@/components/compositions/side-bar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TMDB movies app',
  description: 'TMDB movies app using next.js and panda.css',
};

const rootLayoutRecipe = sva({
  slots: ['root', 'top', 'side', 'main'],
  base: {
    root: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gridTemplateRows: 'auto 1fr',
    },
    top: {
      gridColumn: '2/-1',
      gridRow: 1,
      position: 'sticky',
      top: 0,
    },
    side: {
      gridColumn: '1/2',
      gridRow: '1/-1',
      minWidth: '15rem',
      position: 'sticky',
      alignSelf: 'start',
      top: 0,
    },
    main: {
      gridColumn: '2 / -1',
      gridRow: 2,
      minHeight: 'calc(100vh - 5rem)',
      paddingInline: '2rem',
    },
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { root, main, top, side } = rootLayoutRecipe();
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className={root}>
            <div className={top}>
              <Header />
            </div>
            <div className={side}>
              <SideBar />
            </div>
            <div className={main}>{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

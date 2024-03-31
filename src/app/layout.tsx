import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './theme-provider';
import { css, sva } from '@styled-system/css';
import { Header } from '@/components/compositions/header';
import { SideBar } from '@/components/compositions/side-bar';
import { Sticky } from '@/components/elements/sticky';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TMDB movies app',
  description: 'TMDB movies app using next.js and panda.css',
};

const rootLayoutRecipe = sva({
  slots: ['root', 'top', 'side', 'main'],
  base: {
    root: {
      lg: {
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gridTemplateRows: 'auto 1fr',
      },
      display: 'flex',
      flexDirection: 'column',
    },
    top: {
      lg: {
        gridColumn: '2/-1',
        gridRow: 1,
      },
      top: 0,
      position: 'fixed',
      width: '100%',
      zIndex: 10,
    },
    side: {
      gridColumn: '1/2',
      gridRow: '1/-1',
      minWidth: '15rem',

      alignSelf: 'start',
      top: 0,
      left: 0,
      xlDown: {
        display: 'none',
      },
    },
    main: {
      gridColumn: '2 / -1',
      gridRow: 2,
      minHeight: 'calc(100vh - 5rem)',
      paddingInline: '1rem',
      lg: {
        paddingInline: '2rem',
      },
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
            <Sticky offsetTop={0} className={side}>
              <SideBar />
            </Sticky>
            <div className={main}>{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

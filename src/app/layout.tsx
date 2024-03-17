import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './theme-provider';
import { css } from '@styled-system/css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TMDB movies app',
  description: 'TMDB movies app using next.js and panda.css',
};

const rootStyles = css({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  minH: 'screen',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className={rootStyles}>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}

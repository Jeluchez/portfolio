import type { Metadata } from 'next';
import './globals.css';
import ThemeProvider from '@/theme/themeProvider';

export const runtime = 'edge';

export const metadata = {
  title: 'My portfolio',
  description: 'jeluchez portfolio'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

      </body>
    </html>
  );
}

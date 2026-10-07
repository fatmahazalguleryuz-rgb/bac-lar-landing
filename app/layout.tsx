import type { Metadata } from 'next';
import { Figtree, Young_Serif } from 'next/font/google';
import './globals.css';

const figtree = Figtree({ subsets: ['latin', 'latin-ext'], display: 'swap', variable: '--font-figtree' });
const youngSerif = Young_Serif({ weight: '400', subsets: ['latin'], display: 'swap', variable: '--font-young-serif' });

export const metadata: Metadata = {
  title: 'bacılar. — Kadınların kendi aralarında konuştuğu yer.',
  description: 'Topluluklar, anonim sorular, etkinlikler. Her üyelik tek tek onaylanır.',
  openGraph: {
    title: 'bacılar.',
    description: 'Kadınların kendi aralarında konuştuğu yer.',
    locale: 'tr_TR',
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${figtree.variable} ${youngSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}

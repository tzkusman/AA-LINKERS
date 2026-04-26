import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'A.A Linkers | Industrial Valve Supplier',
  description: 'Bulk supplier of new & used valves for industries.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-[family-name:--font-inter] text-slate-800 bg-slate-50 flex flex-col min-h-screen`} suppressHydrationWarning>
        <Navbar />
        <main className="flex-1 flex flex-col w-full">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}

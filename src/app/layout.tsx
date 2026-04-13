import type {Metadata} from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://suvashmukhiya.app.web'),
  title: {
    default: 'Suvash Mukhiya',
    template: '%s | Suvash Mukhiya'
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  description: 'Professional portfolio of Suvash Mukhiya, a Creative Web & App Developer specializing in intuitive UI/UX design and high-performance development.',
  keywords: ['Web Developer', 'App Developer', 'Portfolio', 'Suvash Mukhiya', 'React Developer', 'Next.js', 'UI/UX Design'],
  authors: [{ name: 'Suvash Mukhiya' }],
  creator: 'Suvash Mukhiya',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://suvashmukhiya.com',
    title: 'Suvash Mukhiya | Creative Web & App Developer Portfolio',
    description: 'Explore the creative works and technical expertise of Suvash Mukhiya in web and mobile app development.',
    siteName: 'Suvash Mukhiya Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Suvash Mukhiya Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suvash Mukhiya | Creative Web & App Developer',
    description: 'Specializing in intuitive UI/UX design and high-performance development.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}

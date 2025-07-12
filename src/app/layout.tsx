import type { Metadata } from "next";
import { Roboto, Playfair_Display, Cormorant_Garamond, Montserrat, Lora, Merriweather } from 'next/font/google';
import "./globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/context/ThemeContext';
import { AccessibilityProvider } from '@/context/AccessibilityContext';
import { AccessibilityControls } from '@/components/ui/AccessibilityControls';

// Optimize font loading with preload for key fonts and lazy for others
const roboto = Roboto({ 
  weight: ['400', '500', '700'], // Reduced weights for better performance
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const playfair = Playfair_Display({
  weight: ['400', '600', '700'], // Reduced weights for better performance
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  preload: true,
  fallback: ['serif'],
});

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

// Less critical fonts loaded with lower priority
const cormorant = Cormorant_Garamond({
  weight: ['400', '600'], // Reduced weights for better performance
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
  preload: false,
});

const lora = Lora({
  weight: ['400', '600'], // Reduced weights for better performance
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
  preload: false,
});

const merriweather = Merriweather({
  weight: ['400', '700'], // Reduced weights for better performance
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merriweather',
  preload: false,
});

export const metadata: Metadata = {
  title: 'UA Legal | Premier Law Firm in Delhi NCR, India',
  description: 'UA Legal is a premier law firm in Delhi NCR providing exceptional legal services to small and medium industries with personalized commitment and expertise.',
  keywords: 'law firm, India, Delhi, Faridabad, legal services, corporate law, litigation, insolvency, bankruptcy code',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${roboto.variable} ${playfair.variable} ${cormorant.variable} ${montserrat.variable} ${lora.variable} ${merriweather.variable} antialiased scroll-smooth`}
    >
      <head>
        {/* Preload critical assets for better performance */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="preload" as="style" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        
        {/* Preload critical images */}
        <link rel="preload" href="/assets/images/logo.png" as="image" />
        <link rel="preload" href="/assets/images/logo-light.png" as="image" />
        
        {/* Favicon and PWA support */}
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Performance optimization meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Accessibility meta tags */}
        <meta name="description" content="UA Legal is a premier law firm in Delhi NCR providing exceptional legal services with personalized commitment and expertise." />
      </head>
      <body className="font-montserrat text-black bg-white selection:bg-gray-200 selection:text-black">
        <AccessibilityProvider>
          <ThemeProvider>
            {/* Skip to content link for screen readers and keyboard users */}
            <a 
              href="#main-content" 
              className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[101] focus:bg-primary focus:text-white focus:p-4 focus:m-4"
            >
              Skip to content
            </a>
          
            <div className="flex flex-col min-h-screen">
              <Header />
              <main id="main-content" className="pt-28 flex-grow" tabIndex={-1}>
                {children}
              </main>
              <Footer />
              
              {/* Accessibility controls */}
              <AccessibilityControls />
              
              {/* Premium page transition overlay - initially hidden */}
              <div id="page-transition" className="fixed inset-0 bg-primary z-[100] opacity-0 pointer-events-none">
                <div className="h-full flex items-center justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-accent/20 rounded-sm animate-pulse-slow"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img src="/assets/images/logo-light.png" alt="UA Legal" className="w-10 h-10 animate-float" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ThemeProvider>
        </AccessibilityProvider>
      </body>
    </html>
  );
}

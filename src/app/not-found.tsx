import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="max-w-3xl mx-auto text-center relative">
        {/* Decorative elements */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-40 h-40 rounded-full bg-gold opacity-5"></div>
        <div className="absolute -bottom-20 right-10 w-28 h-28 rounded-full bg-navy opacity-5"></div>
        
        <div className="relative z-10 bg-white border border-gold-light/20 rounded-lg shadow-xl p-8 md:p-12">
          <div className="mb-6">
            <span className="text-9xl font-playfair font-bold text-gold">404</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-playfair font-bold text-navy mb-4">
            Page Not Found
          </h1>
          
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          
          <p className="text-lg text-text-light mb-8 max-w-xl mx-auto">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/" 
              className="px-8 py-3 bg-navy text-white font-medium rounded hover:bg-navy-light transition-colors"
            >
              Return Home
            </Link>
            
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-white text-navy border border-navy font-medium rounded hover:bg-navy/5 transition-colors"
            >
              Contact Us
            </Link>
          </div>
          
          <div className="mt-10 pt-8 border-t border-gray-100">
            <Link href="/" className="flex items-center justify-center">
              <span className="text-xl font-playfair font-bold text-navy">UA Legal</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

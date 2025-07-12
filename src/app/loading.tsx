export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
      <div className="relative">
        {/* Spinner */}
        <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gold"></div>
        
        {/* Center logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-playfair font-bold text-navy">UA</span>
        </div>
      </div>
    </div>
  );
}

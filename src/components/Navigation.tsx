const Navigation = () => {
  const handlePotatoClick = () => {
    const potaSection = document.getElementById('pota-section');
    potaSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleKetchClick = () => {
    const ketchSection = document.getElementById('ketch-section');
    ketchSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleXClick = () => {
    window.open('https://x.com/i/communities/1952818789764247984', '_blank');
  };

  return (
    <nav className="w-full py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-8 md:gap-12">
          {/* $POTA Button */}
          <button
            onClick={handlePotatoClick}
            className="group transition-all duration-300 hover:scale-110 hover:drop-shadow-lg focus:outline-none focus:ring-4 focus:ring-primary/30 rounded-full"
            aria-label="Navigate to Pota section"
          >
            <img 
              src="/lovable-uploads/a1bc84b5-4b53-4bf1-ae78-9895ba9ad1dd.png" 
              alt="$POTA" 
              className="h-20 md:h-24 lg:h-28 w-auto object-contain transition-transform duration-300 group-hover:rotate-3"
            />
          </button>

          {/* X Button */}
          <button
            onClick={handleXClick}
            className="group transition-all duration-300 hover:scale-110 hover:drop-shadow-lg focus:outline-none focus:ring-4 focus:ring-primary/30 rounded-full"
            aria-label="Open X Community"
          >
            <img 
              src="/lovable-uploads/ddae39e7-2c81-4ad9-b271-1a3210fba445.png" 
              alt="X Potato" 
              className="h-20 md:h-24 lg:h-28 w-auto object-contain transition-transform duration-300 group-hover:rotate-3"
            />
          </button>

          {/* KETCH ME Button */}
          <button
            onClick={handleKetchClick}
            className="group transition-all duration-300 hover:scale-110 hover:drop-shadow-lg focus:outline-none focus:ring-4 focus:ring-primary/30 rounded-full"
            aria-label="Navigate to Ketch section"
          >
            <img 
              src="/lovable-uploads/a8c48ad9-aa9f-4aef-bf6b-221af744caf3.png" 
              alt="KETCH ME" 
              className="h-20 md:h-24 lg:h-28 w-auto object-contain transition-transform duration-300 group-hover:rotate-3"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
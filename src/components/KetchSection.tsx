const KetchSection = () => {
  return (
    <section 
      id="ketch-section" 
      className="min-h-screen w-full bg-gradient-to-br from-ketchup-red/20 to-fries-yellow/20 flex items-center justify-center py-20"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-ketchup-red mb-8">
            KETCH ME IF YOU CAN! 🍟
          </h2>
          <p className="text-xl md:text-2xl text-potato-dark mb-12 leading-relaxed">
            The perfect companion to our beloved potato - crispy, golden, and irresistible!
          </p>
          <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-ketchup-red/20">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              Welcome to the world of golden fries and endless possibilities. 
              Here, every crispy bite tells a story of perfection and flavor.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-fries-yellow/20 rounded-2xl p-6 border border-fries-yellow/30 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/7daddc89-1402-40d3-9ee6-c3cfa2fe906d.png" 
                  alt="Phantom Wallet" 
                  className="h-16 w-16 mb-4"
                />
                <p className="text-potato-dark font-semibold">Step 1: Download Phantom</p>
              </div>
              <div className="bg-ketchup-red/20 rounded-2xl p-6 border border-ketchup-red/30 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/b617a1be-ac8b-4e4b-8bdb-f5e78e53ced0.png" 
                  alt="Solana" 
                  className="h-16 w-16 mb-4"
                />
                <p className="text-potato-dark font-semibold">Step 2: Buy or Transfer $SOL</p>
              </div>
              <div className="bg-potato-brown/20 rounded-2xl p-6 border border-potato-brown/30 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/5cab15aa-5b0c-4f75-95c2-c56924cb8488.png" 
                  alt="Potato Character" 
                  className="h-16 w-16 mb-4"
                />
                <p className="text-potato-dark font-semibold">Step 3: Search $POTA and ketch' me!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KetchSection;
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
              <div className="bg-fries-yellow/20 rounded-2xl p-6 border border-fries-yellow/30">
                <h3 className="text-xl font-bold text-potato-dark mb-3">🔥 Hot & Fresh</h3>
                <p className="text-potato-brown">Always served at the perfect temperature</p>
              </div>
              <div className="bg-ketchup-red/20 rounded-2xl p-6 border border-ketchup-red/30">
                <h3 className="text-xl font-bold text-potato-dark mb-3">🍅 Perfect Dip</h3>
                <p className="text-potato-brown">The ideal ketchup companion</p>
              </div>
              <div className="bg-potato-brown/20 rounded-2xl p-6 border border-potato-brown/30">
                <h3 className="text-xl font-bold text-potato-dark mb-3">⭐ Premium Quality</h3>
                <p className="text-potato-brown">Made from the finest potatoes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KetchSection;
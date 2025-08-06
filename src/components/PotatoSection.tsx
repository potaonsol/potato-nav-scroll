const PotatoSection = () => {
  return (
    <section 
      id="pota-section" 
      className="min-h-screen w-full bg-potato-beige flex items-center justify-center py-20"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/fd017534-a7f9-4893-93f3-7fb00eec5750.png" 
              alt="$POTA" 
              className="h-24 md:h-32 lg:h-40 w-auto object-contain"
            />
          </div>
          <p className="text-xl md:text-2xl text-potato-brown mb-12 leading-relaxed">
            The most adorable potato in the crypto world! 🥔
          </p>
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-potato-brown/20">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Join the potato revolution and discover the charm of $POTA. 
              From humble beginnings in the digital soil to becoming the most beloved spud on the blockchain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PotatoSection;
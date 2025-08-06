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
              src="/lovable-uploads/8b433ac7-8307-4fad-a518-575db7291bdc.png" 
              alt="I AM $POTA" 
              className="h-48 md:h-64 lg:h-80 w-auto object-contain"
            />
          </div>
          <p className="text-xl md:text-2xl text-potato-brown mb-12 leading-relaxed">
            The most adorable potato in the crypto world! 🥔
          </p>
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-potato-brown/20 mb-12">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Join the potato revolution and discover the charm of $POTA. 
              From humble beginnings in the digital soil to becoming the most beloved spud on the blockchain. 
              Let's fry the charts with $POTA now!
            </p>
          </div>
          
          {/* Potato Characters Gallery */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex justify-center">
              <div className="bg-potato-beige p-4 rounded-2xl border-2 border-potato-brown/20 shadow-lg">
                <img 
                  src="/lovable-uploads/1b1cc06f-f17a-4ea1-8790-22ba74a27e2b.png" 
                  alt="Potato Tarot" 
                  className="h-48 md:h-64 w-48 md:w-64 object-contain"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-potato-beige p-4 rounded-2xl border-2 border-potato-brown/20 shadow-lg">
                <img 
                  src="/lovable-uploads/775d2571-c10e-473c-9b29-19b8ad000cee.png" 
                  alt="Happy Potato" 
                  className="h-48 md:h-64 w-48 md:w-64 object-contain"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-potato-beige p-4 rounded-2xl border-2 border-potato-brown/20 shadow-lg">
                <img 
                  src="/lovable-uploads/ef2179c3-752d-42da-97df-a374a52cccf0.png" 
                  alt="Love Potato" 
                  className="h-48 md:h-64 w-48 md:w-64 object-contain"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-potato-beige p-4 rounded-2xl border-2 border-potato-brown/20 shadow-lg">
                <img 
                  src="/lovable-uploads/1fa31d05-98f1-455b-ad6d-8f6eb892b410.png" 
                  alt="Cool Potato" 
                  className="h-48 md:h-64 w-48 md:w-64 object-contain"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-potato-beige p-4 rounded-2xl border-2 border-potato-brown/20 shadow-lg">
                <img 
                  src="/lovable-uploads/2f0bb0f1-1452-4f19-9b2e-fb465679389d.png" 
                  alt="Potato and Ketchup" 
                  className="h-48 md:h-64 w-48 md:w-64 object-contain"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-potato-beige p-4 rounded-2xl border-2 border-potato-brown/20 shadow-lg">
                <img 
                  src="/lovable-uploads/ccd6753a-1ec5-409e-bbb3-ad0ef3876bda.png" 
                  alt="Sleepy Potato" 
                  className="h-48 md:h-64 w-48 md:w-64 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PotatoSection;
const PotatoSection = () => {
  return (
    <section 
      id="pota-section" 
      className="min-h-screen w-full bg-potato-beige flex items-center justify-center py-20"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-12">
            <img 
              src="/lovable-uploads/8b433ac7-8307-4fad-a518-575db7291bdc.png" 
              alt="I AM $POTA" 
              className="h-72 md:h-96 lg:h-[30rem] w-auto object-contain"
            />
          </div>
          <p className="text-2xl md:text-4xl text-potato-brown mb-18 leading-relaxed font-comic">
            The most adorable potato in the crypto world! 🥔
          </p>
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-potato-brown/20 mb-18">
            <p className="text-2xl md:text-3xl text-foreground leading-relaxed font-comic">
              Join the potato revolution and discover the charm of $POTA. 
              From humble beginnings in the digital soil to becoming the most beloved spud on the blockchain. 
              Let's fry the charts with $POTA now!
            </p>
          </div>
          
          {/* Potato Characters Gallery */}
          <div className="overflow-hidden max-w-6xl mx-auto">
            {/* Top row - sliding left to right */}
            <div className="flex gap-12 mb-12 animate-slide-left">
              {[
                { src: "/lovable-uploads/1b1cc06f-f17a-4ea1-8790-22ba74a27e2b.png", alt: "Potato Tarot" },
                { src: "/lovable-uploads/775d2571-c10e-473c-9b29-19b8ad000cee.png", alt: "Happy Potato" },
                { src: "/lovable-uploads/ef2179c3-752d-42da-97df-a374a52cccf0.png", alt: "Love Potato" },
                { src: "/lovable-uploads/1fa31d05-98f1-455b-ad6d-8f6eb892b410.png", alt: "Cool Potato" },
                { src: "/lovable-uploads/2f0bb0f1-1452-4f19-9b2e-fb465679389d.png", alt: "Potato and Ketchup" },
                { src: "/lovable-uploads/45b09e0f-7347-4b14-98c7-bef86119c3fd.png", alt: "Flat Potato" },
                { src: "/lovable-uploads/56f1331d-f65c-430c-9634-d9eed098ffc7.png", alt: "Hat Potato" },
                { src: "/lovable-uploads/810a5cb0-5144-4c62-b9ac-a71247a7c15e.png", alt: "Glasses Potato" },
                { src: "/lovable-uploads/ccd6753a-1ec5-409e-bbb3-ad0ef3876bda.png", alt: "Sleepy Potato" },
                { src: "/lovable-uploads/1b1cc06f-f17a-4ea1-8790-22ba74a27e2b.png", alt: "Potato Tarot" },
              ].map((potato, index) => (
                <div key={index} className="flex-shrink-0">
                  <div className="bg-potato-beige p-6 rounded-2xl border-2 border-potato-brown/20 shadow-lg transition-transform duration-300 hover:scale-110">
                    <img 
                      src={potato.src}
                      alt={potato.alt}
                      className="h-72 md:h-96 w-72 md:w-96 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bottom row - sliding right to left */}
            <div className="flex gap-12 animate-slide-right">
              {[
                { src: "/lovable-uploads/ccd6753a-1ec5-409e-bbb3-ad0ef3876bda.png", alt: "Sleepy Potato" },
                { src: "/lovable-uploads/810a5cb0-5144-4c62-b9ac-a71247a7c15e.png", alt: "Glasses Potato" },
                { src: "/lovable-uploads/56f1331d-f65c-430c-9634-d9eed098ffc7.png", alt: "Hat Potato" },
                { src: "/lovable-uploads/45b09e0f-7347-4b14-98c7-bef86119c3fd.png", alt: "Flat Potato" },
                { src: "/lovable-uploads/2f0bb0f1-1452-4f19-9b2e-fb465679389d.png", alt: "Potato and Ketchup" },
                { src: "/lovable-uploads/1fa31d05-98f1-455b-ad6d-8f6eb892b410.png", alt: "Cool Potato" },
                { src: "/lovable-uploads/ef2179c3-752d-42da-97df-a374a52cccf0.png", alt: "Love Potato" },
                { src: "/lovable-uploads/775d2571-c10e-473c-9b29-19b8ad000cee.png", alt: "Happy Potato" },
                { src: "/lovable-uploads/1b1cc06f-f17a-4ea1-8790-22ba74a27e2b.png", alt: "Potato Tarot" },
                { src: "/lovable-uploads/ccd6753a-1ec5-409e-bbb3-ad0ef3876bda.png", alt: "Sleepy Potato" },
              ].map((potato, index) => (
                <div key={index} className="flex-shrink-0">
                  <div className="bg-potato-beige p-6 rounded-2xl border-2 border-potato-brown/20 shadow-lg transition-transform duration-300 hover:scale-110">
                    <img 
                      src={potato.src}
                      alt={potato.alt}
                      className="h-72 md:h-96 w-72 md:w-96 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PotatoSection;
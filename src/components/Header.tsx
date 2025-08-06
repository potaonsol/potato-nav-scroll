const Header = () => {
  return (
    <header className="w-full h-screen flex justify-center">
      <div 
        className="w-1/2 h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/lovable-uploads/97eaa652-d7da-41b9-84bc-2113942b84ef.png')"
        }}
      >
        <div className="absolute inset-0 bg-black/10" />
      </div>
    </header>
  );
};

export default Header;
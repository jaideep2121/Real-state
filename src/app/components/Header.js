
import Image from 'next/image';
import image from "../../../public/westin-hotels-resort4429.jpg"

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <Image 
          src="/logo.png" // Place logo in the "public" folder
          alt="Company Logo" 
          width={150} 
          height={50} 
          priority 
        />
      </div>

   
    </header>
  );
};

export default Header;

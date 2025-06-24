// import { Link } from 'react-router-dom';
// import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
// import { FiSearch } from 'react-icons/fi';

// function Navbar() {
//   return (
//     <header className="w-full border-b border-gray-200 shadow-sm font-sans">
//       <div className="h-16 w-full flex items-center justify-between px-6 relative">

//         {/* Left: Social Icons */}
//         <div className="flex items-center space-x-4 text-gray-600 text-sm">
//           <a href="#" className="hover:text-black"><FaFacebookF /></a>
//           <a href="#" className="hover:text-black"><FaTwitter /></a>
//           <a href="#" className="hover:text-black"><FaInstagram /></a>
//         </div>

//         {/* Center: Navigation */}
//         <nav className="absolute left-1/2 transform -translate-x-1/2">
//           <ul className="flex space-x-6 uppercase text-[16px] tracking-[.2em] font-semibold">
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/gallery">Gallery</Link></li>
//             <li><Link to="/poems">Poems</Link></li>
//             <li><Link to="/blog">Blog</Link></li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//           </ul>
//         </nav>

//         {/* Right: Search */}
//         <div className="flex items-center text-gray-600 hover:text-black cursor-pointer">
//           <Link to="/search">
//             <FiSearch size={16} />
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Navbar;


import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Poems', path: '/poems' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="w-full border-b border-gray-200 shadow-sm font-sans z-50 relative">
      <div className="h-16 w-full flex items-center justify-between px-6 relative">

        {/* Left: Social Icons */}
        <div className="flex items-center space-x-4 text-gray-600 text-sm">
          <a href="#" className="hover:text-black"><FaFacebookF /></a>
          <a href="#" className="hover:text-black"><FaTwitter /></a>
          <a href="#" className="hover:text-black"><FaInstagram /></a>
        </div>

        {/* Center Nav (Desktop Only) */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex space-x-6 uppercase text-[15px] tracking-[.15em] font-semibold">
            {navItems.map((item, i) => (
              <li key={i}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Search + Mobile Menu Icon */}
        <div className="flex items-center space-x-4 text-gray-600 text-sm">
          <Link to="/search" className="hover:text-black">
            <FiSearch size={16} />
          </Link>
          <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiOutlineX size={20} /> : <HiOutlineMenu size={20} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden px-6 overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-screen pt-4 pb-6' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col space-y-3 uppercase text-[14px] tracking-wider font-semibold">
          {navItems.map((item, i) => (
            <li key={i}>
              <Link to={item.path} onClick={() => setMenuOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;

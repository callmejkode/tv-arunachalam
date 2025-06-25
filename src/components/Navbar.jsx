import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);

  const mobileMenuRef = useRef();

  const navItems = [
    { name: 'Home', path: '/' },
     { name: 'About', path: '/about' },
         { name: 'Blog', path: '/blog' },
             { name: 'Poems', path: '/poems' },
    { name: 'Gallery', path: '/gallery' },


   
    { name: 'Contact', path: '/contact' },
  ];
useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 60) {
      setShowNavbar(false); // scrolling down
    } else {
      setShowNavbar(true);  // scrolling up
    }

    setLastScrollY(currentScrollY);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [lastScrollY]);


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
    <header
  className={`w-full border-b border-gray-200 shadow-sm font-sans z-50 fixed top-0 left-0 bg-white transition-transform duration-300 ease-in-out ${
    showNavbar ? 'translate-y-0' : '-translate-y-full'
  }`}
>

      <div className="h-16 w-full flex items-center justify-between px-6 relative">

        {/* Left: Social Icons */}
        <div className="flex items-center space-x-4 text-gray-600 text-sm">
          <a href="#" className="hover:text-black"><FaFacebookF /></a>
          <a href="#" className="hover:text-black"><FaTwitter /></a>
          <a href="#" className="hover:text-black"><FaInstagram /></a>
        </div>

        {/* Center Nav (Desktop Only) */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex space-x-6 graytext uppercase text-[15px] tracking-[.15em] font-semibold">
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

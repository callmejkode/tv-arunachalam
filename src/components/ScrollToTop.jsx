import { useEffect, useState } from 'react';
import { FiChevronUp } from 'react-icons/fi';

function ScrollToTop() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setProgress(scrolled);
      setShow(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-md border border-gray-300 transition-all hover:shadow-lg"
    >
      {/* SVG Circular Progress Ring */}
      <svg className="absolute w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
        <path
          className="text-gray-300"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
        />
        <path
          className="text-[#AB977A]"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeDasharray={`${progress}, 100`}
          d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
        />
      </svg>

      {/* Up Icon */}
      <FiChevronUp className="relative text-[#AB977A] z-10" size={25} />
    </button>
  );
}

export default ScrollToTop;

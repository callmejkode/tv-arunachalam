import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white text-gray-800 px-6 pt-6 pb-6 font-sans relative">

      {/* Top Border Line */}
      <div className="absolute top-0 left-0 w-full border-t border-gray-200"></div>

      {/* Floating Social Icons (intersecting border) */}
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white px-4">
        <div className="flex justify-center space-x-4">
          {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, i) => (
            <div key={i} className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 cursor-pointer">
              <Icon className="text-gray-500" size={14} />
            </div>
          ))}
        </div>
      </div>

     <div className="max-w-screen-xl mx-auto px-6">

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-sm mt-12 mb-12">


        {/* About Me */}
        <div>
          <h4 className="uppercase text-[13px] graytext tracking-[2.5px] font-bold mb-3 tracking-wide">About Me</h4>
          <img src="/your-profile.png" alt="Profile" className="w-20 h-20 object-cover mb-2" />
          <p>Hello. I am a freelance writer. I live in a small town somewhere in the world.</p>
        </div>

        {/* Tags */}
        <div>
          <h4 className="uppercase text-[13px] graytext tracking-[2.5px] font-bold mb-3 tracking-wide">Tags</h4>
          <div className="flex flex-wrap gap-2">
            {['design', 'layout', 'photo', 'css', 'typography', 'mobile'].map((tag, i) => (
             <span
    key={i}
    className="px-2 py-[5px] text-xs border rounded-sm border-[#AB977A] text-[#AB977A] hover:text-[#585858] transition-all duration-200"
  >
    {tag}
  </span>
            ))}
          </div>
        </div>

        {/* Trending */}
        <div>
          <h4 className="uppercase text-[13px] graytext tracking-[2.5px] font-bold mb-3 tracking-wide">Trending</h4>
          {[1, 2].map((_, i) => (
            <div className="flex items-center mb-3" key={i}>
              <img src={`/trending${i+1}.jpg`} className="w-12 h-12 object-cover mr-3" alt="Trending" />
              <div>
                <p className="text-sm font-medium leading-tight">Scrap Surf</p>
                <p className="text-xs text-gray-400">May 5, 2025</p>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Posts */}
        <div>
          <h4 className="uppercase text-[13px] graytext tracking-[2.5px] font-bold mb-3 tracking-wide">Recent Posts</h4>
         <ul className="space-y-3">
  {[
    'Runaway A Road Adventure',
    'All In Our Head',
    'The Life Of Stuff',
    'Smaller Plate',
    'Scrap Surf'
  ].map((post, i) => (
    <li
      key={i}
      className="text-[15px] border-b text-[#585858] hover:text-[#AB977A] hover:border-[#AB977A] mb-3 pb-1 transition-all duration-200 cursor-pointer"
    >
      {post}
    </li>
  ))}
</ul>

        </div>
      </div>
      </div>

      {/* Footer Bottom Line */}
      <div className="border-t border-gray-200 pt-4 text-center text-xs text-gray-400">
        crafted with ❤️ by JKODE
      </div>
    </footer>
  );
}

export default Footer;

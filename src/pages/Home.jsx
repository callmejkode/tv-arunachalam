import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import { FaPencilRuler, FaCameraRetro, FaCode, FaMusic, FaMicrophone, FaGlobe, FaPenFancy, FaFlag, FaCamera } from 'react-icons/fa';

function Home() {
  const blogs = [
    { title: 'Runaway A Road Adventure', path: '/blog/runaway-adventure', time: '3 MIN' },
    { title: 'All In Our Head', path: '/blog/all-in-our-head', time: '1 MIN' },
    { title: 'The Life Of Stuff', path: '/blog/the-life-of-stuff', time: '1 MIN' },
    { title: 'Smaller Plate', path: '/blog/smaller-plate', time: '1 MIN' },
    { title: 'Scrap Surf', path: '/blog/scrap-surf', time: '1 MIN' },
    { title: 'Alice On The Roof', path: '/blog/alice-on-the-roof', time: '1 MIN' },
  ];
  return (
    <>

      <section className="relative w-full min-h-[70vh] bg-white font-serif text-center pt-20 pb-20">
        <div className="flex justify-center mb-4">
          <img src="tv-arunachalam-logo.png" alt="Banner" className="w-80 h-auto object-contain" />
        </div>

        <div className="w-full border-t border-gray-200 mb-10"></div>

        <div className="text-[#555] space-y-4 pt-10 px-6 leading-[1.8]">
          <p className="text-base sm:text-lg md:text-2xl lg:text-3xl flex justify-center items-center gap-2 leading-snug sm:leading-normal">
            Hello. I am{' '}
            <span className="font-bold inline-block text-left sm:min-w-[220px]">
              <Typewriter
                words={[
                  'a journalist',
                  'a problem solver',
                  'a freelancer',
                  'a coffee lover',
                  'a writer',
                  'a photographer',
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </p>
          <p className="text-lg sm:text-xl md:text-2xl">I live in a small town. Somewhere in the world.</p>
          <p className="text-lg sm:text-xl md:text-2xl">I write about <span className="font-bold">life</span> and biking.</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full pt-20 text-center  border-gray-200 bg-white ">
        <h2 className="uppercase text-base tracking-widest graytext tracking-[.2em] mb-2">Services I Can Provide</h2>
         <div className="border-t border-gray-200 w-full max-w-[1100px] mx-auto mb-10"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">
          {/* Service Cards */}
          <div>
            <FaPencilRuler className="mx-auto text-4xl text-gray-500 mb-4" />
            <h4 className=" graytext text-[18px] font-semibold mb-2">Graphic Design</h4>
            <p className="text-base litegray leading-relaxed">
              I design super cool websites. It's a long established fact that a reader will be distracted by the readable content.
            </p>
          </div>

          <div>
            <FaCameraRetro className="mx-auto text-4xl text-gray-500 mb-4" />
            <h3 className="graytext text-[18px] font-semibold mb-2">Photography</h3>
            <p className="text-base litegray leading-relaxed">
              I can design beautiful typefaces for both digital and print media. A reader will be distracted by the readable content.
            </p>
          </div>

          <div>
            <FaCode className="mx-auto text-4xl text-gray-500 mb-4" />
            <h3 className="graytext text-[18px] font-semibold mb-2">Web Development</h3>
            <p className="text-base litegray leading-relaxed">
              I write about web design. It's a long established fact that a reader will be distracted by the readable content.
            </p>
          </div>

          <div>
            <FaMusic className="mx-auto text-4xl text-gray-500 mb-4" />
            <h3 className="graytext text-[18px] font-semibold mb-2">Music Composer</h3>
            <p className="text-base litegray leading-relaxed">
              I have strong project management skills. It's a long established fact that a reader will be distracted.
            </p>
          </div>
        </div>
      </section>

      {/* Fun Fact Section */}
      <section className="w-full py-20 text-center  border-gray-200 bg-white ">
        <h2 className="uppercase text-base tracking-widest graytext tracking-[.2em] mb-2">Fun Fact</h2>
               <div className="border-t border-gray-200 w-full max-w-[1100px] mx-auto mb-10"></div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto px-6 text-center text-sm text-gray-700">
          <div>
            <FaCode className="mx-auto text-4xl text-gray-500 mb-4" />
            <p className="text-base litegray leading-relaxed">72 Projects <br></br> Completed</p>
           
          </div>
          <div>
            <FaPenFancy className="mx-auto text-4xl text-gray-500 mb-4" />
            <p className="text-base litegray leading-relaxed">24M Lines <br></br>of  Code</p>
     
          </div>
          <div>
            <FaMicrophone className="mx-auto text-4xl text-gray-500 mb-4" />
            <p className="text-base litegray leading-relaxed">24 Podcasts <br></br>Released</p>
        
          </div>
          <div>
            <FaPencilRuler className="mx-auto text-4xl text-gray-500 mb-4" />
            <p className="text-base litegray leading-relaxed">230 Articles <br></br>Wrote</p>
  
          </div>
          <div>
            <FaFlag className="mx-auto text-4xl text-gray-500 mb-4" />
            <p className="text-base litegray leading-relaxed">14 Countries <br></br>Visited</p>
      
          </div>
          <div>
            <FaCamera className="mx-auto text-4xl text-gray-500 mb-4" />
            <p className="text-base litegray leading-relaxed">2300 Shots <br></br>Captured</p>
    
          </div>
        </div>
      </section>

        <section className="w-full bg-white py-16 text-center ">
      {/* Title */}
      <h2 className="text-xs uppercase tracking-[.25em] text-gray-700 mb-4">
        Latest from the blog
      </h2>
      <div className="w-[90%] max-w-5xl mx-auto border-t border-gray-200 mb-10"></div>

      {/* Blog list */}
      <div className="space-y-6">
        {blogs.map((blog, index) => (
          <div key={index} className=" pb-3">
            <Link
              to={blog.path}
              className="text-[18px] sm:text-xl graytext hover:underline hover:graytext transition-all duration-200"
            >
              {blog.title}
            </Link>
            <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">{blog.time} • Editor</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}

export default Home;

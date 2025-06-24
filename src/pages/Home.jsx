import { Typewriter } from 'react-simple-typewriter';

function Home() {


  return (
   <section className="relative w-full min-h-[70vh] bg-white font-serif text-center pt-8 pb-20">
      
      {/* Logo */}
      <div className="flex justify-center mb-2">
        <img
          src="tv-arunachalam-logo.png"
          alt="Banner image"
          className=" w-80 h-auto object-contain"
        />
      </div>

      {/* Divider Line */}
     <div className="w-full border-t border-gray-200 mb-10"></div>

 <div className="text-[#555] space-y-4 px-6 leading-[1.8]">
      <p className="text-base sm:text-lg md:text-2xl lg:text-3xl flex justify-center items-center gap-2 leading-snug sm:leading-normal">
  Hello. I am{' '}
  <span className=" font-bold inline-block text-left sm:min-w-[220px]">
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

        <p className="text-lg sm:text-xl md:text-2xl">
          I live in a small town somewhere in the world.
        </p>

        <p className="text-lg sm:text-xl md:text-2xl">
          I write about <span className=" font-bold ">life</span> and biking.
        </p>
      </div>
    </section>
  );
}

export default Home;

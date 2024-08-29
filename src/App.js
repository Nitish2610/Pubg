import ImageSlider from './components/ImageSlider.js'; 
import ContestCard from './components/ContestCard.js';
import SponsorCard from './components/SponsorCard'; 

function App() {
  return (
    <div className="bg-slate-900 h-full">
      {/* navbar starts here */}
       <nav className='w-full h-14 bg-black flex justify-between px-6'>
        <div className='text-2xl text-yellow-600 font-semibold content-center mx-2'>
           PUBG BATTLEGROUND
        </div>
        <div className="content-center">
        <ul className='md:flex'>
          <li className='text-xl text-white mx-[15px] cursor-pointer'>Login</li>
          <li className='text-xl text-white mx-[15px] cursor-pointer'>Signup</li>
          {/* <li className='text-xl text-white mx-[15px] cursor-pointer'>Play Now</li> */}
        </ul>
        </div>
       </nav>

       {/* navbar ends here */}
       
       {/* <header className="w-full h-auto">
        <img
          className="w-full"
          src={require('./assets/pubg.jpg')}
          alt=""
        />
      </header> */}

       {/* Image Slider */}
       <ImageSlider />
       {/* Image Slider ends here */}

       {/* Contest Section */}
       <div className='text-center  mt-4'>
        <h1 className='text-4xl text-yellow-500'>Contest</h1>
        <div className="flex justify-center">
        <div className="w-44 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
       </div>
        </div>
        
        
        <div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-4'>

        <ContestCard
        imageSrc={require('./assets/contest1.jpg')}
        title="Players"
        description="Entry Fee"
        link="#"
      />
       <ContestCard
        imageSrc={require('./assets/contest2.jpg')}
        title="Players"
        description="Entry Fee"
        link="#"
      />
       <ContestCard
        imageSrc={require('./assets/contest3.jpg')}
        title="Players"
        description="Entry Fee"
        link="#"
      />
      <ContestCard
        imageSrc={require('./assets/contest4.jpg')}
        title="Players"
        description="Entry Fee"
        link="#"
      />
      <ContestCard
        imageSrc={require('./assets/contest5.jpg')}
        title="Players"
        description="Entry Fee"
        link="#"
      />
      <ContestCard
        imageSrc={require('./assets/contest6.jpg')}
        title="Players"
        description="Entry Fee"
        link="#"
      />
      <ContestCard
        imageSrc={require('./assets/contest7.jpg')}
        title="Players"
        description="Entry Fee"
        link="#"
      />
      <ContestCard
        imageSrc={require('./assets/contest8.jpg')}
        title="Players"
        description="Entry Fee"
        link="#"
      />

     </div>
      {/* Contest Section ends here */}
      <div className='text-center  mt-4'>
        <h1 className='text-4xl text-yellow-500'>Sponsors By</h1>
        <div className="flex justify-center">
        <div className="w-44 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
       </div>
        </div>

        <div className="h-300 w-100 flex flex-wrap flex-col items-center text-center p-6">
      <div className="w-[90%] h-auto flex flex-wrap justify-around">
        {/* Use SponsorCard component for each sponsor */}
        <SponsorCard
          imageSrc={require('./assets/sponsor1.jpg')}
          title="Xiaomi"
          description="Level up your PUBG Mobile game with Xiaomi. Dominate the battlefield with 
          high-performance devices built for ultimate speed and immersive graphics.
           Play like a pro with Xiaomi’s gaming tech."
        />
        <SponsorCard
          imageSrc={require('./assets/sponsor2.jpg')}
          title="Qualcomm"
          description="Gear up for the ultimate PUBG Mobile experience with Qualcomm.
           Enjoy lightning-fast performance, stunning graphics, and seamless
           gameplay powered by Qualcomm's advanced mobile processors. "
        />
        <SponsorCard
          imageSrc={require('./assets/sponsor3.jpg')}
          title="Hyper"
          description="Dominate the battlegrounds with Hyper's cutting-edge gaming gear. Experience unrivaled 
          precision, speed, and comfort with Hyper's high-performance accessories, 
          designed to elevate your PUBG gameplay to the next level."
        />
        <SponsorCard
          imageSrc={require('./assets/sponsor4.jpg')}
          title="Intel"
          description="Level up your PUBG gameplay with Intel's unmatched processing power. 
          Experience smoother, faster, and more responsive battles with Intel's advanced technology, 
          built to give you the ultimate competitive edge. Game on with Intel inside"
        />
        <SponsorCard
          imageSrc={require('./assets/sponsor5.jpg')}
          title="F9 Pro"
          description="Dominate the battlegrounds with F9 Pro's lightning-fast performance and 
          immersive display. Gear up with F9 Pro for the ultimate PUBG experience,
           delivering seamless gameplay and stunning visuals."
        />
        <SponsorCard
          imageSrc={require('./assets/sponsor6.jpg')}
          title="Infinix Gt10 Pro"
          description="Unleash your gaming potential with the Infinix GT10 Pro. Experience PUBG like never
           before with blazing speed, 
          enhanced graphics, and seamless gameplay on Infinix’s powerhouse device."
        />
        <SponsorCard
          imageSrc={require('./assets/sponsor7.jpg')}
          title="Vivo"
          description="Dominate the battlegrounds with Infinix Vivo! Experience superior gaming performance, 
          vivid visuals, and lightning-fast response times, 
          making every match in PUBG a victory."
        />
        <SponsorCard
          imageSrc={require('./assets/sponsor8.jpg')}
          title="Xioami"
          description="Elevate your PUBG experience with the Redmi Note by Xiaomi! Enjoy seamless 
          gameplay and stunning graphics with a 
          device designed to handle intense battles with ease."
        />
      </div>
    </div>
      {/* Community section starts here */}

      {/* Footer starts here */}
      <div className='bg-black'>
      <div className="p-4 flex justify-center space-x-4">
  {/* Facebook Icon */}
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <img
      src={require('./assets/facebook.png')}
      alt="Facebook"
      className="w-8 h-8 cursor-pointer hover:opacity-75 transition ease-in-out duration-200 mt-10"
    />
  </a>

  {/* Twitter Icon */}
  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
    <img
      src={require('./assets/twitter.png')}
      alt="Twitter"
      className="w-8 h-8 cursor-pointer hover:opacity-75 transition ease-in-out duration-200 mt-10"
    />
  </a>

  {/* Instagram Icon */}
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <img
      src={require('./assets/instagram.png')}
      alt="Instagram"
      className="w-8 h-8 cursor-pointer hover:opacity-75 transition ease-in-out duration-200 mt-10"
    />
  </a>

  {/* LinkedIn Icon */}
  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
    <img
      src={require('./assets/linkedin.png')}
      alt="LinkedIn"
      className="w-8 h-8 cursor-pointer hover:opacity-75 transition ease-in-out duration-200 mt-10"
    />
  </a>

  <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
    <img
      src={require('./assets/whatsapp.png')}
      alt="LinkedIn"
      className="w-8 h-8 cursor-pointer hover:opacity-75 transition ease-in-out duration-200 mt-10"
    />
  </a>
  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
    <img
      src={require('./assets/youtube.png')}
      alt="LinkedIn"
      className="w-8 h-8 cursor-pointer hover:opacity-75 transition ease-in-out duration-200 mt-10"
    />
  </a>
  <a href="https://www.gmail.com" target="_blank" rel="noopener noreferrer">
    <img
      src={require('./assets/social.png')}
      alt="LinkedIn"
      className="w-8 h-8 cursor-pointer hover:opacity-75 transition ease-in-out duration-200 mt-10"
    />
  </a>
  <a href="https://web.telegram.org/k/" target="_blank" rel="noopener noreferrer">
    <img
      src={require('./assets/telegram.png')}
      alt="LinkedIn"
      className="w-8 h-8 cursor-pointer hover:opacity-75 transition ease-in-out duration-200 mt-10"
    />
  </a>
</div>

     <div className='justify-center flex'>
       <h1 className='text-white font-bold text-2xl mt-8'>PUBG: BATTLEGROUNDS | KRAFTON</h1>
     </div>

     <div className='justify-center flex'>
        <h1 className='text-white font-medium mt-12 mb-12'>
        PRIVACY POLICY
|
TERMS OF SERVICE
|
RULES OF CONDUCT
|
CONTENT CREATION GUIDELINE
|
COOKIE PREFERENCES
        </h1>
     </div>

  </div>



      
    </div>
  );
}

export default App;

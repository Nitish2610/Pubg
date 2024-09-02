import ImageSlider from "./components/ImageSlider.js";
import ContestCard from "./components/ContestCard.js";
import SponsorCard from "./components/SponsorCard.js";
import ContestSlider from "./components/ContestSlider.js";
import contest1 from "./assets/contest1.jpg";
import contest2 from "./assets/contest2.jpg";
import contest3 from "./assets/contest3.jpg";
import contest4 from "./assets/contest4.jpg";
import contest5 from "./assets/contest5.jpg";
import contest6 from "./assets/contest6.jpg";
import contest7 from "./assets/contest7.jpg";
import contest8 from "./assets/contest8.jpg";
import Faq from "./components/Faq.js"
import { Link } from 'react-router-dom';

const contestCards = [
  {
    imageSrc: contest1,
    title: "Players Contest 1",
    description: "Entry Fee: $10",
    link: "#",
  },
  {
    imageSrc: contest2,
    title: "Players Contest 2",
    description: "Entry Fee: $20",
    link: "#",
  },
  {
    imageSrc: contest3,
    title: "Players Contest 3",
    description: "Entry Fee: $30",
    link: "#",
  },
  {
    imageSrc: contest4,
    title: "Players Contest 4",
    description: "Entry Fee: $40",
    link: "#",
  },
  {
    imageSrc: contest5,
    title: "Players Contest 5",
    description: "Entry Fee: $50",
    link: "#",
  },
  {
    imageSrc: contest6,
    title: "Players Contest 6",
    description: "Entry Fee: $60",
    link: "#",
  },
  {
    imageSrc: contest7,
    title: "Players Contest 7",
    description: "Entry Fee: $70",
    link: "#",
  },
  {
    imageSrc: contest8,
    title: "Players Contest 8",
    description: "Entry Fee: $80",
    link: "#",
  },
];

function App() {
  return (
    <div className="bg-slate-900 h-full">
      {/* navbar starts here */}
      <nav className="w-full h-16 bg-black flex justify-between px-6">
        <div className="text-2xl text-yellow-600 font-semibold content-center mx-2">
        COSMIC PLAYGROUND
        </div>
        <div className="content-center">
          <ul className="md:flex">
            <li className="text-xl text-white mx-[13px] cursor-pointer hover:text-blue-400 transition duration-300">
            <Link to="/login">Login</Link>
            </li>
            <li className="text-xl text-white mx-[13px] cursor-pointer hover:text-blue-400 transition duration-300">
            <Link to="/signup">Signup</Link>
            </li>
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
      <div className="text-center  mt-4">
        <h1 className="text-4xl text-yellow-500">Contest</h1>
        <div className="flex justify-center">
          <div className="w-44 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
        </div>
      </div>

      <ContestSlider cards={contestCards} interval={3000} />

      {/* Contest Section ends here */}

      <div className="text-center  mt-4">
        <h1 className="text-4xl text-yellow-500">Review And Rating</h1>
        <div className="flex justify-center">
          <div className="w-44 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
        </div>
      </div>

         {/* Review Section starts here */}
      {/* <div className="h-300 w-100 flex flex-wrap flex-col items-center text-center p-6">
        <div className="w-[90%] h-auto flex flex-wrap justify-around">
          <SponsorCard
            imageSrc={require("./assets/sponsor1.jpg")}
            title="Xiaomi"
            description="Level up your PUBG Mobile game with Xiaomi. Dominate the battlefield with 
          high-performance devices built for ultimate speed and immersive graphics.
           Play like a pro with Xiaomi’s gaming tech."
          />
          <SponsorCard
            imageSrc={require("./assets/sponsor2.jpg")}
            title="Qualcomm"
            description="Gear up for the ultimate PUBG Mobile experience with Qualcomm.
           Enjoy lightning-fast performance, stunning graphics, and seamless
           gameplay powered by Qualcomm's advanced mobile processors. "
          />
          <SponsorCard
            imageSrc={require("./assets/sponsor3.jpg")}
            title="Hyper"
            description="Dominate the battlegrounds with Hyper's cutting-edge gaming gear. Experience unrivaled 
          precision, speed, and comfort with Hyper's high-performance accessories, 
          designed to elevate your PUBG gameplay to the next level."
          />
          <SponsorCard
            imageSrc={require("./assets/sponsor4.jpg")}
            title="Intel"
            description="Level up your PUBG gameplay with Intel's unmatched processing power. 
          Experience smoother, faster, and more responsive battles with Intel's advanced technology, 
          built to give you the ultimate competitive edge. Game on with Intel inside"
          />
          <SponsorCard
            imageSrc={require("./assets/sponsor5.jpg")}
            title="F9 Pro"
            description="Dominate the battlegrounds with F9 Pro's lightning-fast performance and 
          immersive display. Gear up with F9 Pro for the ultimate PUBG experience,
           delivering seamless gameplay and stunning visuals."
          />
          <SponsorCard
            imageSrc={require("./assets/sponsor6.jpg")}
            title="Infinix Gt10 Pro"
            description="Unleash your gaming potential with the Infinix GT10 Pro. Experience PUBG like never
           before with blazing speed, 
          enhanced graphics, and seamless gameplay on Infinix’s powerhouse device."
          />
          <SponsorCard
            imageSrc={require("./assets/sponsor7.jpg")}
            title="Vivo"
            description="Dominate the battlegrounds with Infinix Vivo! Experience superior gaming performance, 
          vivid visuals, and lightning-fast response times, 
          making every match in PUBG a victory."
          />
          <SponsorCard
            imageSrc={require("./assets/sponsor8.jpg")}
            title="Xioami"
            description="Elevate your PUBG experience with the Redmi Note by Xiaomi! Enjoy seamless 
          gameplay and stunning graphics with a 
          device designed to handle intense battles with ease."
          />
        </div>
      </div> */}
      <div className="flex flex-wrap justify-center">
   <div class="mx-2 relative flex flex-col mt-6 bg-white shadow-lg border border-gray-300 rounded-lg w-96 overflow-hidden mb-6">
  <div class="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
      <span class="text-sm font-medium">
          Player Reviews
      </span>
  </div>
  <div class="p-4">
      <h5 class="mb-3 text-gray-800 text-2xl font-bold">
      BGMI: The Ultimate Battle Royale Adventure
      </h5>
      <p class="text-gray-700 leading-relaxed font-light">
      <span class="font-semibold">BGMI</span> delivers a heart-pounding battle royale experience that keeps players on the edge of their seats. Dive into a sprawling map with diverse terrains, where every match offers a fresh challenge. The immersive graphics, realistic gunplay, and strategic depth make each game a unique journey. Whether you’re teaming up with friends or going solo, the thrill of being the last one standing is unparalleled. The game’s frequent updates and vibrant community ensure a constantly evolving experience, making <span class="font-semibold">PUBG</span> a must-play for battle royale enthusiasts.
      </p>
      <div class="mt-4 flex items-center">
          <span class="text-yellow-400 text-2xl">★★★★★</span>
          <span class="ml-2 text-gray-600 text-sm">(4.8/5 based on 1,245 reviews)</span>
      </div>
  </div>
</div>

<div class=" mx-2 relative flex flex-col mt-6 bg-white shadow-lg border border-gray-300 rounded-lg w-96 overflow-hidden mb-6">
  <div class="bg-gradient-to-r from-green-500 to-teal-600 text-white p-4">
      <span class="text-sm font-medium">
          Tactical Mastery
      </span>
  </div>
  <div class="p-4">
      <h5 class="mb-3 text-gray-800 text-2xl font-bold">
      BGMI: Strategy and Skill Combined
      </h5>
      <p class="text-gray-700 leading-relaxed font-light">
      <span class="font-semibold">BGMI</span> is more than just a shooter; it’s a test of wits and strategy. Whether you're planning an ambush or navigating the shrinking playzone, every decision matters. The blend of stealth, tactics, and high-intensity firefights makes this game a standout in the battle royale genre. With each match, you learn, adapt, and evolve, making every victory incredibly satisfying.
      </p>
      <div class="mt-4 flex items-center">
          <span class="text-yellow-400 text-2xl">★★★★☆</span>
          <span class="ml-2 text-gray-600 text-sm">(4.5/5 based on 980 reviews)</span>
      </div>
  </div>
</div>
<div class="mx-2 relative flex flex-col mt-6 bg-white shadow-lg border border-gray-300 rounded-lg w-96 overflow-hidden mb-6">
  <div class="bg-gradient-to-r from-red-500 to-pink-600 text-white p-4">
      <span class="text-sm font-medium">
          Adrenaline Rush
      </span>
  </div>
  <div class="p-4">
      <h5 class="mb-3 text-gray-800 text-2xl font-bold">
      BGMI: Heart-Pounding Action at Its Best
      </h5>
      <p class="text-gray-700 leading-relaxed font-light">
      From the moment you jump out of the plane, <span class="font-semibold">BGMI</span> is an adrenaline-fueled race to survive. The intensity of each encounter, the thrill of finding rare loot, and the rush of outmaneuvering your opponents create an experience that’s hard to match. Every game is a new story, filled with unexpected twists and unforgettable moments.
      </p>
      <div class="mt-4 flex items-center">
          <span class="text-yellow-400 text-2xl">★★★★★</span>
          <span class="ml-2 text-gray-600 text-sm">(4.9/5 based on 1,560 reviews)</span>
      </div>
  </div>
</div>
{/* <div class="mx-2 relative flex flex-col mt-6 bg-white shadow-lg border border-gray-300 rounded-lg w-96 overflow-hidden mb-6">
  <div class="bg-gradient-to-r from-purple-500 to-blue-600 text-white p-4">
      <span class="text-sm font-medium">
          Immersive Worlds
      </span>
  </div>
  <div class="p-4">
      <h5 class="mb-3 text-gray-800 text-2xl font-bold">
      PUBG: A World You Can Get Lost In
      </h5>
      <p class="text-gray-700 leading-relaxed font-light">
      The maps in <span class="font-semibold">PUBG</span> are vast and intricately designed, offering players a rich, immersive experience. Whether you’re battling in the urban sprawl of Erangel or the desert landscapes of Miramar, each environment feels unique and alive. The attention to detail in every corner of the map adds layers of depth to the gameplay, making exploration as rewarding as the combat itself.
      </p>
      <div class="mt-4 flex items-center">
          <span class="text-yellow-400 text-2xl">★★★★☆</span>
          <span class="ml-2 text-gray-600 text-sm">(4.7/5 based on 1,320 reviews)</span>
      </div>
  </div>
</div> */}
</div>

      {/* Review Section starts here*/}

      {/* Faq section starts here  */}
      <div className="text-center  mt-4">
        <h1 className="text-4xl text-yellow-500">FAQ</h1>
        <div className="flex justify-center">
          <div className="w-44 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
        </div>
      </div>

      <Faq/>

      {/* Faq section ends here */}

      {/* Footer starts here */}
      <div className="bg-black">
        <div className="p-4 flex justify-center space-x-4">
          {/* Facebook Icon */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("./assets/facebook.png")}
              alt="Facebook"
              className="w-8 h-8 cursor-pointer hover:opacity-75 transition ease-in-out duration-200 mt-10"
            />
          </a>

          {/* Twitter Icon */}
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("./assets/twitter.png")}
              alt="Twitter"
              className="w-8 h-8 cursor-pointer hover:opacity-75 transition ease-in-out duration-200 mt-10"
            />
          </a>

          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("./assets/instagram.png")}
              alt="Instagram"
              className="w-8 h-8 cursor-pointer hover:opacity-75 transition ease-in-out duration-200 mt-10"
            />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("./assets/linkedin.png")}
              alt="LinkedIn"
              className="w-8 h-8 cursor-pointer hover:opacity-75 transition ease-in-out duration-200 mt-10"
            />
          </a>

          <a
            href="https://www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("./assets/whatsapp.png")}
              alt="LinkedIn"
              className="w-8 h-8 cursor-pointer hover:opacity-75 transition ease-in-out duration-200 mt-10"
            />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("./assets/youtube.png")}
              alt="LinkedIn"
              className="w-8 h-8 cursor-pointer hover:opacity-75 transition ease-in-out duration-200 mt-10"
            />
          </a>
          <a
            href="https://www.gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("./assets/social.png")}
              alt="LinkedIn"
              className="w-8 h-8 cursor-pointer hover:opacity-75 transition ease-in-out duration-200 mt-10"
            />
          </a>
          <a
            href="https://web.telegram.org/k/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("./assets/telegram.png")}
              alt="LinkedIn"
              className="w-8 h-8 cursor-pointer hover:opacity-75 transition ease-in-out duration-200 mt-10"
            />
          </a>
        </div>

        <div className="justify-center flex">
          <h1 className="text-white font-bold text-2xl mt-8">
            BGMI: BATTLEGROUNDS | KRAFTON
          </h1>
        </div>

        <div className="justify-center flex">
      <h1 className="text-white font-medium mt-12 mb-12 space-x-4">
        <Link to="/privacy-policy" className="hover:underline">PRIVACY POLICY</Link> |
        <Link to="/terms-of-service" className="hover:underline">TERMS OF SERVICE</Link> |
        <Link to="/rules-of-conduct" className="hover:underline">RULES OF CONDUCT</Link> |
        <Link to="/content-creation-guideline" className="hover:underline">CONTENT CREATION GUIDELINE</Link> |
        <Link to="/cookie-preferences" className="hover:underline">COOKIE PREFERENCES</Link>
      </h1>
    </div>
      </div>
    </div>
  );
}

export default App;

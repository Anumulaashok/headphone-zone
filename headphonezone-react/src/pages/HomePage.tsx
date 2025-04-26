import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import {
  dealsData,
  trendingData,
  newLaunchesData,
  wfhData,
  unboxedData,
  logoData,
  slideShowData,
} from '../services/dataStorage';
import type { Product } from '../services/dataStorage';

// Define AlertType more explicitly
type AlertType = 'success' | 'error' | 'warning' | null;

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [chartProducts, setChartProducts] = useState<Product[]>([]);
  const [activeChart, setActiveChart] = useState<string>('deals');
  const [setupIndex, setSetupIndex] = useState<number>(0);

  // --- State for News Partners ---
  const [pizText, setPizText] = useState('pair of good cans.');
  const [piizText, setPiizText] = useState('Tired of the crappy ear buds that come with your');
  const [piiizText, setPiiizText] = useState('phone? Headphone Zone shows you how to buy a');

  // --- State for Newsletter ---
  const [email, setEmail] = useState('');

  // --- State for Alerts ---
  const [alert, setAlert] = useState<{ type: AlertType, message: string }>({ type: null, message: '' });

  // Load default chart data on mount
  useEffect(() => {
    setChartProducts(dealsData);
  }, []);

  // --- Chart Topping Handlers ---
  const handleDealsClick = () => { setChartProducts(dealsData); setActiveChart('deals'); };
  const handleTrendingClick = () => { setChartProducts(trendingData); setActiveChart('trending'); };
  const handleNewLaunchesClick = () => { setChartProducts(newLaunchesData); setActiveChart('newLaunches'); };
  const handleWfhClick = () => { setChartProducts(wfhData); setActiveChart('wfh'); };
  const handleUnboxedClick = () => { setChartProducts(unboxedData); setActiveChart('unboxed'); };

  // --- Product Click Handler ---
  const handleProductClick = (product: Product) => {
    localStorage.setItem("products", JSON.stringify(product));
    navigate(`/products/${product.id}`);
  };

  // --- Setup Slideshow Handlers ---
  const handleSetupPrev = () => { setSetupIndex(prev => (prev === 0 ? slideShowData.length - 1 : prev - 1)); };
  const handleSetupNext = () => { setSetupIndex(prev => (prev === slideShowData.length - 1 ? 0 : prev + 1)); };

  // --- News Partner Click Handlers ---
  const handleNdtvClick = () => { setPizText('phone? Headphone Zone shows you how to buy a'); setPiizText('pair of good cans.'); setPiiizText('Tired of the crappy ear buds that come with your'); };
  const handleExpressClick = () => { setPizText('You seek specialists for fashion, wine and art, but'); setPiizText('what stops you from doing so in your pursuit for'); setPiiizText('perfect sound? Headphone Zone solves that.'); };
  const handleTodayClick = () => { setPizText('With Headphone Zone, Indians now have a platform'); setPiizText('to experience high end headphones and to seek'); setPiiizText('advice from experts within the community.'); };
  const handleDayClick = () => { setPizText('What makes Headphone Zone stand out, is its range'); setPiizText('of audio accessories, DACs and high-res players from'); setPiiizText('the world’s top brands.'); };
  const handleIndulgeClick = () => { setPizText('With Headphone Zone, we don’t have to settle for'); setPiizText('earbuds that come bundled with our phones'); setPiiizText('. . .'); };
  const handleWireClick = () => { setPizText('Headphone Zone takes care of all customer queries'); setPiizText('directly thereby eliminating the knowledge gap'); setPiiizText('between the buyer and the product.'); };

  // --- Newsletter Handler ---
  const showAlert = (type: AlertType, message: string) => {
    setAlert({ type, message });
    setTimeout(() => setAlert({ type: null, message: '' }), 4000);
  };

  const handleSubscribe = () => {
    if (email.includes('@')) {
      setEmail('');
      showAlert('success', 'Subscription successful');
    } else {
      setEmail('');
      showAlert('error', 'Please, enter your e-mail');
    }
  };

  // Styles for active chart button
  const activeButtonStyle = { color: 'rgb(66, 66, 66)', borderBottom: '2px solid rgb(66, 66, 66)' };
  const inactiveButtonStyle = { color: 'gray', borderBottom: '2px solid transparent' };

  return (
    <div>
        {/* --- Alert Rendering --- */}
        {alert.type === 'success' && (<div className="alert successz" style={{ display: 'flex', position: 'fixed', top: '20px', left: '20px', zIndex: 1000, padding: '15px', borderRadius: '5px', backgroundColor: 'rgb(76, 187, 23)', color: 'white' }}><i className="fa-solid fa-circle-check" style={{ marginRight: '10px' }}></i><span>{alert.message}</span></div>)}
        {alert.type === 'error' && (<div className="alert errorz" style={{ display: 'flex', position: 'fixed', top: '20px', left: '20px', zIndex: 1000, padding: '15px', borderRadius: '5px', backgroundColor: 'orangered', color: 'white' }}><i className="fa-solid fa-circle-xmark" style={{ marginRight: '10px' }}></i><span>{alert.message}</span></div>)}
        {alert.type === 'warning' && (<div className="alert warningz" style={{ display: 'flex', position: 'fixed', top: '20px', left: '20px', zIndex: 1000, padding: '15px', borderRadius: '5px', backgroundColor: 'rgb(254, 206, 0)', color: 'rgb(74, 74, 74)' }}><i className="fa-solid fa-circle-exclamation" style={{ marginRight: '10px' }}></i><span>{alert.message}</span></div>)}


      <Slideshow />

      {/* Migrated Content Starts Here */}
      <div id="boxs1">
        <h1>START YOUR AUDIOPHILE JOURNEY HERE</h1>
        <div id="product_icons">
          <div className="icon"><img src="/images/Earphone.jpg" alt="" /><p>IN-EARS FOR BEGINNERS</p></div>
          <div className="icon"><img src="/images/Headphone.jpg" alt="" /><p>HEADPHONES FOR BEGINNERS</p></div>
          <div className="icon"><img src="/images/BT.jpg" alt="" /><p>TRUE WIRELESS EARBUDS</p></div>
          <div className="icon"><img src="/images/Wireless-HP.jpg" alt="" /><p>WIRELESS HEADPHONES</p></div>
          <div className="icon"><img src="/images/Flagship-BT.jpg" alt="" /><p>FLAGSHIP IEMS</p></div>
          <div className="icon"><img src="/images/Flagship-HP.jpg" alt="" /><p>FLAGSHIP HEADPHONES</p></div>
          <div className="icon"><img src="/images/Aud-player.jpg" alt="" /><p>HI-RES AUDIO PLAYERS</p></div>
          <div className="icon"><img src="/images/Portable-Amps.jpg" alt="" /><p>PORTABLE AMPS & DACS</p></div>
          <div className="icon"><img src="/images/Desktop-Amp.jpg" alt="" /><p>DESKTOP AMPS & DACS</p></div>
          <div className="icon"><img src="/images/Wfh.jpg" alt="" /><p>WORK FROM HOME</p></div>
          <div className="icon"><img src="/images/Joystick.jpg" alt="" /><p>GAMING</p></div>
          <div className="icon"><img src="/images/Studio-prof.jpg" alt="" /><p>STUDIO & PROFESSIONAL</p></div>
          <div className="icon"><img src="/images/Speaker.jpg" alt="" /><p>SPEAKERS</p></div>
          <div className="icon"><img src="/images/Cable.jpg" alt="" /><p>CABLES</p></div>
          <div className="icon"><img src="/images/Earpad.jpg" alt="" /><p>EARTIPS & EARPADS</p></div>
          <div className="icon"><img src="/images/BT-Case.jpg" alt="" /><p>CASES</p></div>
        </div>
        <h1>LIKE YOU, WE LOVE MUSIC...</h1>
        <p>And we believe a Headphone is more than just an instrument for sound.</p>
        <p>It’s the key to a mind-blowing moment of emotion, bringing you closer to your music, and yourself.</p>
        <p> We’ve curated the world’s finest headphones & earphones to help you discover the riffs, percussions, baselines and solos that were always there but never heard.</p>
      </div>

      <div id="videoz"><iframe src="https://player.vimeo.com/video/681364200?autoplay=1&autopause=1&background=1&loop=1&muted=1&transparent=0&responsive=1&portrait=0&title=0&byline=0&color=444444" frameBorder="0" allow="autoplay" style={{width: '100%', height: '700px'}}></iframe></div>

      <div id="toppingz">
        <div id="headingz">
          <div id="headz">CHART TOPPING HEADPHONES</div>
          <div>
            <button id="dealsz" onClick={handleDealsClick} style={activeChart === 'deals' ? activeButtonStyle : inactiveButtonStyle}>DEALS OF THE MONTH 💰</button>
            <button id="trendingz" onClick={handleTrendingClick} style={activeChart === 'trending' ? activeButtonStyle : inactiveButtonStyle}>TRENDING IN TOWN 🔥</button>
            <button id="newLaunchesz" onClick={handleNewLaunchesClick} style={activeChart === 'newLaunches' ? activeButtonStyle : inactiveButtonStyle}>NEW LAUNCHES 🚀</button>
            <button id="wfhz" onClick={handleWfhClick} style={activeChart === 'wfh' ? activeButtonStyle : inactiveButtonStyle}>WFH 📞</button>
            <button id="unboxedz" onClick={handleUnboxedClick} style={activeChart === 'unboxed' ? activeButtonStyle : inactiveButtonStyle}>UNBOXED 📦</button>
          </div>
        </div>
        <div id="contentz" style={{ display: 'flex', overflowX: 'scroll', height: '400px', margin: '30px 0 20px 0' }}>
           {chartProducts.map((product) => (
             <div key={product.id} className="cardz" onClick={() => handleProductClick(product)} style={{ width: '205px', lineHeight: '1.7em', color: 'rgb(66, 66, 66)', cursor: 'pointer', padding: '1%', flexShrink: 0 }}>
               <img src={product.image1} alt={product.title} style={{ width: '205px' }} />
               <p style={{ fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>{product.title}</p>
               <p>{product.subtitle}</p>
               <div className="pricez"><span style={{ color: 'blue', fontWeight: 'bold', marginRight: '10px' }}>{product.price}</span><span style={{ textDecoration: 'line-through', color: 'gray' }}>{product.price2}</span></div>
               <div className="ratingz" style={{ fontSize: '11px', color: 'black' }}><i className="fa-solid fa-star" style={{ color: 'orange' }}></i><i className="fa-solid fa-star" style={{ color: 'orange' }}></i><i className="fa-solid fa-star" style={{ color: 'orange' }}></i><i className="fa-solid fa-star" style={{ color: 'orange' }}></i><i className="fa-solid fa-star-half-stroke" style={{ color: 'orange' }}></i><span style={{ marginLeft: '10px' }}>{product.rating}</span></div>
             </div>
           ))}
         </div>
        <div id="leftDivz"><i className="fa-solid fa-arrow-left"></i></div>
        <div id="rightDivz"><i className="fa-solid fa-arrow-right"></i></div>
        <button id="Viewmore">VIEW MORE</button>
      </div>

      <div id="freshz">
        <p>FRESH OFF THE BOAT, EXPLORE THE BEST IN AUDIOPHILIA RIGHT NOW</p>
        <p>NEW LAUNCHES</p>
        <div id="boxzdiv"><div className="boxz" style={{ backgroundImage: "url('https://cdn.shopify.com/s/files/1/0153/8863/files/64Audio-Duo_NewArrivalsBanner_fdc2eaeb-aa36-4b6a-9e26-d4982f226286_700x.jpg?v=1654680319')" }}><div><p>64 AUDIO - DUO</p><p>PERFECT MATCH</p><p>MADE</p></div></div><div className="boxz" style={{ backgroundImage: "url('https://cdn.shopify.com/s/files/1/0153/8863/files/Meze-ADVAR_NewArrivalsBanner_700x.jpg?v=1651755551')" }}><div><p>MEZE - ADVAR</p><p>FORM MEETS</p><p>FUNCTION</p></div></div><div className="boxz" style={{ backgroundImage: "url('https://cdn.shopify.com/s/files/1/0153/8863/files/Fiio_-_K5ProEss_NewArrivalsBanner_6bfbe703-7bbd-4711-8f9f-add743f9ba7a_700x.jpg?v=1651755230')" }}><div><p>FIIO - K5 PRO ESS</p><p>MIGHT GETS</p><p>MIGHTIER</p></div></div></div>
      </div>

      <div id="confusedz"><div><p>CONFUSED? DON'T BE.</p><p>Find your perfect headphones in 3 steps now with our Headphone Finder.</p><button>TAKE THE QUIZ</button></div></div>
      <div id="finderz"><div></div><div id="innerz"><img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-finder-headphone-stacked_1000x.jpg?v=1645189533" alt="" /><div id="welcomez"><p>WELCOME TO OUR HEADPHONE FINDER</p><p>Our Headphone Gurus obsess over every headphone so you get the perfect one. They have spent years reviewing & listening to countless headphones every day. Our Headphone Gurus are the go-to guys for everything audio.</p><p>Our Headphone Finder puts together their top recommendations. In 4 easy steps, find the perfect headphones for you.</p><button>BEGIN HERE</button></div></div></div>

      <div id="brandz">
        <div><p>THE ONLY REASON SOME NAMES ARE MISSING IS BECAUSE THEY PROBABLY SOUND LIKE CRAP</p><p>HOME TO THE WORLD'S FINEST BRANDS</p></div>
        <div id="logoz" style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '20px', margin: '44px 0', height: '57%' }}>
          {logoData.map((logoUrl, index) => (<div key={index} className="logozCard" style={{ cursor: 'pointer', width: '100%' }}><img src={logoUrl} alt={`Brand Logo ${index + 1}`} style={{ width: '100%' }} /></div>))}
        </div>
        <button>SEE ALL</button>
      </div>

      <div id="slideShowz" style={{ height: '600px', margin: '0 0 70px 0', position: 'relative' }}>
        <img src={slideShowData[setupIndex]} alt={`Setup ${setupIndex + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', height: '120px', width: '240px', backgroundColor: 'white', borderRadius: '10px', zIndex: 0, bottom: '7%', left: '3%', fontWeight: 'bold', color: 'rgb(74, 74, 74)' }}>
          <div style={{ height: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid lightgray' }}>SETUPS OF THE MONTH</div>
          <div style={{ height: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div id="left_btn" onClick={handleSetupPrev} style={{ width: '30%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}><i className="fa-solid fa-arrow-left"></i></div>
            <div id="countz" style={{ width: '47%', borderLeft: '1px solid lightgray', borderRight: '1px solid lightgray', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{setupIndex + 1} / {slideShowData.length}</div>
            <div id="right_btn" onClick={handleSetupNext} style={{ width: '30%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}><i className="fa-solid fa-arrow-right"></i></div>
          </div>
        </div>
      </div>

      <div id="container_s1"><div><img id="india" src="https://cdn.shopify.com/s/files/1/0153/8863/files/ALL-CITIES-2_1000x.jpg?v=1648538565" alt="" /></div><div><div id="card_s"><p>UPCOMING EVENTS</p><h1>COMING TO A CITY NEAR YOU!</h1><p>Get ready to put on some headphones, grab your mugs and rediscover your favourite music like never before. With a lineup of the world's finest headphones, food, beverages, music and conversations to share with friends and strangers alike, Headphone Connect is back!</p><button>EXPLORE NOW</button></div></div></div>

      {/* --- Quotes/Partners Section (Now Dynamic) --- */}
      <div id="poas">
        <div id="pairz">
          <div><i className="fa-solid fa-quote-right"></i></div>
          <p id="piz">{pizText}</p>
          <p id="piiz">{piizText}</p>
          <p id="piiiz">{piiizText}</p>
          <div id="partnerz">
            <img id="ndtv" src="https://cdn.shopify.com/s/files/1/0153/8863/files/Artboard_6_150x.png?v=1645786123" alt="NDTV" onClick={handleNdtvClick} style={{ cursor: 'pointer' }}/>
            <img id="express" src="https://cdn.shopify.com/s/files/1/0153/8863/files/Artboard_4_150x.png?v=1645786084" alt="Express" onClick={handleExpressClick} style={{ cursor: 'pointer' }}/>
            <img id="today" src="https://cdn.shopify.com/s/files/1/0153/8863/files/Artboard-2_150x.png?v=1645786582" alt="Today" onClick={handleTodayClick} style={{ cursor: 'pointer' }}/>
            <img id="day" src="https://cdn.shopify.com/s/files/1/0153/8863/files/Artboard_1_150x.png?v=1645785899" alt="Day" onClick={handleDayClick} style={{ cursor: 'pointer' }}/>
            <img id="indulge" src="https://cdn.shopify.com/s/files/1/0153/8863/files/Artboard_3_150x.png?v=1645785993" alt="Indulge" onClick={handleIndulgeClick} style={{ cursor: 'pointer' }}/>
            <img id="wire" src="https://cdn.shopify.com/s/files/1/0153/8863/files/Artboard_5_62eaa197-8076-44be-aa02-b17c60c22246_150x.png?v=1645786064" alt="Wire" onClick={handleWireClick} style={{ cursor: 'pointer' }}/>
          </div>
        </div>
        {/* --- End Quotes/Partners Section --- */}

        <div id="ourz"><p>OUR VALUES</p><div><div><p>01</p><p>WE'RE LADIES & GENTLEMEN SERVING LADIES & GENTLEMEN</p></div><div><p>02</p><p>WE CHOOSE TO BE THE BEST, RATHER THAN THE BIGGEST</p></div><div><p>03</p><p>WE'RE NOT A MUSIC COMPANY, BUT MUSIC IS AT THE CORE OF WHAT WE DO</p></div><div><p>04</p><p>WE'RE 100% OWNED, OPERATED AND FUNDED BY PROUD INDIANS</p></div><div><p>05</p><p>WE SUPPORT SMALL, INDEPENDENT AND LOCAL BUSINESSES AND COMMUNITIES</p></div></div></div>
        <div id="audioz"><img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Club_Audiophile_Logos-400-200_400x.png?v=1640072704" alt="Club Audiophile" /><div id="joinz"><p>IT PAYS TO BE AN AUDIOPHILE</p><p>Enjoy Incredible Members-only rewards on the world's finest headphones and earn loyalty points on every purchase.</p><button>JOIN THE CLUB</button></div></div>

        {/* --- Newsletter Section (Now Dynamic) --- */}
        <div id="subz">
          <div>
            <p>SUBSCRIBE TO OUR NEWSLETTER</p>
            <p>Sign up to join 1,00,000+ audiophiles & stay in the know with hacks, new launches, curated playlists & once-in-a-lifetime deals.</p>
            <input
              id="emailz"
              type="email"
              placeholder="Your e-mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button id="emailzbtn" onClick={handleSubscribe}>SUBSCRIBE</button>
          </div>
        </div>
         {/* --- End Newsletter Section --- */}
      </div>

      <div id="insta_connect"><div><p>EVERYDAY AT @HEADPHONEZONE</p><p>Follow our growing Insta fam on Instagram for your daily audiophile fix</p></div><div id="container_s2">{/* Placeholder */}<div><img src="https://scontent-cdt1-1.cdninstagram.com/v/t51.29350-15/287296141_717944309453910_5064801988089522698_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=MGTywTF7MnsAX_xC_tf&_nc_ht=scontent-cdt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_Xo23BSG-beYkltibxTo3XwMIHBzEtf1avCOBvfpmoqw&oe=62AFB09A" alt="" /><div></div></div><div><img src="https://scontent-cdg2-1.cdninstagram.com/v/t51.29350-15/287208906_552273783199267_5252788993228588311_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=IxW8l9NBkRIAX_77HP_&_nc_ht=scontent-cdg2-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8J2e4clJkyJWc4edb9Qi0I6YtIuMLiq5GGMvIvPEIl7w&oe=62AF138D" alt="" /><div></div></div><div><img src="https://scontent-cdt1-1.cdninstagram.com/v/t51.29350-15/284322132_295917145970339_8996905122198278039_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=qtAe5xKQsiwAX8k3TG_&_nc_ht=scontent-cdt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_RmaLGFIHz1YRx2iDPmhr7ZeyT9Vj-OeHGFPV9jvIbiw&oe=62AECF99" alt="" /><div></div></div><div><img src="https://scontent-cdt1-1.cdninstagram.com/v/t51.29350-15/283698315_534936578225552_3382599809799712189_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=o5wp2z1MP4sAX_bPqMc&_nc_ht=scontent-cdt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9RUIk6b21U9ZvL2p-Sxcpdg2Foe1NihArJKj4UpRtHRA&oe=62AEDFBB" alt="" /><div></div></div><div><img src="https://scontent-cdt1-1.cdninstagram.com/v/t51.29350-15/284638731_2087483601424041_688519866159127679_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Rml43033hjMAX-odluF&_nc_ht=scontent-cdt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9kqFDWqWlZwtUH7vNvUjY_go4yYi_zi-YQL--ZcmJGXg&oe=62B09B8B" alt="" /><div></div></div><div><img src="https://scontent-cdt1-1.cdninstagram.com/v/t51.29350-15/286488430_555405362964611_2793881737802190858_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=GaHAMisnwrEAX_OBFCq&_nc_ht=scontent-cdt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9ViCVa-2ue0Xn25XsspzNSFxkZ_yhhNMgfyk9Jh3HHqQ&oe=62B041DC" alt="" /><div></div></div><div><img src="https://scontent-cdt1-1.cdninstagram.com/v/t51.29350-15/285210134_532588138413864_8977195827901658595_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=HpH6YfqNPhwAX-B0JlE&_nc_ht=scontent-cdt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9O8xex23ZBfdpYdaRdouRpOL6wNaK03r8qOBGdZamB4Q&oe=62AF7415" alt="" /><div></div></div><div><img src="https://scontent-cdg2-1.cdninstagram.com/v/t51.29350-15/281415681_2562740617195320_2415806610902096525_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=K57PMjuNIwYAX9_4GRR&_nc_ht=scontent-cdg2-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8W5q8TZrs2nP8VbN8ZKllRZe3RIKkECSIYRPy3W6YPpg&oe=62AF3D1C" alt="" /><div></div></div><div><img src="https://scontent-cdg2-1.cdninstagram.com/v/t51.29350-15/279957192_986125098713138_1315604255357174107_n.webp?stp=dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=d6fVkoDrQWEAX-6MncK&_nc_ht=scontent-cdg2-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_Q45AwADOflELr92KIeJZqOVStuzdgod4sef0WFw-DCA&oe=62B0209C" alt="" /><div></div></div></div></div>

      {/* Removed static alert divs */}

    </div>
  );
};

export default HomePage;

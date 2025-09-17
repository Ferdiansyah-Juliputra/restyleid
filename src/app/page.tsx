// Home.jsx

"use client"
import { useState, useEffect } from 'react';
import AnimatedContent from '@/components/AnimatedContent'; 
import Image from 'next/image';

export default function Home() {
  const [isIntro, setIsIntro] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 4500);

    const unmountTimer = setTimeout(() => {
      setIsIntro(false);
    }, 4500 + 800); 

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center">
    {isIntro && (
      <div 
        className={`
          flex items-center font-slab 
          text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl
          text-mahogany
          ${isExiting ? 'animate-exit' : 'animate-fade-in-out'}
        `}
      >
        <h1>Re</h1>
        
        <div className="relative overflow-hidden w-[4.1ch] h-[1.5em]">
          <span className="animated-word absolute top-1/2 left-0 -translate-y-1/2">vive</span>
          <span className="animated-word absolute top-1/2 left-0 -translate-y-1/2">wear</span>
          <span className="animated-word absolute top-1/2 left-0 -translate-y-1/2">Style</span>
        </div>

        <span 
          className="
            id-animation 
            text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl
          "
        >
          .ID
        </span>
      </div>
    )}

      {!isIntro && (
        // Wrapper ini akan menumpuk konten secara vertikal
        <div className="flex flex-col items-center justify-center w-full py-20">
          <AnimatedContent
            distance={150}
            direction="vertical"
            duration={1.2}
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0}
          >
            <div className="w-full max-w-6xl mx-auto mainGrid ">
              <div className="parent">
                <div className="div1 flex flex-col items-start justify-start">
                  <p className="text-sm sm:text-base md:text-base lg:text-sm xl:text-base leading-relaxed font-normal text-mahogany text-justify">
                    Based in Surabaya, <strong>ReStyle.ID</strong> is a sustainable thrift shop dedicated to giving pre-loved fashion a new life. 
                    Our mission is to <strong>promote eco-friendly fashion by offering high-quality</strong>, <strong>affordable thrifted clothing while reducing textile waste. </strong> 
                    Ultimately, our vision is to <strong>become a leading thrift brand in Indonesia</strong>, inspiring people to choose sustainability without compromising on a style that is both timeless and accessible.
                  </p>
                </div>
                <div className="div2 flex items-center justify-center p-4">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={300}
                    height={300}
                    className="w-80 h-80 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain rounded-2xl"
                  />
                </div>
                <div className="div3 text-center">Link Shopee dan Catalog</div>
                <div className="div4 flex flex-col items-start justify-start">
                  <p className="text-sm sm:text-base md:text-base lg:text-sm xl:text-base leading-relaxed font-normal text-mahogany text-justify">
                    Guided by core values of <strong>sustainability, style, and affordability</strong>, 
                    ReStyle.ID makes eco-friendly fashion accessible to everyone. Available through our Instagram and online 
                    marketplace platforms, our curated collection of thrift clothing spans vintage, streetwear, casual, and formal 
                    wear, with each piece selected to be both trend-savvy and timeless. We cater to eco-conscious youth, students, and 
                    young professionals <strong>(ages 18-30)</strong> who seek unique, budget-friendly, and one-of-a-kind pieces to express their individuality.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedContent>
          
          <section className="w-full max-w-6xl mx-auto px-4 mt-24 text-center">
            <AnimatedContent
              distance={150}
              direction="vertical"
              duration={1.2}
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-slab text-mahogany mb-12">
                Why Choose Us?
              </h2>
            </AnimatedContent>
            <AnimatedContent
              distance={150}
              direction="vertical"
              duration={1.2}
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0}
              delay={0.5}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                <div className="bg-sand p-6 rounded-2xl flex items-start space-x-4">
                  <div>
                    <h3 className="font-bold text-xl sm:text-2xl text-mahogany mb-1">High-Quality Selections</h3>
                    <p className="text-mahogany text-base sm:text-lg md:text-xl mt-4">Every item is carefully curated to ensure it meets our standards of style and quality.</p>
                  </div>
                </div>
                <div className="bg-sand p-6 rounded-2xl flex items-start space-x-4">
                  <div>
                    <h3 className="font-bold text-xl sm:text-2xl text-mahogany mb-1">Affordable Style</h3>
                    <p className="text-mahogany text-base sm:text-lg md:text-xl mt-4">We make sustainable fashion accessible without compromising on your personal style.</p>
                  </div>
                </div>
                <div className="bg-sand p-6 rounded-2xl flex items-start space-x-4">
                  <div>
                    <h3 className="font-bold text-xl sm:text-2xl text-mahogany mb-1">Eco-Friendly Impact</h3>
                    <p className="text-mahogany text-base sm:text-lg md:text-xl mt-4">Contribute to a greener planet by reducing textile waste with every purchase.</p>
                  </div>
                </div>
                <div className="bg-sand p-6 rounded-2xl flex items-start space-x-4">
                  <div>
                    <h3 className="font-bold text-xl sm:text-2xl text-mahogany mb-1">Fun & Accessible Shopping</h3>
                    <p className="text-mahogany text-base sm:text-lg md:text-xl mt-4">We&apos;re active on social media to make your thrift shopping experience enjoyable.</p>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </section>

          {/* === BAGIAN BARU: CONTACT US === */}
          <section className="w-full max-w-6xl mx-auto px-4 mt-24 text-center">
            <AnimatedContent
              distance={150}
              direction="vertical"
              duration={1.2}
              initialOpacity={0}
              animateOpacity
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-slab text-mahogany mb-12">
                Get In Touch
              </h2>
            </AnimatedContent>
            
            <AnimatedContent
              distance={150}
              direction="vertical"
              duration={1.2}
              initialOpacity={0}
              animateOpacity
              delay={0.5}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                {/* Social Media Card */}
                <div className="bg-sand p-8 rounded-2xl">
                  <h3 className="font-bold text-xl sm:text-2xl text-mahogany mb-4">Social Media</h3>
                  <div className="flex flex-col space-y-4">
                    <a href="https://www.instagram.com/restyle.id06?utm_source=qr&igsh=MW83eDIzNWN6MnNjdg==" target='blank' className="text-mahogany hover:underline transition duration-200 ease-in-out flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                      @restyle.id06
                    </a>
                    <a href="#" target='blank' className="text-mahogany hover:underline transition duration-200 ease-in-out flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                      ReStyle.ID Official
                    </a>
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-sand p-8 rounded-2xl">
                  <h3 className="font-bold text-xl sm:text-2xl text-mahogany mb-4">Email</h3>
                  <a href="mailto:contact@restyle.id" className="text-mahogany hover:underline transition duration-200 ease-in-out flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    contact@restyle.id
                  </a>
                </div>

                {/* Location Card */}
                <div className="bg-sand p-8 rounded-2xl">
                  <h3 className="font-bold text-xl sm:text-2xl text-mahogany mb-4">Location</h3>
                  <p className="text-mahogany flex items-center text-base sm:text-lg md:text-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    Surabaya, Indonesia
                  </p>
                </div>
              </div>
            </AnimatedContent>
          </section>
        </div>
      )}
    </main>
  );
}

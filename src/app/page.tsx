"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export default function VideoHero() {
  const [isMobile, setIsMobile] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(true);

  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const desktopVideo = "https://cdn.builder.io/o/assets%2Fcfdade1741a141b6a543d6f07cefe0a0%2Faed9fa8ffcdb464b99580b080d55f832%2Fcompressed?apiKey=cfdade1741a141b6a543d6f07cefe0a0&token=aed9fa8ffcdb464b99580b080d55f832&alt=media&optimized=true";
  const mobileVideo = "https://cdn.builder.io/o/assets%2Fcfdade1741a141b6a543d6f07cefe0a0%2F8e0a95ddafc340cab10b589c9272608f%2Fcompressed?apiKey=cfdade1741a141b6a543d6f07cefe0a0&token=8e0a95ddafc340cab10b589c9272608f&alt=media&optimized=true";

  const handlePlayVideo = () => {
    if (isMobile && mobileVideoRef.current) {
      mobileVideoRef.current.play();
      setIsTextVisible(false);
    } else if (!isMobile && desktopVideoRef.current) {
      desktopVideoRef.current.play();
      // No text fade on desktop
    }
  };

  return (
    <>
      <Head>
        <script
          type="module"
          src="https://agent.d-id.com/v1/index.js"
          data-name="did-agent"
          data-mode="fabio"
          data-client-key="Z29vZ2xlLW9hdXRoMnwxMTA0MTc1NDA1OTYyMTk4NjMxMTI6eDBVbko4SnRQNWNtTzB0SURpWnRs"
          data-agent-id="agt_jF9PSC1p"
          data-monitor="true"
        ></script>
      </Head>

      <section className="px-6 py-6 md:p-8">
        <div className="relative w-full h-[85vh] overflow-hidden rounded-[2.5rem] bg-black">
          {!videoError && (
            <>
              <video
                key="desktop-video"
                ref={desktopVideoRef}
                playsInline
                onError={() => setVideoError(true)}
                className={`absolute inset-0 w-full h-full object-cover opacity-70 ${
                  isMobile ? 'hidden' : 'block'
                }`}
                poster="https://cdn.builder.io/api/v1/image/assets%2Fcfdade1741a141b6a543d6f07cefe0a0%2F99f0f6cd43b04c818a8276c512c7d07f?&auto=format&fit=crop"
              >
                <source src={desktopVideo} type="video/mp4" />
              </video>
              
              <video
                key="mobile-video"
                ref={mobileVideoRef}
                playsInline
                onError={() => setVideoError(true)}
                className={`absolute inset-0 w-full h-full object-cover opacity-70 ${
                  isMobile ? 'block' : 'hidden'
                }`}
                poster="https://cdn.builder.io/api/v1/image/assets%2Fcfdade1741a141b6a543d6f07cefe0a0%2F1b9c60d702b741c89d3562f4b3e5dafa?q=80&w=2728&auto=format&fit=crop"
              >
                <source src={mobileVideo} type="video/mp4" />
              </video>
            </>
          )}
          
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-center h-full">
              <div className="max-w-2xl">
                <div className={`transition-opacity duration-500 ${!isTextVisible && isMobile ? 'opacity-0' : 'opacity-100'}`}>
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                    Human | Not Human
                  </h1>
                  <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 leading-tight">
                    Robert A Hinds
                  </h1>
                  
                  <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                    Robert is an experienced multimedia artist with a rich background in web development, design, and motion graphics.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-black border-white hover:bg-white/10" onClick={handlePlayVideo}>
                    Play
                    <Play className="ml-2 h-4 w-4" />
                  </Button>

                  <Link href="/test">
                    <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-gray-100">
                      Enter
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      </section>
    </>
  );
}
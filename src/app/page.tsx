"use client";
import * as React from "react";
import { useRef, useState } from "react";
import Head from 'next/head';


export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null); // Specify the type of useRef
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        // Hide the poster image
        videoRef.current?.setAttribute('poster', '');
      }).catch((error) => {
        console.error('Error playing video:', error);
      });
    }
  };

  return (
    <div className="box-border flex relative flex-col shrink-0 w-full min-h-[20px] min-w-[20px]">
      <Head>
        <script
          type="module"
          src="https://agent.d-id.com/v1/index.js"
          data-name="did-agent"
          data-mode="fabio"
          data-client-key="Z29vZ2xlLW9hdXRoMnwxMTA0MTc1NDA1OTYyMTk4NjMxMTI6eDBVbko4SnRQNWNtTzB0SURpWnRs"
          data-agent-id="agt_3yZn9XkE"
          data-monitor="true"
        ></script>
      </Head>
      <a href="/test" className="button">Read more</a>
      <div className="fixed relative">
        {/* Desktop Video */}
        <video
          ref={videoRef}
          className="hidden md:block box-border object-cover fixed flex-col shrink-0 min-h-[20px] min-w-[20px] w-full h-full"
          poster="https://cdn.builder.io/api/v1/image/assets%2Fcfdade1741a141b6a543d6f07cefe0a0%2F1619028b3eb44bcebf652aa45ad83023"
          autoPlay={false}
          muted={false}
          controls={false}
          playsInline={true}
          loop={false}
          src="https://cdn.builder.io/o/assets%2Fcfdade1741a141b6a543d6f07cefe0a0%2F35892a6997a64b16a6422202b6b979c9%2Fcompressed?apiKey=cfdade1741a141b6a543d6f07cefe0a0&token=35892a6997a64b16a6422202b6b979c9&alt=media&optimized=true"
        />

        {!isPlaying && (
          <div
            className="custom-play-button"
            onClick={handlePlay}
          >
            <span>►</span>
          </div>
        )}

        {/* Mobile Video */}
        <video
          className="block md:hidden box-border object-cover fixed flex-col shrink-0 min-h-[20px] min-w-[20px] w-full h-full"
          poster="https://cdn.builder.io/api/v1/image/assets%2Fcfdade1741a141b6a543d6f07cefe0a0%2F2537612138fc4492a3b2a70480a21173"
          autoPlay={false}
          muted={false}
          controls={false}
          playsInline={true}
          loop={false}
          src="https://cdn.builder.io/o/assets%2Fcfdade1741a141b6a543d6f07cefe0a0%2F8e0a95ddafc340cab10b589c9272608f%2Fcompressed?apiKey=cfdade1741a141b6a543d6f07cefe0a0&token=8e0a95ddafc340cab10b589c9272608f&alt=media&optimized=true"
        />

        {/* Placeholder */}
        <div className="pt-72 w-full text-xs pointer-events-none" />
      </div>
    </div>
  );
}